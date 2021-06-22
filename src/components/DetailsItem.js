import React,  {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Item from "./Item";
import Detail from "./Detail";


function DetailsItem() {
    const {product_id} = useParams ()
    console.log(product_id);
    const [detail, setDetail] = useState([])

    useEffect(()=>  {
        fetch( "https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((res)=>{setDetail(res[product_id-1])})
    },[])
const details = "pasaremos detalles particulares del producto"
    return (
        
        <div>
            <Item prod = { detail }/>
            <Detail prod ={ details}/>
        </div>
    )
}

export default DetailsItem

