import React from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap'
import image from "../assets/humita.jpg";


export default function CardItem(props) {
  
    return (
      <div> 
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{props.prod.name}</Card.Title>
            <Card.Text>{props.prod.description}</Card.Text>
            <Card.Text>${props.prod.precio}</Card.Text>
            <ItemCount/>
          </Card.Body>
        </Card>
      </div>
    );
}
