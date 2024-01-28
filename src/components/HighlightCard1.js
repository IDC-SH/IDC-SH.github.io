import React from "react";
import "slick-carousel/slick.jquery.json";
import { Typography, Box, Button, Grid, IconButton } from "@mui/material";
import { yellow } from "@mui/material/colors";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import highlightleftphoto1 from "./images-highlights/Highlights-LandMark01.gif";
import highlightleftphoto2 from "./images-highlights/Highlights-LandMark02.gif";
import highlightleftphoto3 from "./images-highlights/Highlights-LandMark03.gif";

const HighlightCard1 = () => {
  return (
    <div className="highlight-card">
      <Grid container>
        <Grid item xs={12} md={6}></Grid>
        <Box
          sx={{
            backgroundColor: "rgba(53,73,183,0.8)",
            padding: 2,
            borderRadius: 8,
            width: "90%",
            height: "400px",
            margin: "12px 10px 10px 20px",
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
    </div>
  );
};

export default HighlightCard1;
