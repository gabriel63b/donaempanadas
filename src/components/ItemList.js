import React from 'react';
import Item from "./Item";

export default function ItemList() {

const productos = [
  { id: "01", name: "Carne cortada a cuchillo", description: "Rellenas de carne cortada a cuchillo, especias, cebolla y huevo.", precio: 70},
  { id: "02", name: "Humita", description: "Rellenas de queso, salsa blanca y choclo.", precio: 70 },
  { id: "03", name: "Calabresa", description: "Rellenas de cantimpalo y muzzarella", precio: 70 }
];

function getCartItems() {
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
    console.log(valor);
  }).catch(
    function(error){
      console.log(error);
  }).finally(
      function(){
        alert('Promesa terminada')
    }
  )
}

  return (
   <div>
      <button onClick={getCartItems}>Ver mi Carrito</button>
      <div class= "row"> 
        {
          productos.map((productos, index)=>{ return (
                  
                  <div class="col-4">
                      <Item prod = {productos}/>
                    <hr/>
                  </div>
                ) })
            }
      </div>
   </div>
  )
}