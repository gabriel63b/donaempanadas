import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function ItemCount() {
    const [count, setCount] = React.useState(0);
    function aumentarContador(){
        setCount(count +1);
    }
    
    function disminuirContador(){
       if (count > 0) {
        setCount(count -1);
       }
    }
        return (

      
        <ButtonGroup className="border border-4 border-blue">
        <Button className="mr-4" onClick={disminuirContador}>- </Button>
        <h3> {count} </h3>
        <Button className="ml-4" onClick={aumentarContador}> +</Button>
        </ButtonGroup>
                  
    )
}
