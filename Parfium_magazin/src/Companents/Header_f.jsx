import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CiClock2 } from "react-icons/ci";

function Header() {
  return (
    <Box width={"100%"} backgroundColor={"#333"} display={{base:"none", xl:"flex"}}>
      <Container maxWidth={1440}>
        <Flex color={'white'} justify={'space-between'} align={'center'} height={'30px'}>
          <Flex gap={3}>
            <Text>О компании </Text>
            <Text>Оплата и доставка</Text>
            <Text>Возврат и обмен</Text>
            <Text>Бонусная программа</Text>
            <Text>Контакты</Text>
          </Flex>
          <Flex>
            <Text>ОТЗЫВЫ(359)</Text>
          </Flex>
          <Flex align={"center"} gap={3}>
            <Text as="span">
              <CiClock2 />
            </Text>
            <Text as="span">Работаем ежедневно: 24/7</Text>
            <Text as="span">RU / UA</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
