import React, {useEffect, useState} from 'react'

function FetchApi (){
    const [data, setData] = useState(null)

    useEffect(()=>  {
        fetch( "https://pokeapi.co/api/v2/pokemon?limit=10&offset=200")
        .then((res)=>res.json())
        .then((res)=>{setData(res)})
    },[])
return (
    <div> 
        {
        console.log (data)
        }
    </div>    
)
}

export default FetchApi