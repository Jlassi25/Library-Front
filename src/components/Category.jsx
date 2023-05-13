import useFetch from "../Hooks/useFetch";
import { useToast } from '@chakra-ui/react'

import axios from "axios";

import { Flex, Spinner } from '@chakra-ui/react'
import { SimpleGrid, CardFooter, CardBody, Card, Heading, CardHeader, Text, Button } from '@chakra-ui/react';
import { useEffect, useState } from "react";

const Category = () => {
  const { data, ispending, err } = useFetch("http://localhost:8080/category")
  const [categories, setCategories] = useState(data);

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



    </>
  );
}

export default Category;