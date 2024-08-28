import { Container } from "@mui/material";

import ResponsivePublicationItem from "./PublicationItem";

import recentPublicationsData from "../data/recent-publications.json";
import publicationsData from "../data/publications.json";

// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
function getFiles(r) {
  let files = {};
  r.keys().forEach((item, index) => {
    files[item.replace("./", "").replace(/\.[^/.]+$/, "")] = r(item);
  });
  return files;
}
const publicationImages = getFiles(
  require.context("../data/images-publications", false, /\.(png|jpe?g|svg)$/)
);

export function PublicationList({ filter_tag }) {
  return (
    <Container maxWidth="lg">
      {publicationsData.map((item) => {
        if (
          filter_tag === "all" ||
          (filter_tag && item.tags && item.tags.includes(filter_tag))
        ) {
          return (
            <ResponsivePublicationItem
              key={item.i}
              image={publicationImages[item.i]}
              title={item.title}
              publish={item.publish}
              author={item.author}
              links={item.links}
              tags={item.tags}
            />
          );
        } else {
          return <>{/* <Typography>[{item.i}] no content</Typography> */}</>;
        }
      })}
    </Container>
  );
}

export function RecentPublicationList() {
  return (
    <Container maxWidth="lg">
      {recentPublicationsData.map((i) => {
        let item = publicationsData.filter((item) => item.i === i)[0]; // TODO may be undified
        return (
          <ResponsivePublicationItem
            key={item.i}
            image={publicationImages[item.i]}
            title={item.title}
            publish={item.publish}
            author={item.author}
            links={item.links}
            tags={item.tags}
          />
        );
      })}
    </Container>
  );
}
