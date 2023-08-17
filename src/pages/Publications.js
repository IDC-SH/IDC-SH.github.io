import { Container } from "@mui/material";

import PublicationList from "../components/PublicationList";

export default function PublicationPage() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 10 }}>
      <PublicationList />
    </Container>
  );
}
