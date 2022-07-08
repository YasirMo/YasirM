import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaLinkedin } from 'react-icons/fa'
import React from 'react'
import {
    Button,
    Flex,
    HStack,
    Icon,
    Link,
    ScaleFade,
    useDisclosure,
  } from "@chakra-ui/react";
  import { keyframes } from "@emotion/react";
  import { FaArrowRight, FaGithub } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";

function Contacts() {
    const fadeIn = keyframes(`
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: 0;
    opacity: 1;
  }
`);

    const { isOpen, onToggle } = useDisclosure();

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Flex gap="20px">
        <Button
          colorScheme="blue"
          rightIcon={
            <Icon
              as={FaArrowRight}
              transition="ease 0.2s"
              transform={isOpen ? "rotateY(180deg)" : "rotateY(0)"}
            />
          }
          onClick={onToggle}
          animation={`${fadeIn} 1s`}
        >
          Let's Connect ❤️
        </Button>
        <ScaleFade in={isOpen}>
          <HStack spacing={4}>
            <Link href="https://www.linkedin.com/in/yasirmo/" isExternal>
              <Icon as={FaLinkedin} boxSize="32px" _hover={{ color: "gray.500" }} />
            </Link>
            <Link href="mailto:yasirmo233@gmail.com?subject=Lets Connect❤️!" isExternal>
              <Icon as={MdEmail} boxSize="36px" _hover={{ color: "gray.500" }} />
            </Link>
          </HStack>
        </ScaleFade>
      </Flex>
    )
}

export default Contacts