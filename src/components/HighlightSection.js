import React from "react";
import { Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HighlightCard1 from "./HighlightCard1";
import HighlightCard2 from "./HighlightCard2";
import HighlightCard3 from "./HighlightCard3";
import HighlightCard4 from "./HighlightCard4";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HighlightSection() {
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Box
        className="highlights-container"
        style={{ width: "96%", margin: "0 auto" }}
      >
        <Slider ref={sliderRef} {...settings}>
          <div>
            <HighlightCard1 />
          </div>
          <div>
            <HighlightCard2 />
          </div>
          <div>
            <HighlightCard3 />
          </div>
          <div>
            <HighlightCard4 />
          </div>
        </Slider>
      </Box>
      <Box justifyContent="space-around" display="flex">
        <IconButton onClick={goToPrevSlide}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={goToNextSlide}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default HighlightSection;
