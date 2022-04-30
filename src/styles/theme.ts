import { extendTheme } from '@chakra-ui/react'
// import { GlobalStyles } from './global'


export const theme = extendTheme({
  colors: {
    green: {
      green: "#007565",
      grey: "grey.600",

      background: "#f7f7f7",
      white: "#FFFFFF",
      caixaLogin: "#f1f1f1",


    }
  },


  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },

  styles: {
    global: {
      body: {
        bg: "#f7f7f7",
        color: "#007565"
      }
    }
  }
})