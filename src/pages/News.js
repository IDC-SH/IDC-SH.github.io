import { Typography, Box, Link, Container } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import newsData from "../data/news.json";

function NewsItem({ time, title, link }) {
  return (
    <>
      <Box display="flex" alignItems="center" padding="0">
        <CalendarMonthIcon sx={{ color: "#f44336", marginRight: 1 }} />
        <Typography variant="h6">{time}</Typography>
      </Box>
      <Typography variant="body1">
        {title}{" "}
        {link !== undefined && link !== "" && <Link href={link}>more</Link>}
      </Typography>
    </>
  );
}

function NewsList() {
  return (
    <Container maxWidth="sm">
      {newsData.map((item) => (
        <Box sx={{ marginBottom: 2 }}>
          <NewsItem time={item.time} title={item.title} link={item.link} />
        </Box>
      ))}
    </Container>
  );
}

export default function NewsPage() {
  return (
    <Box sx={{ marginTop: 10 }}>
      <NewsList />
    </Box>
  );
}
