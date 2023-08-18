import { Container, Typography, Box } from "@mui/material";

function JoinusInfo() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h6" sx={{ marginTop: 10 }}>
        In IDC Group @ Shanghai AI Laboratory, we are devoted to advance the
        forefront of research in developing and applying AI-based tools for
        content creation and digitization.
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Our mission is to empower users to manifest their imagination in a
        better, more efficient and accessible manner.
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        We are actively seeking top-tier researchers and interns who are driven,
        disciplined, and innovative to embark on this exciting journey.
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2, marginBottom: 10 }}>
        If you believe you have what it takes, please do not hesitate to express
        your interest to daibo@pjlab.org.cn.
      </Typography>
    </Container>
  );
}

export default function JoinusPage() {
  return (
    <Box sx={{ marginTop: 10 }}>
      <JoinusInfo />
    </Box>
  );
}
