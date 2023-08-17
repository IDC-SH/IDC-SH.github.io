import { Container } from "@mui/material";

import NewsList from "../components/NewsList";

export default function NewsPage() {
  return (
    <Container maxWidth="lg">
      <NewsList />
    </Container>
  );
}
