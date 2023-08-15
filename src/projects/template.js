import * as React from "react";
import Container from "@mui/material/Container";
import ElevateAppBar from "../components/ElevateAppbar";

export default function TemplateProjectPage() {
  return (
    <div>
      <ElevateAppBar />
      <Container maxWidth="lg">
        <h1>template project page</h1>
      </Container>
    </div>
  );
}
