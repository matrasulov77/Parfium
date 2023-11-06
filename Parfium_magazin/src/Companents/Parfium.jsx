import React from 'react'
import {Box, Wrap, WrapItem, Flex, Text, Image, Heading, Grid, GridItem, Container} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'


function Parfium() {
    const [state, setState] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((resorce)=>resorce.json())
        .then((result)=>setState(result))
    }, [])
  return (
    <Box my={"10px"}>
        <Container maxWidth={1440}>
        <Wrap display={'flex'} justify={{base:"center", lg:"space-between"}} flexWrap={'wrap'} >
            {state.slice(0,4).map((item)=>(
                <WrapItem key={item.id} maxWidth={340} display={'flex'} flexDirection={'column'}>
                  <Image src={item.url} width={"100%"}/>
                  <Text maxWidth={"100%"}>Маска тканевая для омоложения кожи с комплексом аминокислот и пептидов Mediheal P:EP Firming Proatin Mask 25ml</Text>
                  <Flex align={'center'} justify={'space-between'} width={"100%"}>
                    <Heading size={'md'}>400.00 грн.</Heading>
                    <AiOutlineHeart size={25}/>
                  </Flex>
                </WrapItem>
            ))}
        </Wrap>
        </Container>
    </Box>
  )
}

export default Parfium