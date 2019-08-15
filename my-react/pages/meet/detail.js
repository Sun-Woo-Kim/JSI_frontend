import { Container, Row } from "react-bootstrap";

import MeetHeader from "../../components/meet/MeetHeader";
import MeetDetail from "../../components/meet/MeetDetail";

export default function Detail() {
  return (
    <div>
      <Container>
        <Row>
          <MeetHeader />
        </Row>
        <Row>
          <MeetDetail />
        </Row>
      </Container>
    </div>
  );
}
