import { Box, Center, Container, Flex } from "@chakra-ui/react";
import Contacts from "./contacts";
import { ScrollDown } from "./scroll-down";
import { Subtitle } from "./subtitle";
import { Title } from "./title";

export function Cover() {
  return (
    <Container as="section" maxW="8xl" minH="100vh" h="100vh" p="40px">
      <Center h="80%" >
        <Flex
          justify="center"
          align="center"
          rowGap="40px"
          columnGap={{ base: "50px", lg: "100px" }}
          wrap="wrap-reverse"
        >
          <Box>
            <Title/>
            <Subtitle />
            <Contacts/> 
          </Box>
        </Flex>
      </Center>
      <ScrollDown /> 
    </Container>
  );
}