import React from 'react';
import './main.css';
import { Container, Row, Col } from 'reactstrap';

const Main = (props) => {
  return (
    <Container>
      <Row>
        <Col sm="4" className="titleBody"><h1>{props.nome}</h1></Col>
      </Row>
      <Row>
        <Col sm="12" lg="6" className="sobreGame"><h2>{props.tituloSobre}</h2></Col>
      </Row>
      <Row>
        <Col sm="12" lg="12"><h3>{props.sobreGame}</h3></Col>
      </Row>
    </Container>
  );
}

export default Main;