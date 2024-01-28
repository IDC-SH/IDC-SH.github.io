import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick.jquery.json";
import { Typography, Box, Button, Grid, IconButton } from "@mui/material";
import { yellow } from "@mui/material/colors";
import highlightleftphoto1 from "./images-highlights/Highlights-LandMark01.gif";
import highlightleftphoto2 from "./images-highlights/Highlights-LandMark02.gif";
import highlightleftphoto3 from "./images-highlights/Highlights-LandMark03.gif";
import highlightrightphoto1 from "./images-highlights/Highlight-A01.gif";
import highlightrightphoto2 from "./images-highlights/Highlight-A02.gif";
import highlightrightphoto3 from "./images-highlights/Highlight-A03.gif";
import highlightrightphoto4 from "./images-highlights/Highlight-A04.gif";
import input1 from "./images-highlights/input1.png";
import input2 from "./images-highlights/input2.png";
import output1 from "./images-highlights/output1.gif";
import output2 from "./images-highlights/output2.gif";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MediaQuery from "react-responsive";

function HighlightCard1() {
  return (
    <Grid item xs={6}>
      <Box
        sx={{
          backgroundColor: "rgba(53,73,183,0.8)",
          padding: 2,
          borderRadius: 8,
          width: "90%",
          height: "400px",
          margin: "10px 10px 10px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            position: "abosolute",
          }}
        >
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              fontSize: "72px",
              position: "abosolute",
              marginTop: "5px",
              Left: "30px",
            }}
          >
            LandMark
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              fontSize: "22px",
              position: "abosolute",
              marginTop: "5px",
              Left: "30px",
            }}
          >
            A City-Scale 3D Neural Radiance Field With International Leading,
            Efficient Training and Exceptional Rending
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              backgroundColor: "rgb(237,195,71)",
              fontSize: "13px",
              position: "relative",
              marginTop: "5px",
              Left: "30px",
              textAlign: "center",
            }}
          >
            <a href="https://github.com/guoyww/animatediff/">
              [2023/10]:LandMark officially Open-sourced!
            </a>
          </Typography>
        </Box>
        {/*photo Gallery*/}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "5px" }}
        >
          <Grid item>
            <img
              src={highlightleftphoto1}
              alt="highlightleftphoto1"
              style={{ width: "160px", height: "90px" }}
            />
          </Grid>
          <Grid item>
            <img
              src={highlightleftphoto2}
              alt="XianAItower"
              style={{ width: "160px", height: "90px" }}
            />
          </Grid>
          <Grid item>
            <img
              src={highlightleftphoto3}
              alt="WukangBuiding"
              style={{ width: "160px", height: "90px" }}
            />
          </Grid>
          {/*End of photo Gallery*/}
        </Grid>
        <Box
          sx={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "-45px",
            marginTop: "-260px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            component="a"
            href="https://landmark.intern-ai.org.cn/"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <HomeIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://github.com/InternLandMark/LandMark"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <CodeIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://arxiv.org/abs/2303.14001"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <DescriptionIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://www.shlab.org.cn/news/5443429"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <NewspaperIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

function HighlightCard2() {
  return (
    <Grid item xs={6}>
      <Box
        sx={{
          backgroundColor: "rgba(53,73,183,0.8)",
          padding: 2,
          borderRadius: 8,
          width: "90%",
          height: "400px",
          margin: "10px 10px 10px 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              fontSize: "72px",
              position: "abosolute",
              margintop: "10px",
              Left: "20px",
            }}
          >
            AnimateDiff
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              fontSize: "22px",
              position: "relative",
              Top: "5px",
            }}
          >
            Animate Your Personalized Text-to-Image Diffusion Models without
            Specific Tuning
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              backgroundColor: "rgb(237,195,71)",
              fontSize: "14px",
              position: "abosolute",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            <a href="https://github.com/guoyww/animatediff/">
              [2023/11]:Release the Motion Module (beta version) on SDXL!
            </a>
          </Typography>
          {/*photo Gallery*/}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: "10px" }}
          >
            <Grid
              item
              sx={{ position: "abosolute", bottom: "50px", right: "200px" }}
            >
              <img
                src={highlightrightphoto1}
                alt="Zoom In"
                style={{ width: "90px", height: "90px" }}
              />
            </Grid>
            <Grid
              item
              sx={{ position: "abosolute", bottom: "50px", right: "200px" }}
            >
              <img
                src={highlightrightphoto2}
                alt="Zoom Out"
                style={{ width: "90px", height: "90px" }}
              />
            </Grid>
            <Grid
              item
              sx={{ position: "abosolute", bottom: "50px", right: "200px" }}
            >
              <img
                src={highlightrightphoto3}
                alt="Zoom Pan left"
                style={{ width: "90px", height: "90px" }}
              />
            </Grid>
            <Grid
              item
              sx={{ position: "abosolute", bottom: "50px", right: "200px" }}
            >
              <img
                src={highlightrightphoto4}
                alt="Zoom pan right"
                style={{ width: "90px", height: "90px" }}
              />
            </Grid>
            {/*End of photo Gallery*/}
          </Grid>
        </Box>
        <Box
          sx={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "-45px",
            marginTop: "-260px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            component="a"
            href="https://animatediff.github.io/"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              width: "50px",
              height: "35px",
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <HomeIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://github.com/guoyww/animatediff/"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <CodeIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://arxiv.org/abs/2303.14001"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <DescriptionIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://openxlab.org.cn/apps/detail/Masbfca/AnimateDiff"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <SportsEsportsIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

function HighlightCard3() {
  return (
    <Grid item xs={6}>
      <Box
        sx={{
          backgroundColor: "rgba(53,73,183,0.8)",
          padding: 2,
          borderRadius: 8,
          width: "90%",
          height: "400px",
          margin: "10px 10px 10px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            position: "abosolute",
          }}
        >
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              fontSize: "72px",
              position: "abosolute",
              marginTop: "5px",
              Left: "30px",
            }}
          >
            SparseCtrl
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              fontSize: "22px",
              position: "abosolute",
              marginTop: "5px",
              Left: "30px",
            }}
          >
            Adding Sparse Controls to Text-to-Video Diffusion Models
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              backgroundColor: "rgb(237,195,71)",
              fontSize: "13px",
              position: "relative",
              marginTop: "5px",
              Left: "30px",
              textAlign: "center",
            }}
          >
            <a href="https://github.com/guoyww/animatediff/">
              [2023.12] AnimateDiff v3 and SparseCtrl!
            </a>
          </Typography>
        </Box>
        {/*photo Gallery*/}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "5px" }}
        >
          <Grid item>
            <img
              src={input1}
              alt="input1"
              style={{ width: "120px", height: "90px" }}
            />
          </Grid>
          <Grid item>
            <img
              src={output1}
              alt="XianAItower"
              style={{ width: "120px", height: "90px" }}
            />
          </Grid>
          <Grid item>
            <img
              src={input2}
              alt="WukangBuiding"
              style={{ width: "120px", height: "90px" }}
            />
          </Grid>
          <Grid item>
            <img
              src={output2}
              alt="WukangBuiding"
              style={{ width: "120px", height: "90px" }}
            />
          </Grid>
          {/*End of photo Gallery*/}
        </Grid>
        <Box
          sx={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "-45px",
            marginTop: "-260px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            component="a"
            href="https://landmark.intern-ai.org.cn/"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <HomeIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://github.com/InternLandMark/LandMark"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <CodeIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://arxiv.org/abs/2303.14001"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <DescriptionIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://www.shlab.org.cn/news/5443429"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <NewspaperIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

function HighlightCard4() {
  return (
    <Grid item xs={6}>
      <Box
        sx={{
          backgroundColor: "rgba(53,73,183,0.8)",
          padding: 2,
          borderRadius: 8,
          width: "90%",
          height: "400px",
          margin: "10px 10px 10px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            position: "abosolute",
          }}
        >
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              fontSize: "72px",
              position: "abosolute",
              marginTop: "5px",
              Left: "30px",
            }}
          >
            EdgeSAM
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              fontSize: "22px",
              position: "abosolute",
              marginTop: "5px",
              Left: "30px",
            }}
          >
            Adding Sparse Controls to Text-to-Video Diffusion Models
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Roboto Condensed"
            sx={{
              backgroundColor: "rgb(237,195,71)",
              fontSize: "13px",
              position: "relative",
              marginTop: "5px",
              Left: "30px",
              textAlign: "center",
            }}
          >
            <a href="https://github.com/guoyww/animatediff/">
              [2023.12] The goal of EdgeSAM is to transfer the capabilities of
              SAM into a much more compact model, which makes deployment on edge
              devices feasible.
            </a>
          </Typography>
        </Box>
        {/*photo Gallery*/}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "5px" }}
        >
          <Grid item>
            <img
              src={input1}
              alt="input1"
              style={{ width: "120px", height: "90px" }}
            />
          </Grid>
          <Grid item>
            <img
              src={output1}
              alt="XianAItower"
              style={{ width: "120px", height: "90px" }}
            />
          </Grid>
          <Grid item>
            <img
              src={input2}
              alt="WukangBuiding"
              style={{ width: "120px", height: "90px" }}
            />
          </Grid>
          <Grid item>
            <img
              src={output2}
              alt="WukangBuiding"
              style={{ width: "120px", height: "90px" }}
            />
          </Grid>
          {/*End of photo Gallery*/}
        </Grid>
        <Box
          sx={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "-45px",
            marginTop: "-260px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            component="a"
            href="https://landmark.intern-ai.org.cn/"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <HomeIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://github.com/InternLandMark/LandMark"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <CodeIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://arxiv.org/abs/2303.14001"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <DescriptionIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
          <Button
            variant="contained"
            component="a"
            href="https://www.shlab.org.cn/news/5443429"
            target="_blank"
            sx={{
              backgroundColor: "rgba(53,73,183,0.3)",
              position: "abosolute",
              width: "50px",
              height: "35px",
              marginTop: 5,
              "&:hover": { background: yellow[700] },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "50%",
                fontSize: "5rem",
                backgroundColor: "transparent",
                marginRight: "0.5rem",
                margin: "0",
              }}
            >
              <NewspaperIcon sx={{ color: "white" }} />
            </IconButton>
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export { HighlightCard1, HighlightCard2, HighlightCard3, HighlightCard4 };

function HighlightsCard() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      className="highlights-container"
      style={{ width: "1300px", height: "500px" }}
    >
      <Slider {...settings}>
        <Grid container direction="column">
          <HighlightCard1 />
          <HighlightCard2 />
          <HighlightCard3 />
          <HighlightCard4 />
        </Grid>
      </Slider>
    </div>
  );
}

export function HighlightsCard() {
  return (
    <>
      <MediaQuery minWidth={1024}>
        <Grid container direction="row">
          <HighlightCard1 />
          <HighlightCard2 />
          <HighlightCard3 />
          <HighlightCard4 />
        </Grid>
      </MediaQuery>
      <MediaQuery maxWidth={1024}>
        <Grid container direction="column">
          <HighlightCard1 />
          <HighlightCard2 />
          <HighlightCard3 />
          <HighlightCard4 />
        </Grid>
      </MediaQuery>
    </>
  );
}
