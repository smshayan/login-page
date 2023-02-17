

import ChakraWrapper from "./components/chakra"

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <head />
      <body>
        
          <ChakraWrapper>{children}</ChakraWrapper>
        
      </body>
    </html>
  )
}