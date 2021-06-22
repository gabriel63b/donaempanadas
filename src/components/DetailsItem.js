import React,  {useEffect, useState} from 'react'
import { useParams } from 'react-router'
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

    return (
        
        <div>
            <Detail pro = { detail }/>
        </div>
    )
}

export default DetailsItem

