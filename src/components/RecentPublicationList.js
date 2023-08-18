import { Container } from "@mui/material";

import ResponsivePublicationItem from "./PublicationItem.js";

import recentPublicationsData from "../data/recent-publications.json";
import publicationsData from "../data/publications.json";

export default function RecentPublicationList() {
  return (
    <>
      <Container maxWidth="lg">
        {recentPublicationsData.map((i) => {
          let item = publicationsData.filter((item) => item.i === i)[0]; // TODO may be undified
          return (
            <ResponsivePublicationItem
              key={item.i}
              image={item.image}
              title={item.title}
              publish={item.publish}
              author={item.author}
              links={item.links}
            />
          );
        })}
      </Container>
    </>
  );
}
