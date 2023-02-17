"use client"

import { Flex , Box , Heading, Center ,Input, Button, useColorMode, useColorModeValue  } from "@chakra-ui/react"
import { useState } from "react"
import { IoSunny, IoMoon } from "react-icons/io5"


export default function Home() {

  const {toggleColorMode} = useColorMode()
  const [toggle , setToggle] = useState(false)

  const bg = useColorModeValue("gray.100", "gray.700")
  return (
    <Flex 
    alignItems={"center"}
    justifyContent={"Center"}
    height={"100vh"}
    
    >
      <Flex
      direction={"column"}
      p = {"14"}
      backgroundColor={bg} 
      rounded={"8"}   
      >
        <Heading mb={"5"}>Log In</Heading>
        <Input type="text" placeholder="Your Email..." variant={"filled"} mb={5} />
        <Input type="Password" placeholder="Password..." variant={"filled"} mb={5} />
        <Button colorScheme={"blue"}>Sumbit</Button>
        <Box
        position={"absolute"}
        top={"5"}
        right={"5"}
        cursor={"pointer"}
        onClick={() => {
          toggleColorMode()
          setToggle(!toggle)
        }}
        >
          {toggle ? <IoSunny/> : <IoMoon/>}
        </Box>
        
      </Flex>
      
    </Flex>
  )
}
