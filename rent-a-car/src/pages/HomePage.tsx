import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../components/carCard/CarCard';
import { Col, Container, Row } from 'react-bootstrap';
import Teams from '../components/teams/Teams';
import carService from '../services/carService';
import {GetAllCarResponse } from '../models/responses/Car/getAllCarResponse';
import { setCars } from '../store/car/carSlice';
import Layout from '../components/layout/Layout';
import Banner from '../components/banner/Banner';
import { setActiveCar } from '../store/car/activeCarSlice';

type Props = {};

const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  const cars = useSelector((state: any) => state.car.cars);
  const activeCars = useSelector((state: any) => state.activeCar.activeCar);
  
  useEffect(() => {
    getCars();
  },[]);

  const getCars = () => {
    carService.getAll().then((response) => {
      dispatch(setCars(response.data.data));
    });
    carService.getAllActiveCar().then(response=>{
      dispatch(setActiveCar(response.data.data));
    })
  };

  return (
    <Layout>
      <Banner />
      <Container>
        <Row>
          <h2 className="cars-title text-center">KAMPANYALI ARAÇLARIMIZ</h2>
        </Row>
        <Row>
          {activeCars.map((activeCar: GetAllCarResponse, i: number) => (
            <Col key={i} className="col-4">
              <CarCard activeCar={activeCar} />
            </Col>
          ))}
        </Row>
      </Container>
      <Teams />
    </Layout>
  );
};

export default HomePage;
