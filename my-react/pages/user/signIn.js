import { Form, Container, Col, Row, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div>
      <BaseInput />
    </div>
  );
}

function BaseInput() {
  return (
    <Form>
      <Form.Group controlId="formGroupSignInEmail">
        <Form.Control type="email" placeholder="e-mail" />
      </Form.Group>

      <Form.Group controlId="formGroupSignInPassword">
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <Button variant="primary" size="lg" block>
        로그인
      </Button>

      <Form.Group controlId="formGroupPeople">
        <Form.Row>
          <Form.Label>아직 계정이 없나요? </Form.Label>

          <Form.Group controlId="formGroupPeopleMax">
            <Button variant="link" href="/user/signup">
              회원가입
            </Button>
          </Form.Group>
        </Form.Row>
      </Form.Group>
    </Form>
  );
}
