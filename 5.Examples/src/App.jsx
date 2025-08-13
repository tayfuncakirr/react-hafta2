import React from "react";
import "./css/App.css"
import Header from "./Header.jsx";
import { products } from "./Data.jsx";
import Product from "./Product.jsx";

function App(){

  return(
  <div>
    <Header/>
    <div className="main-products">
{
    products.map((product)=>(
      <Product key={product.id} product ={product}/>
    ))
   }
    </div>
   
  </div>

  )
  
}

export default App
