import React from 'react'
import PropTypeUser from './props/PropTypeUser'



import Products from './props/Products' // Products componentini import ettik.


// App componenti, Products componentini kullanarak ürün bilgilerini gösterir.
// App componenti, ana uygulama bileşenidir ve diğer bileşenleri içerir.
// Products componenti, props aracılığıyla ürün adını ve fiyatını alır ve gösterir.

function App() {
 
  return (
    <>
      <Products productName="Bilgisayar" price={5000}/>
      <hr />
      <PropTypeUser name="Tayfun" surname="çakır" age="otuz"/>
        

    </>
  )
}

export default App