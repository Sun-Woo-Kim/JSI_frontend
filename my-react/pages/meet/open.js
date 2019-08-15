import { Form, Container, Col, Row, Button } from "react-bootstrap";

import TextEditor from "../../components/TextEditor";

export default function Detail() {
  return (
    <div>
      <p />
      <Container>
        <Row>
          <BaseInput />
        </Row>
        <Row>
          <TextEditor />
        </Row>
        <Row>
          <p />
        </Row>
        <Row>
          <OpenButton />
        </Row>
      </Container>
    </div>
  );
}

function BaseInput() {
  return (
    <Form>
      <Form.Group controlId="formGroupTitle">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목" />
      </Form.Group>

      <Form.Group controlId="formGroupLocation">
        <Form.Label>위치</Form.Label>
        <Form.Control type="text" placeholder="위치" />
      </Form.Group>

      <Form.Group controlId="formGroupDate">
        <Form.Label>날짜</Form.Label>
        <Form.Control type="date" placeholder="날짜" />
      </Form.Group>

      <Form.Group controlId="formGroupTime">
        <Form.Label>시간</Form.Label>
        <Form.Control type="time" placeholder="시간" />
      </Form.Group>

      <Form.Group controlId="formGroupPeople">
        <Form.Label>참여 가능 인원</Form.Label>

        <Form.Row>
          <Form.Group controlId="formGroupPeopleMin">
            <Form.Control type="number" />
          </Form.Group>

          <Form.Label>-</Form.Label>

          <Form.Group controlId="formGroupPeopleMax">
            <Form.Control type="number" />
          </Form.Group>

          <Form.Label>명</Form.Label>
        </Form.Row>
      </Form.Group>

      <Form.Group controlId="formGroupMainImage">
        <Form.Label>메인 이미지</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Form>
  );
}

function OpenButton() {
  return (
    <Button variant="outline-primary" size="lg">
      참여하기
    </Button>
  );
}
