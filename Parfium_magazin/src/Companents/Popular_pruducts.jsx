import { Box, Container, Flex, Image, Link, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

function Popular_pruducts() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resorce) => resorce.json())
      .then((result) => setState(result));
  }, []);
  return (
    <Box my={"10px"}>
      <Container maxWidth={1440}>
        <Wrap display={"flex"} justify={{base:"center", lg:'space-between'}} flexWrap={'wrap'}>
          {state.slice(0, 6).map((item) => (
            <WrapItem
              key={item.id}
              maxWidth={"225px"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Image src={item.url} width={"100%"} />
              <Flex direction={'column'}>
                <Flex align={'center'} justify={'center'}>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                </Flex>
                <Text maxWidth={"100%"} color={"#333"}>
                  Эссенция Омолаживающая С Комплексом Пептидов Medi-peel Bortox
                  Peptide Ampoule 30ml
                </Text>
                <Text fontSize={'12px'} width={"100%"}>Old Spice Wolfthorn Deodorant Stick</Text>
                <Text textAlign={'center'} >06.03.2020 Жасмин</Text>
                <Link textAlign={'center'}>Подробнее</Link>
              </Flex>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
}

export default Popular_pruducts;
