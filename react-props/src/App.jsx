import React from 'react'
import Products from './props/Products' // Products componentini import ettik.

// App componenti, Products componentini kullanarak ürün bilgilerini gösterir.
// App componenti, ana uygulama bileşenidir ve diğer bileşenleri içerir.
// Products componenti, props aracılığıyla ürün adını ve fiyatını alır ve gösterir.

function App() {
  return (
    <div>
      <Products productName="Bilgisayar" price={5000}/>
    </div>
  )
}

export default App