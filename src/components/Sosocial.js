import icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/react";
import React from "react";
import { FaInstagram,FaGoogle,FaLinkedinIn,FaGithub } from "react-icons/fa";




function Sosocial() {
    return (
        <HStack spacing={8}>
            <FaInstagram></FaInstagram>
            <FaGoogle></FaGoogle>
            <FaLinkedinIn></FaLinkedinIn>
            <FaGithub></FaGithub>
        </HStack>
    )
}

export default Sosocial