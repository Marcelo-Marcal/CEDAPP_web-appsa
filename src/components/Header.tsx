import { Flex, Stack, Text } from '@chakra-ui/react'
// import logon01 from '../../public/logo01.jpeg'

export function Header() {
  return (
    <Flex
      w="100vw" // centralizar E <-> D
      h="20vh" // centralizar Ac <-> Ba
      alignItems="0" // Caixa altura form
      justifyContent="center" // Posição form
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={700}
        background="#f1f1f1"
        padding="8" // * 4 = resultado em px
        borderRadius={8}
        flexDir="column"
        fontSize="90%"
        textAlign="left"
      >
        {/* <Flex
          justifyContent="center"
          h="45px"
          fontSize="23"
          color="#007565"
        >Faça seu login
        </Flex> */}

        <Stack spacing="3">
          <Text
            fontWeight="bold" // Negrito
            letterSpacing="tight" // deixar a fonte mais unida
            width="100%" // Largura
            color="grey"
            marginTop="40px"
          >
            <h1>SisLab - Sistema de Gerenciamento Laboratorial</h1>
            <h1>CEDAPP – Centro de Diagnostico Anatomopatológico</h1>
          </Text>
          
          
        </Stack>        
      </Flex>
    </Flex>



    // <Flex
    //   w="100vw" // centralizar E <-> D
    //   h="100vh" // centralizar Ac <-> Ba
    //   alignItems="0" // Caixa altura form
    //   justifyContent="center" // Posição form
    // >
    //   <Flex
    //     as="form"
    //     width="100%"
    //     maxWidth={1480}
    //     background="#f1f1f1"
    //     padding="8" // * 4 = resultado em px
    //     borderRadius={8}
    //     flexDir="column"
    //   >

    //     <Stack
    //       spacing={2}
    //       direction="column"
    //       >      
    //       <Flex
    //         as="header"
    //         width="100%"
    //         maxWidth={1480} // Largura maxima
    //         height="20"
    //         marginX="auto" // Margem horizoltal
    //         marginTop="4"
    //         paddingX="6"
    //         align="center"        
    //         >
    //         {/* <img src={ logo01 } alt="Logo CEDAPP" /> */}
    //         <Flex
    //           margin="20px"
    //           background="#F1F1F1"
    //           width="100%"
    //           >

    //           <Text
    //             fontSize="2xl"
    //             fontWeight="bold" // Negrito
    //             letterSpacing="tight" // deixar a fonte mais unida
    //             width="100%" // Largura
    //             color="grey"
    //             >
    //             <h1>SisLab - Sistema de Gerenciamento Laboratorial</h1>
    //             <h1>CEDAPP – Centro de Diagnostico Anatomopatológico</h1>
    //           </Text>
    //         </Flex>            
    //       </Flex>
    //     </Stack>
    //   </Flex>
    // </Flex>

  )
}
