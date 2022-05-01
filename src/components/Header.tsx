import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import logo03  from '../../public/logo03.png'

export function Header() {
  return (
    <Flex
      w="100vw" // centralizar E <-> D
      h="100vh" // centralizar Ac <-> Ba  
    >
      <Flex
        w="100vw" // centralizar E <-> D
        h="20vh" // centralizar Ac <-> Ba 20% da altura       
        alignItems="2px" // Caixa altura form
        justifyContent="center" // Posição form
      >        
        <Flex
          as="form"
          width="90%" // largura 90% da div
          maxWidth={1080}
          background="#f1f1f1"
          padding="8" // * 4 = resultado em px
          borderRadius={8}
          flexDir="column"
          fontSize="90%"
          textAlign="left"
        >
          <Stack direction='row'>
            <Image
              marginTop="-15px"
              marginX="-10px"
              boxSize='70px'
              objectFit='cover'
              srcSet="logo03"
              alt='Dan Abramov'
            />  
          </Stack>

          <Stack spacing="3">
            <Text
              fontWeight="bold" // Negrito
              letterSpacing="-0.001px" // deixar a fonte mais unida
              width="100%" // Largura
              color="grey"
              marginTop="10px"
              marginX="-10px"
                            
            >
              <h1>SisLab - Sistema de Gerenciamento Laboratorial</h1>
              <h1>CEDAPP – Centro de Diagnostico Anatomopatológico</h1>
            </Text>

          </Stack>
        </Flex>
      </Flex>
    </Flex>
  )
}
