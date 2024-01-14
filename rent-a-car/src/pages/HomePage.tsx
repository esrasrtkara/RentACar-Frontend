import React from "react";
import CarCard from "../components/CarCard";
import { Col, Container, Row } from "react-bootstrap";
import Teams from "../components/Teams";
import Footer from "../components/Footer";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
    <Container>
      <Row> 
        <Col> 
          <CarCard name="Fiat Egea Cross" brandName="Fiat" dailyPrice={150}/>
        </Col>
        <Col> 
          <CarCard name="Fiat Egea Cross" brandName="Fiat" dailyPrice={150}/>
        </Col>
        <Col> 
          <CarCard name="Fiat Egea Cross" brandName="Fiat" dailyPrice={150}/>
        </Col>
      </Row>
    </Container>
    <Teams />
    <Footer/>
    </>
  );
};

export default HomePage;
