import { Typography, Box, Link, Grid } from "@mui/material";
import MediaQuery from "react-responsive";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React from "react";
import column1Data from "../data/news-landmark.json";
import column2Data from "../data/news-animate-diff.json";
import column3Data from "../data/news-paper.json";

const NewsLink = ({ children, href }) => (
  <Link href={href} sx={{ color: "inherit", textDecoration: "none" }}>
    {children}
  </Link>
);

function NewsItem({ time, title, link }) {
  return (
    <>
      <Box display="flex" alignItems="center" padding="0">
        <CalendarMonthIcon sx={{ color: "#f44336", marginRight: 1 }} />
        <Typography variant="h6" sx={{ fontSize: "18px" }}>
          {time}
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ fontSize: "16px" }}>
        {link !== undefined && link !== "" ? (
          <NewsLink href={link}>{title}</NewsLink>
        ) : (
          title
        )}
      </Typography>
    </>
  );
}

function NewsCards({ isMobile }) {
  return (
    <Grid container sx={{ display: "flex", marginTop: 4 }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(53,73,183,0.1)",
          padding: 2,
          marginX: "4%",
          marginY: "1%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "22px",
            color: "#fff",
            backgroundColor: "#3557b7",
            padding: "5px 10px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          City-scale Rendering and Beyond
        </Typography>
        {column1Data.map((item, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <NewsItem time={item.time} title={item.title} link={item.link} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(53,73,183,0.1)",
          padding: 2,
          marginX: "4%",
          marginY: "1%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "24px",
            color: "#fff",
            backgroundColor: "#3557b7",
            padding: "5px 10px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Video Generation
        </Typography>
        {column2Data.map((item, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <NewsItem time={item.time} title={item.title} link={item.link} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(53,73,183,0.1)",
          padding: 2,
          marginX: "4%",
          marginY: "1%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "24px",
            color: "#fff",
            backgroundColor: "#3557b7",
            padding: "5px 10px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Others
        </Typography>
        {column3Data.map((item, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <NewsItem time={item.time} title={item.title} link={item.link} />
          </Box>
        ))}
      </Box>
    </Grid>
  );
}

function NewsPage() {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Box
        sx={{
          width: "100%",
          height: "50%",
          backgroundColor: "rgb(237,195,71)",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontSize: "32px",
            fontFamily: "Rubik Doodle Shadow",
          }}
        >
          Check Out Our Latest Tech Buzz!
        </Typography>
      </Box>
      <MediaQuery maxWidth={1024}>
        <NewsCards isMobile={true} />
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <NewsCards isMobile={false} />
      </MediaQuery>
    </Box>
  );
}

export default NewsPage;
