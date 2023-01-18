import { Box, Button, FormControl, Image, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import ResultContainer from '../Component/ResultContainer'
import { useEffect } from 'react'

const Home = () => {

    const [text,setText]=useState("")
    const [data,setData]=useState([])
    const toast=useToast()

    const handleSubmit=async()=>{
        if(text===""){
            return toast({
                title: 'An error occurred.',
                description: 'Please filled something.',
                status: 'warning',
                duration: 3000,
                isClosable: true,
              })
        }

        try {
          let {data}=await axios(`https://pixabay.com/api/?key=${process.env.REACT_APP_API}&q=${text}&image_type=photo&pretty=true`)
           setData(data.hits)
            
        } catch (error) {
            toast({
                title: 'An error occurred.',
                description: error.message,
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
        }

    }


    // onload all images shown
    useEffect(()=>{
        axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API}`)
        .then(res=>setData(res.data.hits))
    },[])

  return (
    <Box w="100%" m="auto" >
        {/* Navbar */}
        <Box w="100%" boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" p={3} display="flex" justifyContent={"space-evenly"} alignItems="center">
            <Image w="60px" src="https://images.pexels.com/users/avatars/2659/pixabay-617.png?auto=compress&fit=crop" alt="logo"/>
            {/* Search Box */}
            <Box display={"flex"}>
                    <FormControl>
                        <Input w="xl" type="text" placeholder='Search for Images' value={text} onChange={(e)=>setText(e.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <Button w="xs" ml={2} onClick={handleSubmit} >Search</Button>
                    </FormControl>
              
            </Box>
        </Box>


        <ResultContainer data={data}/>

    </Box>
  )
}

export default Home