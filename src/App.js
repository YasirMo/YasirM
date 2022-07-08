import { IconButton } from "@chakra-ui/button"
import {Flex, VStack,Heading,Spacer, Link} from "@chakra-ui/layout"; 
import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon, FaGithub } from 'react-icons/fa'
import { Cover } from  './components/cover'
import About from './components/about/about'

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={6}>
      <Flex w="100%">
        <Heading             as="h2"
        fontSize="5xl"
        lineHeight="none"
        >
       Yasir Mo        
        </Heading>
      <Spacer></Spacer>
      
      <Link href="https://github.com/YasirMo" isExternal> 
        <IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton>
        </Link>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>  
          </Flex>
          <Cover></Cover>
          <About/>
          </VStack>
  );
}

export default App;
