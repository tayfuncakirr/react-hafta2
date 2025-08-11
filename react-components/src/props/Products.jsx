import React from "react";

// props parametresi ile componentlere dışarıdan veri geçebiliriz.fonksiyonun içine props parametresi kendi içinde destructure edebiliriz.
// destructure ile props parametresinden productName ve price değerlerini alabiliriz.
// ya da props.productName ve props.price şeklinde de kullanabiliriz.
function Products({ productName, price }) { 
    //Fonksiyon a props parametresi verip destructure ile kullanabiliriz.
   // const  { productName, price } = props;

    /*
    const products = [
                { productName:"telefon", price:5000 },
                { productName:"bilgisayar", price:10000 },
                { productName:"tablet", price:3000 },
                { productName:"televizyon", price:7000 },
                { productName:"buzdolabı", price:15000 }
            ]
                */
    return(
        <div>
            <h3>Products Component</h3>
            <div>Product name: {productName}</div>  
            <div>Product price: {price}</div>
        </div>
         /*
            React'te componentler, props (özellikler) aracılığıyla veri alabilir. Props, componentlere dışarıdan veri geçmek için kullanılır.
            Props, componentlerin davranışını ve görünümünü özelleştirmek için kullanılır. 
            Props, componentlere veri geçmek için kullanılır ve componentler bu verileri kullanarak kendilerini render eder.
            
         */
    )
}
export default Products;