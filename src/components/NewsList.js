import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Link from "@mui/material/Link";

import News from "../data/news.json";

export default function NewsList() {
  return (
    <div>
      <Box sx={{ marginTop: 10 }}>
        {News.map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
      </Box>
    </div>
  );
}

function NewsItem(props) {
  return (
    <Box sx={{ marginBottom: 10 }}>
      <Typography sx={{ fontSize: 40 }}>{props.item.year}</Typography>
      {props.item.items.map((line, i) => (
        <Typography sx={{ marginLeft: 3, fontSize: 18, marginBottom: 2 }}>
          <CalendarMonthIcon sx={{ color: "#f44336", marginRight: 2 }} />
          {line}{" "}
          {props.item.links[i] !== "" && (
            <Link href={props.item.links[i]}>more</Link>
          )}
        </Typography>
      ))}
    </Box>
  );
}
