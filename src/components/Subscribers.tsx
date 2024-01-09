import {
    Heading,
    Avatar,
    Box,

    Image,
    Flex,
    Text,
    Stack,
    Button,

    Spinner,
    Input,

} from '@chakra-ui/react';

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

} from '@chakra-ui/react'
import useFetch from '../Hooks/useFetch';
import { FaPlus } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';
import { HandlePostRequest } from '../Helpers/HandlePostRequest';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { Hoc } from '../HOC/hoc';
import { allSubscriber, createSubscriber, deleteSubscriber, sortSubscribersASC, sortSubscribersDES } from '../features/subscriber/subscriberSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../Store/store';
import ReactPaginate from 'react-paginate';



const Subscribers = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)

    const { subscribers: subs, loading, error:err } = useSelector((state: any) => state.Subscribers);

    const [subscribers, setSubscribers] = useState<any>(subs);
    const [searchTerm, setSearchTerm] = useState<string>("")

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(allSubscriber())
    }, [dispatch]);

    useEffect(() => {

        setSubscribers(subs);

    }, [subs]);




    const toast = useToast()


    const [formData, setFormData] = useState<any>({
        fname: '',
        lname: '',
        address: '',
        expirationDate: ''
    })
    //**********Pagination************* */
    const [itemOffset, setItemOffset] = useState(0);

    const filteredSubs = subscribers ? subscribers.filter((sub: any) =>
    sub.fname && sub.fname.toLowerCase().includes(searchTerm.toLowerCase())
) : subscribers;


    const endOffset = itemOffset + 3;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const paginatedItems = filteredSubs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredSubs.length / 3);

    const handlePageClick = (event:any) => {
        const newOffset = (event.selected * 3) % filteredSubs.length;
       
        setItemOffset(newOffset);
      };

    //?submit method

    const handleSubmit = async (e: any) => {
        e.preventDefault();
       
        //setFormData(...formData.expirationDate = new Date(formData.expirationDate).toISOString().slice(0, 10))


        try {
            await dispatch(createSubscriber(formData))

            onClose();

            setFormData({
                title: '',
                description: ''
            });
            toast({
                title: 'Subscriber Added.',
                description: `Subscriber ${formData.title} has been added successfully!`,
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


    //? handle delete

    const handleDelete = async (id: Number) => {
        try {
            await dispatch(deleteSubscriber(id))

            toast({
                title: 'Subscriber Deleted.',
                description: "Subscriber has been deleted successfully!",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

        } catch (error: any) {
            toast({
                title: 'Server Error.',
                description: "Error:" + error,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }
 
    //try sort
    const [sort,setSort]= useState<boolean>(true);
    const sortbydate=()=>{
        if(sort){
            dispatch(sortSubscribersASC())
            setSort(false)
        }else{
            dispatch(sortSubscribersDES())
            setSort(true)
        }
       
    }
   
    return (
        <>
       
            <h1> Subscribers</h1>
            {loading &&
                <Flex  data-testid="loading"  justify="center" marginTop={200}>
                    <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='green.500' size='xl' />
                </Flex>
            }
            {err && <div data-testid="error">{err.message}</div>}


            <Flex justify="space-between" m="30">

                <Input data-testid="search" type="text" placeholder="Search Subscriber" variant='outline' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} htmlSize={30} width='auto' />
                <Button colorScheme='teal' onClick={onOpen} >New Subscriber <FaPlus style={{ marginLeft: '8px' }} /></Button>
            </Flex>
            <Flex justify="center">
            <button className='btn btn-info'  onClick={sortbydate}><strong>Sort by Expiration Date {sort?"ASC":"DES"}</strong></button>
            </Flex>

            <Flex wrap="wrap" justify="space-around">
                {paginatedItems && paginatedItems.map((sub: any) => (
                    <Box
                    data-testid="card"
                        key={sub.cin}
                        m={10}
                        maxW={'270px'}
                        w={'full'}
                        bg={new Date(sub.expirationDate) < new Date() ? '#fdbfb5' : 'white'}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <Image
                            h={'120px'}
                            w={'full'}
                            src={
                                'https://miro.medium.com/v2/resize:fit:828/format:webp/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg'
                            }
                            objectFit={'cover'}
                        />
                        <Flex justify={'center'} mt={-12}>
                            <Avatar
                                size={'xl'}
                                src={
                                    `https://api2.rntt.tn/routeicon?ligne=${sub.fname.charAt(0).toUpperCase() + sub.lname.charAt(0).toUpperCase()}&color=6BD098`
                                }

                                css={{
                                    border: '2px solid white',
                                }}
                            />
                        </Flex>

                        <Box   
                        p={6}>
                            <Stack spacing={0} align={'center'} mb={5}>
                                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                    {sub.fname}  {sub.lname}
                                </Heading>
                                <Text color={'gray.500'}>{sub.address}</Text>
                            </Stack>

                            <Stack direction={'row'} justify="space-between" spacing={6}>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600} >{sub.expirationDate}</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                        Expired on

                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={'center'}>
                                    <Text fontWeight={600}>{sub.books ? sub.books.length : 0}</Text>
                                    <Text fontSize={'sm'} color={'gray.500'}>
                                        Books
                                    </Text>
                                </Stack>
                            </Stack>

                            <Button
                                w={'full'}
                                mt={8}
                                bg={'#a51600'}
                                color={'white'}
                                rounded={'md'}
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                }}

                                onClick={() => handleDelete(sub.cin)}
                            >

                                Delete
                            </Button>
                        </Box>
                    </Box>
                ))}

            </Flex>



     



            <Modal
                initialFocusRef={initialRef}

                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={handleSubmit}>
                        <ModalHeader>New Subscriber</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>

                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input value={formData.fname} onChange={(event) => setFormData({ ...formData, fname: event.target.value })} placeholder='First Name' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Last Name</FormLabel>
                                <Input value={formData.lname} onChange={(event) => setFormData({ ...formData, lname: event.target.value })} placeholder='Last Name' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Address</FormLabel>
                                <Input value={formData.address} onChange={(event) => setFormData({ ...formData, address: event.target.value })} placeholder='Address' />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Expiration Date</FormLabel>
                                <Input type="date" value={formData.expirationDate} onChange={(event) => setFormData({ ...formData, expirationDate: event.target.value })} placeholder='Expiration Date' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button type="submit" colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
            <Flex justify="center">
            <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
            </Flex>

        </>
    );
}

export default Hoc(Subscribers);