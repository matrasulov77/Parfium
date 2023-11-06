import Carousel from "nuka-carousel";
import { Box, Image } from "@chakra-ui/react";
import img from "../Images/Corusel.png";

const Corusel = () => {
  return (
    <Box my={"20px"}>
      <Carousel autoplay={true}>
        <Image src={img} width={"100%"} height={500} objectFit={"cover"} />
        <Image src={img} width={"100%"} height={500} objectFit={"cover"} />
        <Image src={img} width={"100%"} height={500} objectFit={"cover"} />
      </Carousel>
    </Box>
  );
};

export default Corusel;
