import { Box, Flex, Image, chakra, Link, Icon } from "@chakra-ui/react";
import { FaBolt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useState } from "react";
import Dashboard from "./Imagem/Dashboard.png";
import Tele from "./Imagem/Tele.png";
import guia from "./Imagem/guia.png";

function TestimonialCard({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      w={{ base: "full", md: "sm" }}
      mx="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      mb={{ base: 4, md: 0 }}
      borderWidth="1px"
      borderColor="gray.200"
      transition="transform 0.3s ease-in-out"
      transform={isHovered ? "scale(1.01)" : "scale(1)"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        w="full"
        h={56}
        fit="cover"
        objectPosition="center"
        src={data.imageSrc}
        alt="avatar"
      />

      <Flex alignItems="center" px={6} py={3} bg="gray.900">
        <Icon as={FaBolt} h={6} w={6} mr={2} />
        <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
          {data.name}
        </chakra.h1>
      </Flex>

      <Box py={4} px={6}>
        <chakra.h1
          fontSize="xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "white",
          }}
        >
          {data.name}
        </chakra.h1>

        <chakra.p
          py={2}
          color="gray.700"
          _dark={{
            color: "gray.400",
          }}
        >
          {data.role}
        </chakra.p>

        <Flex
          alignItems="center"
          mt={4}
          color="gray.700"
          _dark={{
            color: "gray.200",
          }}
        >
          <Icon as={FaBolt} h={6} w={6} mr={2} />
          <chakra.h1 px={2} fontSize="sm">
            {data.company}
          </chakra.h1>
        </Flex>

        <Flex
          alignItems="center"
          mt={4}
          color="gray.700"
          _dark={{
            color: "gray.200",
          }}
        >
          <Icon as={MdEmail} h={6} w={6} mr={2} />
          <chakra.h1 px={2} fontSize="sm">
            <Link href={`mailto:${data.email}`} color="blue.500">
              {data.email}
            </Link>
          </chakra.h1>
        </Flex>
      </Box>
    </Box>
  );
}

function getCardData() {
  return [
    {
      name: "Finance_Dashboard_ST",
      role: "DashBoard de Finanças para controle de gastos e investimentos",
      company: "Python, StreamLit, MatplotLib, Html, Css",
      email: "github.com/Daviqr1/Finance_Dashboard_ST",
      imageSrc: Dashboard,
    },
    {
      name: "Fortune-Tiger-Telegram-Bot",
      role:
        "Bot de Telegram para sorteios de números da sorte do jogo Fortune Tiger",
      company: "Python, TelegramAPI, Heroku, Insomnia",
      email: "github.com/Daviqr1/Fortune-Tiger-Telegram-Bot",
      imageSrc: Tele,
    },
    {
      name: "Guia Norte Capixaba",
      role:
        "Site de turismo e prestação de serviços do norte do Espírito Santo",
      company: "Wordpress, Elementor, PHP, MySQL, CSS, HTML",
      email: "guianortecapixaba.com.br",
      imageSrc: guia,
    },
  ];
}

function TestimonialList() {
  const cardData = getCardData();

  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={{ base: 4, md: 10 }}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        align="center"
        w="full"
      >
        {cardData.map((data, index) => (
          <TestimonialCard key={index} data={data} />
        ))}
      </Flex>
    </Flex>
  );
}

export default TestimonialList;
