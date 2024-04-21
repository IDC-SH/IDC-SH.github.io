import { Container, Typography, Box } from "@mui/material";
import WeChatAccount from "./images-home/WechatAccount.jpg";

function JoinusInfo() {
  return (
    <Container maxWidth="md">
      <Typography variant="h6" sx={{ marginTop: 10 }}>
        We are devoted to advance the forefront of research in developing and
        applying AI-based tools for content creation and digitization.
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Our mission is to empower users to manifest their imagination in a
        better, more efficient and accessible manner.
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        We are actively seeking top-tier researchers and interns who are driven,
        disciplined, and innovative to embark on this exciting journey.
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 10 }}>
        If you believe you have what it takes, please do not hesitate to express
        your interest to
        <Typography variant="h5" sx={{ fontStyle: "italic", fontWeight: "bold"}}>
          daibo@pjlab.org.cn .
        </Typography>
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Follow our WeChat Official Account for more information!
      </Typography>
      <img
        src={WeChatAccount}
        alt="WeChatAccount"
        style={{ width: "300px", height: "300px" }}
      />
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
