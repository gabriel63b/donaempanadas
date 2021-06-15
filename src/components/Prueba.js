import React, { useEffect, useState } from 'react';

const productos = [
    { id: "01", name: "Carne cortada a cuchillo", description: "Rellenas de carne cortada a cuchillo, especias, cebolla y huevo.", precio: 70},
    { id: "02", name: "Humita", description: "Rellenas de queso, salsa blanca y choclo.", precio: 70 },
    { id: "03", name: "Calabresa", description: "Rellenas de cantimpalo y muzzarella", precio: 70 }
  ];

  export default function Prueba() {
  const [data, setData] = useState([]);
  let miPromesa = new Promise((resolve, reject) => {  
    setTimeout(function(){
      const error = Math.random() > 0.85;
      if(!error){      
        resolve(productos);  
        
      }
      reject("Error obteniendo los datos :(");
      }, 2000);
    });  
  
    miPromesa.then( function(valor){
      setData(valor);
      console.log(data);
    }).catch(
      function(error){
        console.log(error);
    }).finally(
        function(){
         
      }
    )
    
 
//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=2")
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res.results);
//       });
//   }, []);

  return (
    <div>
        {/* <button onClick={Prueba}>Ver!!!!</button> */}
      {data !== null ? (
        data.map((data, index) => {
            return <p key={index} id={index}>{data.precio}</p>
        })
      ) : (
        <h3>Cargada</h3>
      )}
    </div>
  );
}

