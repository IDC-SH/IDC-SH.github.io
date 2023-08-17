import { Typography, Box, Link } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import newsData from "../data/news.json";

export default function NewsList() {
  return (
    <div>
      <Box sx={{ marginTop: 10 }}>
        {newsData.map((yearlyNews) => (
          <NewsItem yearlyNews={yearlyNews} />
        ))}
      </Box>
    </div>
  );
}

function NewsItem(props) {
  return (
    <Box sx={{ marginBottom: 10 }}>
      <Typography sx={{ fontSize: 40 }}>{props.yearlyNews.year}</Typography>
      {props.yearlyNews.items.map((item, i) => (
        <Typography sx={{ marginLeft: 3, fontSize: 18, marginBottom: 2 }}>
          <CalendarMonthIcon sx={{ color: "#f44336", marginRight: 2 }} />
          {item.title} {item.link !== "" && <Link href={item.link}>more</Link>}
        </Typography>
      ))}
    </Box>
  );
}
