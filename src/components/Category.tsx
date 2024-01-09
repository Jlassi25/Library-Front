
import { useToast } from '@chakra-ui/react'
import {  useRef } from 'react';

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

import { Hoc } from "../HOC/hoc";
import { useDispatch, useSelector } from "react-redux";
import { allCategories, deleteCategory, createCategory } from "../features/category/categorySlice";
import { AppDispatch } from '../Store/store';

const Category = () => {


  //redux
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(allCategories())

  }, [dispatch]);

const {categories:cats,loading,error:err} = useSelector((state:any)=>state.CategoriesSlice);


  //redux



  const [categories,setCategories]=useState<any>(cats);
  const [searchTerm, setSearchTerm] = useState<any>("")
  const [formData, setFormData] = useState<any>({
    title: '',
    description: ''
  });


  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)

  const toast = useToast()

  useEffect(() => {
    if (cats) {
      setCategories(cats);
    }
  }, [cats]);


  const handleDeleteCat = async (id:any) => {
    try {

      await dispatch(deleteCategory(id));

      toast({
        title: 'Category Deleted.',
        description: 'Category has been deleted successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      // Handle errors, show error toast, etc.
      console.error('Failed to delete category:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete category.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };


  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
    
      await dispatch(createCategory(formData));

      onClose();

      setFormData({
        title: '',
        description: ''
      });
      toast({
        title: 'Category Added.',
        description: `Category ${formData.title} has been added successfully!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (err) {
      toast({
        title: 'Server Error.',
        description: "Error:" + err,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })

    }

  }
  const filteredCategories = categories ? categories.filter((cat:any) =>
    cat.title && cat.title.toLowerCase().includes( searchTerm.toLowerCase())
  ):categories

  return (
    <>
      <h1> List of Categories</h1>
      
      <Flex justify="space-between" m="30">

        <Input type="text" placeholder="Search Category" variant='outline' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} htmlSize={30} width='auto' />
        <Button colorScheme='teal' onClick={onOpen}>New Category <FaPlus style={{ marginLeft: '8px' }} /></Button>
      </Flex>

      <Flex direction="column" m="100">

        <SimpleGrid spacing={20} templateColumns='repeat(auto-fill, minmax(230px, 1fr))'>
        {loading &&
        <Flex justify="center" marginTop={200}>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='green.500' size='xl' />
        </Flex>
      }
      {err && <div>{err.message} </div>}
          {filteredCategories && filteredCategories.map((category:any) => (
            <Card key={category.catId}>
              <CardHeader  >
                <Heading size='md'>{category.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{category.description}</Text>
              </CardBody>
              <CardFooter >



                <Button marginLeft="auto" variant='outline' colorScheme='red' onClick={() => handleDeleteCat(category.catId)}>Delete</Button>
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
          <form onSubmit={handleSubmit}>
            <ModalHeader>New Category</ModalHeader>
            <ModalCloseButton onClick={() => setFormData({ title: '', description: '' })} />
            <ModalBody pb={6}>

              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input value={formData.title} onChange={(event) => setFormData({ ...formData, title: event.target.value })} placeholder='Title' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} placeholder='Here is a sample description' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={() => { onClose(); setFormData({ title: '', description: '' }); }}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

    </>
  );
}

export default Hoc(Category) ;