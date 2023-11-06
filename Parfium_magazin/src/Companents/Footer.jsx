import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import footer_logo from "../Images/Footer_logo.png";
import pixelion from "../Images/Pixelion.png";
import { BiLogoTelegram } from "react-icons/bi";
import {BsTelegram, BsWhatsapp, BsInstagram} from 'react-icons/bs'
import {FaViber} from 'react-icons/fa'
import {SlEnvolopeLetter} from 'react-icons/sl'

function Footer() {
  return (
    <Box width={"100%"} backgroundColor={"#333"}>
      <Container maxWidth={1440}>
        <Flex py={"30px"} justify={{base:"center", lg:"space-between"}} align={'center'} direction={{base:"column", lg:"row"}} rowGap={{base:"20px", lg:"0"}}>
          <Stack
            maxWidth={275}
            display={"flex"}
            align={"center"}
            flexDirection={"column"}
            justify={"center"}
          >
            <Image src={footer_logo} maxWidth={200} />
            <Text color={"#9F9F9F"} textAlign={"center"} maxWidth={"100%"}>
              © 2008 - 2020 «CHIKA» Все права защищены.
            </Text>
            <Image src={pixelion} maxWidth={200} />
          </Stack>
          <Stack
            maxWidth={275}
            display={"flex"}
            align={"center"}
            flexDirection={"column"}
            justify={"center"}
          >
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              О компании
            </Text>
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              Доставка и оплата
            </Text>
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              Возврат и обмен
            </Text>
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              {" "}
              Бонусная программа
            </Text>
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              Пользовательское соглашение
            </Text>
          </Stack>
          <Stack
            maxWidth={275}
            display={"flex"}
            align={"center"}
            flexDirection={"column"}
            justify={"center"}
          >
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              Качество
            </Text>
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              Блог
            </Text>
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              {" "}
              Отзывы(359)
            </Text>
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              {" "}
              Карта сайта
            </Text>
            <Text
              color={"#fff"}
              fontWeight={300}
              fontSize={"13px"}
              fontFamily={"Fira Sans"}
            >
              Контакты
            </Text>
          </Stack>
          <Stack
            maxWidth={275}
            display={"flex"}
            align={"center"}
            flexDirection={"column"}
            justify={"center"}
          >
            <Heading size={{base:"xs", lg:"md"}} color={"white"}>
              Подписаться на рассылку
            </Heading>
            <Text maxWidth={"100%"} color={"#9F9F9F"}>
              Узнайте первыми о распродажах и новинках!
            </Text>
            <Flex
              justify={"center"}
              align={"center"}
              borderBottom={"1px solid white"}
            >
              <Input placeholder="Введите Ваш E-mail" border={"none"} />
              <BiLogoTelegram color="white" />
            </Flex>
          </Stack>
          <Stack
            maxWidth={275}
            display={"flex"}
            align={"center"}
            flexDirection={"column"}
            justify={"center"}
          >
            <Heading size={"18px"} color={"white"}>
              (096) 454-45-50
            </Heading>
            <Text color={"#9F9F9F"} fontWeight={"400"}>
              многоканальный телефон:
            </Text>
            <Text color={"#9F9F9F"} fontWeight={"400"}>
              город Одесса, ул. Ришельевская 23, оф. 273
            </Text>
            <Flex gap={3}>
              <FaViber fontSize={25} color="#9F9F9F"/>
              <BsTelegram fontSize={25} color="#9F9F9F" />
              <BsWhatsapp fontSize={25} color="#9F9F9F"/>
              <BsInstagram fontSize={25} color="#9F9F9F" />
            </Flex>
            <Flex align={'center'} gap={2}>
             <SlEnvolopeLetter color="white"/>
             <Text as={'b'} color={'white'}>info@chika.in.ua</Text>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
