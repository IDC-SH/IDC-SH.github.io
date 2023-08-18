import ResponsivePublicationItem from "./PublicationItem.js";

import publicationsData from "../data/publications.json";

export default function PublicationList() {
  return (
    <>
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
    </>
  );
}
