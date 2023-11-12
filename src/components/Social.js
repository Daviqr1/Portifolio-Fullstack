import React from 'react';
import { Flex, Box, Image, chakra, Link } from '@chakra-ui/react';
import gnc from "./Imagem/gnc.png"; // Importa a imagem local
import ifes from "./Imagem/ifes.png"; // Importa a imagem local
import bbutton from "./Imagem/bbutton.png"; // Importa a imagem local

const EditableCard = () => {
  // Dados para cada card
  const cardsData = [
    {
      title: 'Guia Norte Capixaba',
      description: 'Atualmente, sou desenvolvedor do projeto Guianortecapixaba.com.br pela FAPES, um site de notícias e serviços, como aluguel de imóveis, venda de carros e página de empresas regionais. Bolsista do projeto FAPES/CNPQ.',
      name: 'CNPQ, FAPES',
      imageSrc: gnc // Usa a imagem importada
    },
    {
      title: 'Bbutton Ventures S/A',
      description: "Em 2023, trabalhei na Bbutton Ventures S/A como coordenador de startups. Minhas responsabilidades incluíram mapear startups potenciais com base em dados sobre o tamanho da empresa e áreas-alvo de atuação. Utilizei SQL e Power BI para visualização de dados, além de Python e Jupyter para análise de dados.",
      name: "Aceleração de Startups",
      imageSrc: bbutton 

    },
    {
      title: "Instituto Federal do Espírito Santo",
      description: "Atualmente sou estudante de engenharia no IFES, associado a projetos da disciplina de linguagem de programação e comprometido com a incubadora do campus.",
      name: "IFES",
      imageSrc: ifes
    }

  ];

  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      {cardsData.map((card, index) => (
        <Box
          key={index}
          w={{ base: 'full', md: '30%' }}
          mx={{ base: 'auto', md: '0' }}
          my={4}
        >
          <Box
            py={4}
            px={8}
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            shadow="lg"
            rounded="lg"
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
            }}
          >
            <Flex
              justifyContent={{
                base: "center",
                md: "end",
              }}
              mt={-16}
            >
              <Image
                w={20}
                h={20}
                fit="cover"
                rounded="full"
                borderStyle="solid"
                borderWidth={2}
                color="brand.500"
                _dark={{
                  color: "brand.400",
                }}
                alt={`Testimonial avatar ${index}`}
                src={card.imageSrc} // Usa a imagem dinâmica do card
              />
            </Flex>

            <chakra.h2
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              mt={{
                base: 2,
                md: 0,
              }}
              fontWeight="bold"
            >
              {card.title}
            </chakra.h2>

            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.200",
              }}
            >
              {card.description}
            </chakra.p>

            <Flex justifyContent="end" mt={4}>
              <Link
                fontSize="xl"
                color="brand.500"
                _dark={{
                  color: "brand.300",
                }}
              >
                {card.name}
              </Link>
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default EditableCard;
