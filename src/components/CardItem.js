import React from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import image from "../assets/humita.jpg";


export default function CardItem() {
  
    return (
      <div>
       
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            <h1>  </h1>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
