import {
  Grid,
  Typography,
  Box,
  Button,
  styled,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import publicationsData from "../data/publications.json";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[800]),
  backgroundColor: grey[800],
  "white-space": "nowrap",
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

function PublicationItem({ image, title, publish, author, links }) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          marginBottom: 4,
          alignItems: "top",
          backgroundColor: "#F9F9FB",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 16 * 20, height: 9 * 20, margin: 2 }}
          image={image}
          style={{ borderRadius: "8px" }}
        />
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
              <Box sx={{ gridRow: "1", marginRight: 1 }}>
                <ColorButton href={item.link}>{item.name}</ColorButton>
              </Box>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default function PublicationList() {
  return (
    <>
      {publicationsData.map((item) => (
        <PublicationItem
          key={item.i}
          image={item.image}
          title={item.title}
          publish={item.publish}
          author={item.author}
          links={item.links}
        />
      ))}
    </>
  );
}
