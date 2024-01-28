import React from "react";
import "slick-carousel/slick.jquery.json";
import { Typography, Box, Button, Grid, IconButton } from "@mui/material";
import { yellow } from "@mui/material/colors";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import night from "./images-highlights/night.gif";
import graffiti from "./images-highlights/graffiti.gif";
import fish from "./images-highlights/fish.gif";
import MediaQuery from "react-responsive";

const HighlightCard4 = () => {
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
            height: "auto",
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
                fontSize: "64px",
                position: "abosolute",
                marginTop: "5px",
                Left: "30px",
              }}
            >
              <MediaQuery maxWidth={500}>Edge SAM</MediaQuery>
              <MediaQuery minWidth={500}>EdgeSAM</MediaQuery>
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
              Prompt-In-the-Loop Distillation for On-Device Deployment of SAM
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
              <a href="https://mmlab-ntu.github.io/project/edgesam/">
                [2023.12] We're planning to release the iOS app to the App
                Store.
                <div>Stay tuned!</div>
              </a>
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: "5px", marginBottom: "10px" }}
          >
            <Grid item>
              <img
                src={fish}
                alt="fish"
                style={{ width: "150px", height: "90px" }}
              />
            </Grid>
            <Grid item>
              <img
                src={night}
                alt="night"
                style={{ width: "150px", height: "90px" }}
              />
            </Grid>
            <Grid item>
              <img
                src={graffiti}
                alt="graffiti"
                style={{ width: "150px", height: "90px" }}
              />
            </Grid>
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
              href="https://mmlab-ntu.github.io/project/edgesam/"
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
              href="https://github.com/chongzhou96/EdgeSAM"
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
              href="https://arxiv.org/abs/2312.06660"
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
              href="https://huggingface.co/spaces/chongzhou/EdgeSAM"
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
                <SportsEsportsIcon sx={{ color: "white" }} />
              </IconButton>
            </Button>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default HighlightCard4;
