import React from 'react';
import './footer.css';
import { Jumbotron, Container } from 'reactstrap';

const jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbo">
        <Container fluid className="jumb">
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbo;