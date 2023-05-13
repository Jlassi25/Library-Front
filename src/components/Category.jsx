import useFetch from "../Hooks/useFetch";
import { useToast } from '@chakra-ui/react'
import { useRef } from 'react';
import axios from "axios";
import { FaPlus } from 'react-icons/fa';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel, useDisclosure,
  Input,
  Textarea
} from '@chakra-ui/react'

import { Flex, Spinner } from '@chakra-ui/react'
import { SimpleGrid, CardFooter, CardBody, Card, Heading, CardHeader, Text, Button } from '@chakra-ui/react';
import { useEffect, useState } from "react";

const Category = () => {
  const { data, ispending, err } = useFetch("http://localhost:8080/category")
  const [categories, setCategories] = useState(data);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)

  const toast = useToast()

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);
  const handleDeleteCat = (id) => {
    console.log("Category id:", id);
    axios.delete("http://localhost:8080/category/" + id)
      .then(() => {

        toast({
          title: 'Category Deleted.',
          description: "Category has been deleted successfully!",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        const newCats = categories.filter(cat => cat.catId !== id);
        setCategories(newCats);

      })
      .catch(error => {
        toast({
          title: 'Server Error.',
          description: "Error:" + error,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      })
  }
  return (
    <>
      <h1> A list of Categories</h1>
      {ispending &&
        <Flex justify="center" marginTop={200}>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='green.500' size='xl' />
        </Flex>
      }
      {err && <div>{err.message}</div>}
      <Flex justify="flex-end" m="30">
        <Button colorScheme='teal' onClick={onOpen}>New Category <FaPlus style={{ marginLeft: '8px' }}/></Button>
      </Flex>

      <Flex direction="column" m="100">

        <SimpleGrid spacing={20} templateColumns='repeat(auto-fill, minmax(230px, 1fr))'>

          {categories && categories.map((category) => (
            <Card key={category.catId}>
              <CardHeader  >
                <Heading size='md'>{category.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{category.description}</Text>
              </CardBody>
              <CardFooter >

                <Button >View Books</Button>

                <Button marginLeft={10} variant='outline' colorScheme='red' onClick={() => handleDeleteCat(category.catId)}>Delete</Button>
              </CardFooter>
            </Card>
          ))

          }


        </SimpleGrid>
      </Flex>






      <Modal
        initialFocusRef={initialRef}

        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='Title' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='Here is a sample description' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  );
}

export default Category;