import { Box, Image, Text, useDisclosure ,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,} from '@chakra-ui/react'
import React from 'react'

const Card = ({image,views,user}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
return (
  <>
  <Box textAlign={"end"} p={2} boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
      <Box w="100%" onClick={onOpen}>
          <Image w="100%" src={image} alt={user}/>
      </Box>

      <Text fontSize={"md"}>Views : {views}</Text>

  </Box>

  {/* Image Preview in modal */}
  <Modal isOpen={isOpen} size={"3xl"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Image Preview</ModalHeader>
        <ModalCloseButton />
        <ModalBody w={"100%"}>
          <Box w={"100%"}>
              <Image w="100%" src={image} alt={user}/>

          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
)
}

export default Card