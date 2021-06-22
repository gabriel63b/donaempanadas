import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function Detail(props) {
    console.log(props);
    return (
        <div>
            Aca el detalle de tu producto!!
            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={props.pro.image} />
            <Card.Body>
                <Card.Title>{props.pro.title}</Card.Title>
                {/* <Card.Text>{props.prod.description}</Card.Text> */}
                <Card.Text>${props.pro.price}</Card.Text>
                <Button className="" block variant="primary">Agregar</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Detail
