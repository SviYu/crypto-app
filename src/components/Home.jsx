import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import homeImg from '../assets/btc.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY:"20px"
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={homeImg}
          filter={"grayscale(1)"}
          />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}

      >
        X-Crypto
      </Text>
    </Box>
  )
}

export default Home