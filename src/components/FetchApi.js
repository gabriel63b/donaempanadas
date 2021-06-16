import React, {useEffect, useState} from 'react'
import Item from "./Item";

function FetchApi (){
    const [data, setData] = useState([])

    useEffect(()=>  {
        fetch( "https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((res)=>{setData(res)})
    },[])
return (
    <div> 
        {
        console.log (data)
        }
        <div class= "row"> 
        {
          data.map((data, index)=>{ return (
                  <div class="col-4">
                      <Item prod = {data}/>
                    <hr/>
                  </div>
                ) })
            }
        </div>
        
    </div>    
)
}

export default FetchApi