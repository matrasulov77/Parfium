import { Box, Container, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'

function Navbar() {
  return (
    <>
      <Box>
        <Container maxW={1440}>
          <Flex justify={"space-between"} display={{base:"none", lg:"flex"}} >
            <Text color={"#333"}>Волосы</Text>
            <Text color={"#333"}>H</Text>
            <Text color={"#333"}>Тело</Text>
            <Text color={"#333"}>Декоративная косметика</Text>
            <Text color={"#333"}>Уход для мужчин</Text>
            <Text color={"#333"}>Аксессуары</Text>
            <Text color={"#333"}>Уход за животными</Text>
            <Text color={"#333"}>Бренды</Text>
            <Text color={"#333"}>Новинки</Text>
            <Text color={"#333"}>Акции</Text>
          </Flex>
          <Flex display={{base:"flex", lg:"none"}} alignItems={"center"} width={"100%"} height={"30px"} border={"1px solid black"} borderRadius={18} >
          <Input placeholder="Поиск по сайту" border={"none"}/>
          <AiOutlineSearch style={{marginRight:"15px"}} />
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
