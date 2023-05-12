import { useParams,useNavigate  } from "react-router-dom"
import useFetch from "../Hooks/useFetch";
import { Button,Flex,Stack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

import axios from 'axios';


const BookDetails = () => {
    const { id } = useParams()
    const {data:book,err,ispending} = useFetch("http://localhost:8080/book/"+id)
    const navigate = useNavigate();
    const toast = useToast()

    const handleDelete =()=>{
        axios.delete("http://localhost:8080/book/"+id)
        .then( ()=>{
            navigate(-1);
            toast({
                title: 'Book Deleted.',
                description: "Book has been deleted successfully!",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        })
        .catch(error=>{
            toast({
                title: 'Server Error.',
                description: "Error:"+error,
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        })
        }
    
    return ( 

    <>
        { ispending && <div>Loading...</div> }
        { err && <div>{ err }</div> }
        {book && 
            <section className="profile_container">
            <div className="profile_img_section">
            <img className="profile_img-LG" src="https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg" />
          
            </div>
            <div className="profile_desc_section">
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p className="description">{book.description}</p>
            <div className="interests">
                <span className="interests_item">Technology</span>
                <span className="interests_item">Management</span>
                <span className="interests_item">Leadership</span>
            </div>
       
            </div>
            
        </section>
        
        }
      <Flex justify="center " >
                <Stack direction="row" spacing={4}> 
                    <Button variant='outline'  colorScheme='green'>Borrow To</Button>
                    <Button variant='outline'  colorScheme='red' onClick={handleDelete}>Delete</Button>
                </Stack>
            </Flex>  
     
    </>

     );
}
 
export default BookDetails;