'use client'


import { ChakraProvider } from '@chakra-ui/react'

export default function ChakraWrapper({children}) {
  return (
    <html lang='en'>
      <head />
      <body>
        
          <ChakraProvider>{children}</ChakraProvider>
        
      </body>
    </html>
  )
}