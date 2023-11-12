import { ChakraProvider, Flex, VStack, Heading, IconButton, HStack, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";
import Header from "./components/Header";
import Social from "./components/Social";
import Sosocial from "./components/Sosocial";
import Lg from "./components/Lg";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { chakra } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const perfilInstagram = "https://www.instagram.com/davi_b.rezende/";

  const redirecionarParaInstagram = () => {
    window.open(perfilInstagram, "_blank");
  };
  const PerfilLinkedin = "https://www.linkedin.com/in/davi-barros-de-rezende-09540b222/";
  const redirecionarParaLinkedin = () => {
    window.open(PerfilLinkedin, "_blank");
  }
  const PerfilGithub = "https://github.com/Daviqr1"
  const redirecionarParaGithub = () => {
    window.open(PerfilGithub, "_blank");
  }
  const redirecionarParaProfile = () => {
    const profileSection = document.getElementById("Profile-section");
  
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const redirecionarParaHome = () => {
    const profileSection = document.getElementById("Home-section");
  
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirecionarParaSocial = () => {
    const profileSection = document.getElementById("Social-section");
  
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ChakraProvider>
      <VStack p={5}>
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Heading size="md" fontWeight="semibold" color="cyan.400">
            Davi Rezende
          </Heading>
          <HStack spacing={10}>
          
            <chakra.a href="#" onClick={redirecionarParaHome}>Home</chakra.a>
            <chakra.a href="#" onClick={redirecionarParaProfile}>Profile</chakra.a>
            <chakra.a href="#" onClick={redirecionarParaSocial}>Social</chakra.a>
          </HStack>
          <HStack spacing={2}>
            <IconButton icon={<FaInstagram />} isRound onClick={redirecionarParaInstagram} />
            <IconButton icon={<FaGithub />} isRound onClick={redirecionarParaGithub} />
            <IconButton icon={<FaLinkedin />} isRound onClick={redirecionarParaLinkedin} />
            <Spacer />
            <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound onClick={toggleColorMode} />
          </HStack>
        </Flex>
        <Header />
        <Lg />
        <Social />
        <Sosocial />
        <Profile />
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
