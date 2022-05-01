import { Flex } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { Header } from "../components/Header";

export default function sisLab() {
  return (
    <Flex 
      direction="column" 
      height= "100vh"
    >
      <Header />

      <Flex>
        <Flex
        w="100vw" // centralizar E <-> D
        h="80vh" // centralizar Ac <-> Ba  
        >
          <Flex
            w="5vw" // centralizar E <-> D
            h="5vh" // centralizar Ac <-> Ba 20% da altura       
            alignItems="2px" // Caixa altura form
            justifyContent="center" // Posição form
            maxWidth={1480}
            marginX="auto"
            padding="50px"
          >
          </Flex>
        </Flex>    
      </Flex>    
    </Flex>
  )
}