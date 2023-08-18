import MediaQuery from "react-responsive";

import {
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import VideocamIcon from "@mui/icons-material/Videocam";
import AdsClickIcon from "@mui/icons-material/AdsClick";

function PublicationItem({ isMobile, image, title, publish, author, links }) {
  // https://mui.com/material-ui/react-button/#customization
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: grey[800],
    "&:hover": {
      backgroundColor: grey[700],
    },
    textTransform: "none",
    whiteSpace: "nowrap",
  }));

  return (
    <Card
      sx={{
        display: isMobile ? "" : "flex",
        marginBottom: 4,
        backgroundColor: "#F9F9FB",
      }}
    >
      {/* center image on mobile */}
      <Box
        style={
          isMobile
            ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {}
        }
      >
        <CardMedia
          component="img"
          sx={{ width: 16 * 20, height: 9 * 20, margin: 2 }}
          image={image}
          style={{ borderRadius: "8px" }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          {author}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", marginBottom: 1 }}
        >
          {publish}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {links.map((item) => (
            <Grid
              item
              key={item.name}
              sx={{ gridRow: "1", marginRight: 1, marginY: 1 }}
            >
              <ColorButton
                variant="contained"
                href={item.link}
                startIcon={
                  item.name === "Paper" ? (
                    <DescriptionIcon />
                  ) : item.name === "Paper Page" ||
                    item.name === "Home Page" ? (
                    <HomeIcon />
                  ) : item.name === "Code" ? (
                    <CodeIcon />
                  ) : item.name === "Video" ? (
                    <VideocamIcon />
                  ) : (
                    <AdsClickIcon />
                  )
                }
              >
                {item.name}
              </ColorButton>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function ResponsivePublicationItem({
  image,
  title,
  publish,
  author,
  links,
}) {
  return (
    <>
      <MediaQuery maxWidth={1024}>
        <PublicationItem
          isMobile={true}
          image={image}
          title={title}
          publish={publish}
          author={author}
          links={links}
        />
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <PublicationItem
          isMobile={false}
          image={image}
          title={title}
          publish={publish}
          author={author}
          links={links}
        />
      </MediaQuery>
    </>
  );
}
