import React from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import image from "../assets/humita.jpg";


export default function Item(props) {
  
    return (
      <div> 
        <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" src={props.prod.image} />
          <Card.Body>
          <Link to={`/${props.prod.id}`}><Card.Title>{props.prod.title}</Card.Title></Link>
            {/* <Card.Text>{props.prod.description}</Card.Text> */}
            <Card.Text>${props.prod.price}</Card.Text>
            <ItemCount/>
            <Button className="" block variant="primary">Agregar</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
