import { Container, Box, Flex, Image, Stack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import logo from '../Images/logo.svg'
import {FaViber} from 'react-icons/fa'
import {BsTelegram, BsWhatsapp, BsInstagram} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineHeart, AiFillShopping, AiOutlineMenu} from "react-icons/ai"

function Header_s() {
  return (
    <Box>
        <Container maxW={1440}> 
           <Flex align={'center'} height={"150px"} justify={'space-between'} >
             <Flex gap={2} align={'center'}>
              <Button display={{base:"flex", lg:"none"}}>
                <AiOutlineMenu/>
              </Button>
                <Image src={logo} width={{base:"100px", xl:"190px"}}/>
                <Stack display={{base:"none", lg:"flex"}}>
                  <Text color={"#333"}>
                  многоканальный телефон:
                  </Text>
                  <Flex align={'center'} gap={3}>
                    <Text as="b">(096) 454-45-50</Text>
                    <FaViber fontSize={25}/> 
                    <BsTelegram fontSize={25}/>
                    <BsWhatsapp fontSize={25}/>
                    <BsInstagram fontSize={25}/>
                  </Flex>
                  <Button colorScheme='red' width={"200px"}>ОБРАТНЫЙ ЗВОНОК</Button>
                </Stack>
             </Flex>
             <Flex gap={3}>
              <Flex direction={'column'} align={'center'}>
                <AiOutlineUser />
                <Text fontSize={{base:"10px", lg:"16px"}}>Мой кабинет</Text>
              </Flex>
              <Flex direction={'column'} align={'center'}>
                <AiOutlineHeart />
                <Text  fontSize={{base:"10px", lg:"16px"}}>Избранное</Text>
              </Flex>
              <Flex direction={'column'} align={'center'}>
                <AiFillShopping />
                <Text fontSize={{base:"10px", lg:"16px"}} >Корзина</Text>
              </Flex>
             </Flex>
           </Flex>
        </Container>
    </Box>
  )
}

export default Header_s