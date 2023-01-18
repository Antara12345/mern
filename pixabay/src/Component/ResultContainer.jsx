import { Box } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

const ResultContainer = ({data}) => {
    
  return (
    <>
    <Box w="90%" m="auto" display="grid" gridTemplateColumns="repeat(4,1fr)" gap={5} mt={5} >
            {
                data && data.map((ele)=>(
                    <Card key={ele.id} user={ele.user} image={ele.userImageURL} views={ele.views}/>
                ))
            }
    </Box>
    </>
  )
}

export default ResultContainer