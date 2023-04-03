import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ( {message}) => {
  return (
    <Alert
      status='error'
      position={"fixed"}
      top={"100px"}
      left={"50%"}
      transform={"translateX(-50%)"}
      maxW={"container.lg"}>
      
        <AlertIcon />
        {message}
      
    </Alert>
  )
}

export default ErrorComponent