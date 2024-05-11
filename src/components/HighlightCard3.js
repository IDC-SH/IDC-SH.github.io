import React from "react";
import "slick-carousel/slick.jquery.json";
import { Typography, Box, Button, Grid, IconButton } from "@mui/material";
import { yellow } from "@mui/material/colors";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import VideocamIcon from "@mui/icons-material/Videocam";
import pacer1 from "./images-highlights/pacer1.gif";
import MediaQuery from "react-responsive";

const HighlightCard3 = () => {
  return (
    <div className="highlight-card">
      <Grid container>
        <Grid item xs={12} md={6}></Grid>
        <Box
          sx={{
            backgroundColor: "rgba(53,73,183,0.8)",
            padding: 2,
            borderRadius: 8,
            width: "100%",
            height: "auto",
            marginX: "2%",
            marginY: "2%",
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
                fontSize: "64px",
                position: "abosolute",
                marginTop: "5px",
                Left: "30px",
              }}
            >
              <MediaQuery maxWidth={500}>PACER+</MediaQuery>
              <MediaQuery minWidth={500}>PACER+</MediaQuery>
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
              On-Demand Pedestrian Animation Controller in Driving Scenarios
            </Typography>
            <Typography
              color="white"
              fontWeight="bold"
              fontFamily="Roboto Condensed"
              sx={{
                backgroundColor: "rgb(237,195,71)",
                fontSize: "22px",
                position: "relative",
                marginTop: "5px",
                Left: "30px",
                textAlign: "center",
              }}
            >
              <a href="https://github.com/IDC-Flash/PacerPlus">
                [03/2024] Codes and pre-trained models released!
              </a>
            </Typography>
          </Box>
          {/*photo Gallery*/}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: "5px", marginBottom: "10px" }}
          >
            <Grid item>
              <img
                src={pacer1}
                alt="pacer1"
                style={{ width: "300px", height: "200px" }}
              />
            </Grid>
            {/*End of photo Gallery*/}
          </Grid>
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
              href="https://wangjingbo1219.github.io/papers/CVPR2024_PACER_PLUS/PACERPLUSPage.html"
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
              href="https://github.com/IDC-Flash/PacerPlus"
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
              href="https://arxiv.org/abs/2404.19722"
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
              href="https://youtu.be/Pq10Q_ZBOrw"
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
                <VideocamIcon sx={{ color: "white" }} />
              </IconButton>
            </Button>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default HighlightCard3;
