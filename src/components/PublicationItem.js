import MediaQuery from "react-responsive";

import {
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import VideocamIcon from "@mui/icons-material/Videocam";
import AdsClickIcon from "@mui/icons-material/AdsClick";

function PublicationItem({ isMobile, image, title, publish, author, links }) {
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
          sx={{ display: "grid" }}
        >
          {links.map((item) => (
            <Box key={item.name} sx={{ gridRow: "1", marginRight: 1 }}>
              <Button
                variant="contained"
                href={item.link}
                startIcon={
                  item.name === "paper" ? (
                    <DescriptionIcon />
                  ) : item.name === "project" ? (
                    <HomeIcon />
                  ) : item.name === "code" ? (
                    <CodeIcon />
                  ) : item.name === "video" ? (
                    <VideocamIcon />
                  ) : (
                    <AdsClickIcon />
                  )
                }
                style={{
                  backgroundColor: grey[800],
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundColor: grey[700],
                  },
                }}
              >
                {item.name}
              </Button>
            </Box>
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
