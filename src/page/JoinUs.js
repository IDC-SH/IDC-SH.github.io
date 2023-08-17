import { Container, Typography } from "@mui/material";

export default function JoinUsPage() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h6" sx={{ marginTop: 10, textAlign: "justify" }}>
        In IDC Group @ Shanghai AI Laboratory, we are devoted to advance the
        forefront of research in developing and applying AI-based tools for
        content creation and digitization.
      </Typography>
      <Typography sx={{ marginTop: 3, textAlign: "justify" }}>
        Our mission is to empower users to manifest their imagination in a
        better, more efficient and accessible manner.
      </Typography>
      <Typography sx={{ marginTop: 3, textAlign: "justify" }}>
        We are actively seeking top-tier researchers and interns who are driven,
        disciplined, and innovative to embark on this exciting journey.
      </Typography>
      <Typography sx={{ marginTop: 3, marginBottom: 10, textAlign: "justify" }}>
        If you believe you have what it takes, please do not hesitate to express
        your interest to daibo@pjlab.org.cn.
      </Typography>
    </Container>
  );
}
