import React from 'react'
import { Container, Flex , Text  } from "@chakra-ui/react";

import Picture from './picture'

function about() {

  return (
    <Container as="section" maxW="8xl" minH="100vh" h="100vh" p="40px" id="about">
       <Text textAlign="center"
      fontSize="6xl"
      fontWeight="bold"
      overflowWrap="initial"
      pb="50"
      > About</Text>
     
        <Flex columnGap="80px" justify="center" >
            <Picture/>
        <Flex maxW="550px" direction="column" justify="space-between">
          <Text  as="h1"pb="10px" fontSize={{ base: "3xl", sm: "4xl", lg: "5xl", xl: "5xl" }} >
        Hi, I'm Yasir </Text> 
     <Text as="h2"pb="50" fontSize={{ base: "0xl", sm: "4xl", lg: "5xl", xl: "3xl," }}>— A <Text as="strong" style={{color: "#3182CE"}}>Brunel University  </Text>Student in London </Text>   
        <Text as="h2"pb="20" fontSize={{ base: "0xl", sm: "4xl", lg: "5xl", xl: "2xl" }}>Soon to be grad with a Bachelor's of Computer Science, Artificial Intelligence.
      
        </Text>
        </Flex>
        </Flex>
    </Container>
  )
}

export default about