import { IconButton } from "@chakra-ui/button"
import {Flex, VStack,Heading,Spacer} from "@chakra-ui/layout"; 
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import Contacts from'./components/contacts'
import Profile from'./components/profile'
import { Cover } from  './components/cover'

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">
       Yasir Mo        
        </Heading>
    
      <Spacer></Spacer>
      <IconButton icon={<FaLinkedin />} isRound='true' ></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>  
          </Flex>
          <Cover></Cover>
          <Profile></Profile>
          </VStack>
  );
}

export default App;
