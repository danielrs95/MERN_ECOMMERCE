import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className='text-center pt-2  text-light bg-primary'>
            <strong>CHECK MY SOCIAL MEDIA</strong>
          </Col>
        </Row>
        <Row>
          <Col className='text-center pb-1  text-light bg-primary'>
            <a
              href='https://www.linkedin.com/in/daniel-ramirez-salazar-800081145/'
              target='_blank'
              className='fab fa-linkedin fa-2x pt-1 '
              style={{ color: "#fff" }}
            />
            <a
              href='https://github.com/danielrs95'
              target='_blank'
              className='fab fa-github pl-2 fa-2x pt-1 '
              style={{ color: "#fff" }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
