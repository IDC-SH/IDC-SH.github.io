import { Typography, Box, Button, styled, Grid } from "@mui/material";

import backgroundLandMark from "./images-highlights/background-landmark.jpeg";
import backgroundAnimateDiff from "./images-highlights/background-animatediff.jpeg";
import { indigo, purple } from "@mui/material/colors";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";

import CampaignIcon from "@mui/icons-material/Campaign";

export function HighlightLandMarkCard() {
  // https://mui.com/material-ui/react-button/#customization
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: indigo[600],
    "&:hover": {
      backgroundColor: indigo[400],
    },
    textTransform: "none",
    whiteSpace: "nowrap",
  }));

  const colorButtonStyle = {
    gridRow: 1,
    padding: 1,
    marginRight: 2,
    marginY: 2,
  };

  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${backgroundLandMark})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
          backgroundColor: "black",
        }}
      >
        <br />
        <Typography
          variant="h1"
          textAlign="center"
          color="white"
          fontWeight="bold"
        >
          书生·天际 LandMark
        </Typography>
        <Typography
          variant="h2"
          textAlign="center"
          color="white"
          fontWeight="bold"
        >
          基于 NeRF 的城市级三维大模型
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <ColorButton
              variant="contained"
              size="large"
              href="https://arxiv.org/abs/2303.14001"
              startIcon={<DescriptionIcon />}
              sx={colorButtonStyle}
            >
              <Typography variant="h5" fontWeight="bold">
                Paper
              </Typography>
            </ColorButton>
          </Grid>
          <Grid item>
            <ColorButton
              variant="contained"
              size="large"
              href="https://landmark.intern-ai.org.cn"
              startIcon={<HomeIcon />}
              sx={colorButtonStyle}
            >
              <Typography variant="h5" fontWeight="bold">
                Home Page
              </Typography>
            </ColorButton>
          </Grid>
          <Grid item>
            <ColorButton
              variant="contained"
              size="large"
              href="https://city-super.github.io/gridnerf/"
              startIcon={<HomeIcon />}
              sx={colorButtonStyle}
            >
              <Typography variant="h5" fontWeight="bold">
                Paper Page
              </Typography>
            </ColorButton>
          </Grid>
          <Grid item>
            <ColorButton
              variant="contained"
              size="large"
              href="https://github.com/InternLandMark/LandMark"
              startIcon={<CodeIcon />}
              sx={colorButtonStyle}
            >
              <Typography variant="h5" fontWeight="bold">
                Code
              </Typography>
            </ColorButton>
          </Grid>
          <Grid item>
            <ColorButton
              variant="contained"
              size="large"
              href="https://www.shlab.org.cn/news/5443429"
              startIcon={<CampaignIcon />}
              sx={colorButtonStyle}
            >
              <Typography variant="h5" fontWeight="bold">
                News
              </Typography>
            </ColorButton>
          </Grid>
        </Grid>

        <Typography
          variant="h3"
          textAlign="center"
          color="white"
          fontWeight="bold"
        >
          让超写实城市三维实景成为可能
        </Typography>
        <br />
      </Box>
    </>
  );
}

export function HighlightAnimateDiffCard() {
  return (
    <Typography variant="h3" textAlign="center">
      <br />
      AnimateDiff
    </Typography>
  );
}
