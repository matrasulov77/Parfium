import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function Headings3() {
  return (
    <Box>
        <Container maxWidth={1440}>
        <Flex justify={"center"}>
        <Heading size={{base:"20px", lg:"24px"}}> ОТЗЫВЫ НАШИХ ПОКУПАТЕЛЕЙ </Heading>
        </Flex>
        </Container>
    </Box>
  )
}

export default Headings3