import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Headings2() {
  return (
    <Box>
        <Container maxWidth={1440}>
        <Flex justify={"center"}>
        <Heading size={{base:"20px", lg:"25px"}}>ХИТЫ ПРОДАЖ <Text as={'span'} fontSize={{base:"12px", lg:"16px"}} fontWeight={'normal'} color={'red'}> / Все хиты продаж</Text></Heading>
        </Flex>
        </Container>
    </Box>
  )
}

export default Headings2