import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout';
import carService from '../../services/carService';
import { setCars } from '../../store/car/carSlice';
import './cars.css';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CarCard from '../../components/carCard/CarCard';
import { GetAllCarResponse } from '../../models/responses/Car/getAllCarResponse';
import { setActiveCar } from '../../store/car/activeCarSlice';
type Props = {};

const Cars = (props: Props) => {
  const dispatch = useDispatch();
  const cars = useSelector((state: any) => state.car.cars);
  const activeCars = useSelector((state: any) => state.activeCar.activeCar);
  useEffect(() => {
    getCars();
  });
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
      <Container>
        <Row>
          <h2 className="cars-title text-center">ARAÇLARIMIZ</h2>
        </Row>
        <Row>
          {activeCars.map((activeCar: GetAllCarResponse, i: number) => (
            <Col key={i} className="col-4">
              <CarCard activeCar={activeCar} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Cars;
