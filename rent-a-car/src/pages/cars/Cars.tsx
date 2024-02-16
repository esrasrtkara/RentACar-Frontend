import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout';
import carService from '../../services/carService';
import { setCars } from '../../store/car/carSlice';
import './cars.css';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CarCard from '../../components/carCard/CarCard';
import { GetAllCarResponse } from '../../models/responses/Car/getAllCarResponse';
type Props = {};

const Cars = (props: Props) => {
  const dispatch = useDispatch();
  const cars = useSelector((state: any) => state.car.cars);

  useEffect(() => {
    getCars();
  }, []);
  const getCars = () => {
    carService.getAll().then((response) => {
      dispatch(setCars(response.data));
    });
  };
  return (
    <Layout>
      <Container>
        <Row>
          <h2 className="cars-title text-center">ARAÇLARIMIZ</h2>
        </Row>
        <Row>
          {cars.slice(0, 9).map((car: GetAllCarResponse, i: number) => (
            <Col key={i} className="col-4">
              <CarCard car={car} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Cars;
