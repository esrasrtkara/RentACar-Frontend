import React from "react";
import CarCard from "../components/CarCard";
import { Col, Container, Row } from "react-bootstrap";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Container>
      <Row> 
        <Col className="col-3"> 
          <CarCard name={"Mercedes"} price={"500 $"} />
        </Col>
        <Col className="col-3">
          <CarCard name={"Mercedes"} price={"500 $"} />
        </Col>
        <Col className="col-3">
          <CarCard name={"Mercedes"} price={"500 $"} />
        </Col>
        <Col className="col-3">
          <CarCard name={"Mercedes"} price={"500 $"} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
