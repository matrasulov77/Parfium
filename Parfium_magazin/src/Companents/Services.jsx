import { Box, Grid, GridItem, Text, Image, Container } from "@chakra-ui/react";
import React from "react";
import garant from "../Images/garant.svg";
import car from "../Images/car.svg";
import gift from "../Images/gift.svg";
import plane from "../Images/plane.svg";

function Services() {
  return (
    <Box>
      <Container maxW={1440}>
        <Grid justifyContent={{base:"center", md:"space-between"}} display={'flex'} flexWrap={"wrap"} >
          <GridItem display={"flex"} gap={2} my={{base:"20px", lg:"10px", xl:"5px"}}>
            <Image src={garant} />
            <Text maxWidth={175}>100% оригинальная продукция</Text>
          </GridItem>
          <GridItem display={"flex"} gap={2} my={{base:"20px", lg:"10px", xl:"5px"}}>
            <Image src={car} />
            <Text maxWidth={175}>Бесплатная доставка при заказе от 1000 грн.</Text>
          </GridItem>
          <GridItem display={"flex"} gap={2} my={{base:"20px", lg:"10px", xl:"5px"}}>
            <Image src={gift} />
            <Text maxWidth={185}>Гарантированная скидка уже с первого заказа</Text>
          </GridItem>
          <GridItem display={"flex"} gap={2} my={{base:"20px", lg:"10px", xl:"5px"}}>
            <Image src={plane} />
            <Text maxWidth={175}>Отправка всеми службами доставки</Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
