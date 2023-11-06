import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Parfium from './Parfium'

function Cards() {
  return (
    <>
    <Box>
        <Container maxWidth={1440}>
        <Flex justify={"center"}>
        <Heading size={{base:"20px", lg:"25px"}} color={"#333"}>НОВИНКИ <Text as={'span'} fontSize={{base:"12px", lg:"16px"}} fontWeight={'normal'} color={'red'}> / Все новинки</Text></Heading>
        </Flex>
        </Container>
    </Box>
    </>
  )
}

export default Cards