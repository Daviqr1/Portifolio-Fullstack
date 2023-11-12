import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import {colorMode, ColorModeScript} from "@chakra-ui/react";  


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
          <ColorModeScript initialColorMode = "light"/> 

            <App />
        </ChakraProvider>
    
    </React.StrictMode>,
    document.getElementById("root")

);


