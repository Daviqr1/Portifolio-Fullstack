import { HStack, Icon } from "@chakra-ui/react";
import { FaJava, FaReact, FaPython, FaDatabase, FaWordpress } from "react-icons/fa";
import React from "react";

function Lg() {
  return (
    <HStack spacing={24} mb={10}>
      <Icon as={FaJava} boxSize={50} transition="transform 0.3s ease-in-out" _hover={{ transform: "scale(1.2)" }} />
      <Icon as={FaReact} boxSize={50} transition="transform 0.3s ease-in-out" _hover={{ transform: "scale(1.2)" }} />
      <Icon as={FaPython} boxSize={50} transition="transform 0.3s ease-in-out" _hover={{ transform: "scale(1.2)" }} />
      <Icon as={FaDatabase} boxSize={50} transition="transform 0.3s ease-in-out" _hover={{ transform: "scale(1.2)" }} />
      <Icon as={FaWordpress} boxSize={50} transition="transform 0.3s ease-in-out" _hover={{ transform: "scale(1.2)" }} />
    </HStack>
  );
}

export default Lg;
