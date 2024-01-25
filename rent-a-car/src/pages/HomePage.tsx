
import axios from 'axios'
import { useEffect, useState } from 'react'
import CarCard from "../components/carCard/CarCard";
import { Col, Container, Row } from "react-bootstrap";
import Teams from "../components/teams/Teams";
import { CarModel } from "../models/CarModel";

type Props = {};

const HomePage = (props: Props) => {
  const [cars, setCars] = useState<CarModel[]>([]);

  useEffect(() => {
    getCars();
  }, [])

  const getCars = async() => {
    let response = await axios.get('http://localhost:8080/api/cars')
    console.log(response.data)
    setCars(response.data);
  }
  return (
    <>
    <Container>
      <Row> 
      {cars.map(car => (
        <Col key={car.id} className='col-4'> 
          <CarCard car = {car}/>
        </Col>
        ))}
      </Row>
    </Container>
    <Teams />
    </>
  );
};

export default HomePage;
