import React, {useState} from 'react';
import Item from "./Item";

const productos = [
  { id: "01", name: "Carne cortada a cuchillo", description: "Rellenas de carne cortada a cuchillo, especias, cebolla y huevo.", precio: 70},
  { id: "02", name: "Humita", description: "Rellenas de queso, salsa blanca y choclo.", precio: 70 },
  { id: "03", name: "Calabresa", description: "Rellenas de cantimpalo y muzzarella", precio: 70 }
];

export default function ItemList() {
  
  const [product, setProduct] = useState([]);
  let miPromesa = new Promise((resolve, reject) => {  
  setTimeout(function(){
    const error = Math.random() > 0.85;
    if(!error){      
      resolve(productos);  
    }
    reject("Error obteniendo los datos :(");
    }, 2000);
  });  

  miPromesa.then((product) => {setProduct(product)})
  .catch(
    function(error){
      console.log(error);
  }).finally(
      function(){
     }
   )
  


  return (
   <div>
   
      <div class= "row"> 
        {
          product.map((product, index)=>{ return (
                  <div class="col-4">
                      <Item prod = {product}/>
                    <hr/>
                  </div>
                ) })
            }
      </div>
   </div>
  )
}