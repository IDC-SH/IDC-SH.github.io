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
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box
      className="highlights-container"
      style={{ width: "1250px", margin: "0 auto" }}
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
      <Box
        style={{
          position: "absolute",
          top: "1140px",
          left: "49%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "space-between",
          width: "100px",
        }}
      >
        <IconButton onClick={goToPrevSlide}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={goToNextSlide}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default HighlightSection;
