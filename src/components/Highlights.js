import { Typography, Box, Button, Grid, IconButton } from "@mui/material";
import { yellow } from "@mui/material/colors";
import highlightleftphoto1 from "./images-highlights/Highlight-Landmark.png";
import highlightleftphoto2 from "./images-highlights/Hightlight-landmark2.png";
import highlightleftphoto3 from "./images-highlights/Hightlight-landmark3.png";
import highlightrightphoto1 from "./images-highlights/Highlight-A01.gif";
import highlightrightphoto2 from "./images-highlights/Highlight-A02.gif";
import highlightrightphoto3 from "./images-highlights/Highlight-A03.gif";
import highlightrightphoto4 from "./images-highlights/Highlight-A04.gif";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export function HighlightsLeftCard() {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            backgroundColor: "rgba(53,73,183,0.3)",
            padding: 2,
            borderRadius: 8,
            height: "420px",
            width: "550px",
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
              variant="h1"
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
              variant="h4"
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
              variant="h4"
              color="white"
              fontWeight="bold"
              fontFamily="Roboto Condensed"
              sx={{
                backgroundColor: "rgb(237,195,71)",
                fontSize: "14px",
                position: "abosolute",
                marginTop: "5px",
                Left: "30px",
              }}
            >
              [2023/10]:LandMark officially Open-sourced!
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

      <Grid item xs={6}>
        <Box
          sx={{
            backgroundColor: "rgba(53,73,183,0.3)",
            padding: 2,
            borderRadius: 8,
            height: "420px",
            width: "550px",
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
              width: "80%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Typography
              variant="h1"
              color="white"
              fontWeight="bold"
              fontFamily="Roboto Condensed"
              sx={{
                fontSize: "72px",
                position: "abosolute",
                top: "30px",
                Left: "30px",
              }}
            >
              AnimateDiff
            </Typography>
            <Typography
              variant="h4"
              color="white"
              fontWeight="bold"
              fontFamily="Roboto Condensed"
              sx={{
                fontSize: "22px",
                position: "relative",
                Top: "5px",
                Left: "30px",
              }}
            >
              Animate Your Personalized Text-to-Image Diffusion Models without
              Specific Tuning
            </Typography>
            <Typography
              variant="h4"
              color="white"
              fontWeight="bold"
              fontFamily="Roboto Condensed"
              sx={{
                backgroundColor: "rgb(237,195,71)",
                fontSize: "14px",
                position: "abosolute",
                marginTop: "5px",
                Left: "30px",
              }}
            >
              [2023/9/25]:Release MotionLoRA and its model zoo!
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
              marginLeft: "500px",
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
    </Grid>
  );
}
