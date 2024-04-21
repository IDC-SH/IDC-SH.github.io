import React from "react";
import "slick-carousel/slick.jquery.json";
import { Typography, Box, Button, Grid, IconButton } from "@mui/material";
import { yellow } from "@mui/material/colors";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import input1 from "./images-highlights/input1.png";
import input2 from "./images-highlights/input2.png";
import output1 from "./images-highlights/output1.gif";
import output2 from "./images-highlights/output2.gif";
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
            width: "90%",
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
              <MediaQuery maxWidth={500}>Sparse Ctrl</MediaQuery>
              <MediaQuery minWidth={500}>SparseCtrl</MediaQuery>
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
                fontSize: "22px",
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
            sx={{ marginTop: "5px", marginBottom: "10px" }}
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
              href="https://guoyww.github.io/projects/SparseCtrl/"
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
              href="https://github.com/guoyww/AnimateDiff#202312-animatediff-v3-and-sparsectrl"
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
              href="https://arxiv.org/abs/2311.16933"
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
              href="https://openxlab.org.cn/apps/detail/Masbfca/AnimateDiff"
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

export default HighlightCard3;
