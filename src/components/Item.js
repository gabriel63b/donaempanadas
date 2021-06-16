import React from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap'
import image from "../assets/humita.jpg";


export default function CardItem(props) {
  
    return (
      <div> 
        <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" src={props.prod.image} />
          <Card.Body>
            <Card.Title>{props.prod.title}</Card.Title>
            {/* <Card.Text>{props.prod.description}</Card.Text> */}
            <Card.Text>${props.prod.price}</Card.Text>
            <ItemCount/>
          </Card.Body>
        </Card>
      </div>
    );
}
