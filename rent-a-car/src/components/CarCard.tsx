import React from "react";
import { Card } from "react-bootstrap";
import { Button, Container } from "semantic-ui-react";

type Props = {
  name: string;
  price: string;
};

const CarCard = (props: Props) => {
  return (
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.topgear.com/sites/default/files/2022/07/13.jpg"
            style={{ height: 200, width: 250 }}
          />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.price}</Card.Text>
            <div className="ui two buttons">
              <Button basic color="green">
                Kirala
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
  );
};

export default CarCard;
