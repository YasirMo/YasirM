import { Box, Center, Container, Flex } from "@chakra-ui/react";
import Contacts from "./contacts";
import dynamic from 'next/dynamic'
import { ScrollDown } from "./scroll-down";
import { Subtitle } from "./subtitle";
import { Title } from "./title";
import VoxelDogLoader from '../components/voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

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
          </Box><LazyVoxelDog/>
        </Flex>
      </Center>
      <ScrollDown />  
    </Container>
  );
}