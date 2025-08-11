import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FunctionComponent from './FunctionComponent' // oluşturduğumuz dosyayı çağırdık.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FunctionComponent />
    <FunctionComponent /> 
  </StrictMode>,
)
