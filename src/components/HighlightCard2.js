import React from "react";
import "slick-carousel/slick.jquery.json";
import { Typography, Box, Button, Grid, IconButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { yellow } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import highlightrightphoto1 from "./images-highlights/Highlight-A01.gif";
import highlightrightphoto2 from "./images-highlights/Highlight-A02.gif";
import highlightrightphoto3 from "./images-highlights/Highlight-A03.gif";
import highlightrightphoto4 from "./images-highlights/Highlight-A04.gif";
import MediaQuery from "react-responsive";

const HighlightCard2 = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}></Grid>
      <Box
        sx={{
          backgroundColor: "rgba(53,73,183,0.8)",
          padding: 2,
          borderRadius: 8,
          width: "90%",
          height: "auto",
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
              fontSize: "64px",
              position: "abosolute",
              margintop: "10px",
              Left: "20px",
            }}
          >
            <MediaQuery maxWidth={500}>Animate Diff</MediaQuery>
            <MediaQuery minWidth={500}>AnimateDiff</MediaQuery>
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
            sx={{ marginTop: "5px", marginBottom: "10px" }}
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
            marginRight: "-20px",
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
            href="https://arxiv.org/abs/2307.04725"
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
};

export default HighlightCard2;
