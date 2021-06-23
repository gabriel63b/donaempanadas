import React from 'react'
import ItemCount from './ItemCount';
import '../styles/Item.css';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import image from "../assets/humita.jpg";


export default function Item(props) {
  
    return (
      <div > 
        <Card className= "Item">
          <Card.Img variant="top" className= "ImageItem" src={props.prod.image} />
          <Card.Body>
          <Link to={`/Productos/detail/${props.prod.id}`}><Card.Title className= "TextCard">{props.prod.title}</Card.Title></Link>
            {/* <Card.Text>{props.prod.description}</Card.Text> */}
            <Card.Text>${props.prod.price}</Card.Text>
            <ItemCount/>
            <Button className="" block variant="primary">Agregar</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
