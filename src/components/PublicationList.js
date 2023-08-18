import { Container } from "@mui/material";

import ResponsivePublicationItem from "./PublicationItem";

import publicationsData from "../data/publications.json";

export default function PublicationList() {
  return (
    <Container maxWidth="lg">
      {publicationsData.map((item) => (
        <ResponsivePublicationItem
          key={item.i}
          image={item.image}
          title={item.title}
          publish={item.publish}
          author={item.author}
          links={item.links}
        />
      ))}
    </Container>
  );
}
