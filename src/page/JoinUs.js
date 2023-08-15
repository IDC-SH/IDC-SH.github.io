import * as React from "react";
import Container from "@mui/material/Container";

import ElevateAppBar from "../components/ElevateAppbar";
import { Typography } from "@mui/material";

class JoinUsPage extends React.Component {
  render() {
    return (
      <div>
        <ElevateAppBar />
        <Container maxWidth="sm">
          {/* <h1>JoinUs</h1> */}
          <Typography variant="h6" sx={{ mt: 10, textAlign: "justify" }}>
            In IDC group@Shanghai AI Laboratory, we are devoted to advance the
            forefront of research in developing and applying AI-based tools for
            content creation and digitization.
          </Typography>

          <Typography sx={{ mt: 3 }}>
            Our mission is to empower users to manifest their imagination in a
            better, more efficient and accessible manner.
          </Typography>

          <Typography sx={{ mt: 1 }}>
            We are actively seeking top-tier researchers and interns who are
            driven, disciplined, and innovative to embark on this exciting
            journey.
          </Typography>
          <Typography sx={{ mt: 3 }}>
            If you believe you have what it takes, please do not hesitate to
            express your interest to daibo@pjlab.org.cn.
          </Typography>
        </Container>
      </div>
    );
  }
}

export default JoinUsPage;
