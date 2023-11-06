import { Box, Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import wall from '../Images/wall.png'
import paul from "../Images/paul.png"
import chanel from '../Images/chanel.png'
import sponsor from '../Images/sponsor.png'
import chi from '../Images/chi.png'
import versache from '../Images/versache.png'
function Patrons() {
  return (
    <Box width={"100%"} background={"#444"}>
        <Container maxWidth={1440}>
            <Flex align={'center'} justify={{base:"center", lg:"space-between" }} direction={{base:"column", lg:"row"}} rowGap={{base:"20px", lg:"0"}} py={"20px"}>
               <Image src={wall}/>
               <Image src={paul}/>
               <Image src={chanel}/>
               <Image src={sponsor}/>
               <Image src={chi}/>
               <Image src={versache}/>
            </Flex>
        </Container>
    </Box>
  )
}

export default Patrons