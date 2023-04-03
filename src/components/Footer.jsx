import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
      <Box
          bgColor={"blackAlpha.900"}
          color={"whiteAlpha.700"}
          minH={"48"}
          px={"16"}
          py={["16", "8"]}
      >
          <Text
              fontSize={"md"}
              fontWeight={"bold"}
              letterSpacing={"widest"}
              textAlign={"center"}
              mt={"50px"}
          >
            {new Date().getFullYear()}
        </Text>
      </Box>
  )
}

export default Footer