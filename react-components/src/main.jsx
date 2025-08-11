import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FunctionComponent from './components/FunctionComponent' // oluşturduğumuz dosyayı çağırdık.
import ClassComponent from './components/ClassComponent'
import Products from './props/Products'


createRoot(document.getElementById('root')).render(
  <>
    <FunctionComponent /> 
    <hr />
    <ClassComponent/>
    <hr />
    <Products productName="Bilgisayar" price={5000}/>
    
    
  </>
)
