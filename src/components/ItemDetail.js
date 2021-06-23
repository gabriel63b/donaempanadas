import React from 'react'
import '../styles/ItemDetail.css';
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function ItemDetail(props) {
    console.log(props);
    return (
        <div>
            <div class="container-fluid">
                    <h2 class="centrar-texto text-uppercase fw-bold">DETALLE DEL PRODUCTO</h2>
                    <div class="row border border-dark">
                        <div class="col-6">
                            <img class="ImageDetail"src={props.prod.image} alt="Imagen Nosotros"></img>
                        </div>
                        <div class="col-6">
                        <h3 class="text-uppercase">{props.prod.title}</h3>
                        <h4 class="mt-5">{props.prod.description}</h4>
                        <h4 class="mt-5">${props.prod.price}</h4>
                        <div class="d-flex align-items-center flex-column bd-highlight mt-5">
                        <ItemCount/>
                        <Button className="mt-3">Agregar</Button>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail
