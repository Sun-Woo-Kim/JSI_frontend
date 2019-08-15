import { Container, Row, Col, Button, Image } from "react-bootstrap";

export default function MeetHeader() {
  return (
    <div>
      <Container>
        <Row>
          <Title />
        </Row>
        <Row>
          <Col sm={4}>
            <ImageCard />
          </Col>
          <Col sm={8}>
            <Detail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Title() {
  return (
    <div>
      <h2> This is Title!</h2>
    </div>
  );
}
function ImageCard() {
  return (
    <Image
      src="https://blog-assets.hootsuite.com/wp-content/uploads/2016/08/social-media-for-business-940x470.jpg"
      fluid
    />
  );
}

function Detail() {
  return (
    <div>
      <Date />
      <Location />
      <JoinButton />
    </div>
  );
}

function Date() {
  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Image
            src="/static/clock.svg"
            style={{ width: 35, height: "auto" }}
          />
        </Col>
        <Col sm={10}>
          <Row>2019/09/02</Row>
          <Row>AP 3:00</Row>
        </Col>
      </Row>
    </Container>
  );
}

function Location() {
  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Image
            src="/static/placeholder.svg"
            style={{ width: 35, height: "auto" }}
          />
        </Col>
        <Col sm={10}>
          <Row>성남시 분당구 판교 크래프톤타워</Row>
          <Row>4층 401호</Row>
        </Col>
      </Row>
    </Container>
  );
}

function JoinButton() {
  return (
    <Button variant="outline-primary" size="lg">
      참여하기
    </Button>
  );
}
