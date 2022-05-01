import { Flex, Text } from "@chakra-ui/react";

export function Sidebar() {
  return (
    <Flex
      w="100vw" // centralizar E <-> D
      h="100vh"
      alignItems="center"
      justifyContent="center"
      display="table"
    >
      <Flex
        as="form"
        w="100vw" // centralizar E <-> D
        h="100vh" // centralizar Ac <-> Ba 20% da altura 
        margin="center"
      >
        <Flex
          width="90%" // largura 90% da div
          maxWidth={1080}
          background="#f1f1f1"
          padding="8" // * 4 = resultado em px
          borderRadius={8}
          flexDir="column"
          fontSize="90%"
          marginTop="100px"
          marginX="40px"
          marginY="80"
          >
          <Text
            fontWeight="bold"
            color="grey"
            textAlign="left"
          >
            Exames Realizados
          </Text>
        </Flex>
      </Flex>
    </Flex>

  )
}