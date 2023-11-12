import React from 'react';
import { Flex, chakra, IconButton } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const perfilInstagram = "https://www.instagram.com/davi_b.rezende/";

  const redirecionarParaInstagram = () => {
    window.open(perfilInstagram, "_blank");
  };

  const perfilLinkedin = "https://www.linkedin.com/in/davi-barros-de-rezende-09540b222/";

  const redirecionarParaLinkedin = () => {
    window.open(perfilLinkedin, "_blank");
  }

  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{
          base: "column",
          sm: "row",
        }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
      >
        <chakra.a
          href="#"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          _dark={{
            color: "white",
            _hover: {
              color: "gray.300",
            },
          }}
          _hover={{
            color: "gray.700",
          }}
        >
          Brand
        </chakra.a>

        <chakra.p
          py={{
            base: "2",
            sm: "0",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
        >
          Todos os direitos Reservados
        </chakra.p>

        <Flex mx="-2">
          <chakra.a
            href="#"
            mx="2"
            color="gray.600"
            _dark={{
              color: "gray.300",
              _hover: {
                color: "gray.400",
              },
            }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Instagram"
          >
            <IconButton icon={<FaInstagram />} isRound onClick={redirecionarParaInstagram} />
          </chakra.a>

          <chakra.a
            href="#"
            mx="2"
            color="gray.600"
            _dark={{
              color: "gray.300",
              _hover: {
                color: "gray.400",
              },
            }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="LinkedIn"
          >
            <IconButton icon={<FaLinkedin />} isRound onClick={redirecionarParaLinkedin} />
          </chakra.a>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
