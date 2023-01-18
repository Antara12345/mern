import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({image,views,user}) => {
  return (
    <>
    <Box textAlign={"end"} p={2} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Box w="100%">
            <Image w="100%" src={image} alt={user}/>
        </Box>

        <Text fontSize={"md"}>Views : {views}</Text>

    </Box>
    </>
  )
}

export default Card