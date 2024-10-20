import { useSwiper } from "swiper/react";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
// import next from '../../../assets/next.png'
// import prev from '../../../assets/prev.png'
import { Box } from "@mui/material";

function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <Box
      //   component="img"
      // src={prev}
      onClick={() => swiper.slidePrev()}
      height={48}
      width={48}
      position="absolute"
      left={28}
      top={10}
      sx={{ cursor: "pointer" }}
      zIndex={999}
      //   bgcolor="#fff"
      borderRadius={15}
    >
      <FcPrevious />
    </Box>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <Box
      //   component="img"
      // src={next}
      onClick={() => swiper.slideNext()}
      height={48}
      width={48}
      position="absolute"
      right={0}
      top={10}
      sx={{ cursor: "pointer" }}
      zIndex={999}
      bgcolor="#fff"
    >
      <FcNext />
    </Box>
  );
}

export { SlideNextButton, SlidePrevButton };
