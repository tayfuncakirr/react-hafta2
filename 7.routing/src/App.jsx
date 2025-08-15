import {BrowserRouter, Routes, Route} from "react-router-dom" // kütüphaneyi, yükledikten sonra import ediyoruz.
import './App.css'
import Home from './pages/Home'
import Users from './pages/Users'
import Contact from './pages/Contact'
import Menu from "./components/Menu"

function App() {
 
// BrowserRouter altında çağırılan menu tüm sayfalarda erişilebilir oldu.

  return (
   <BrowserRouter> 
   <Menu/>
     <Routes>
       <Route index element={<Home/>} />
       <Route path='users' element={<Users/>}/>
       <Route path='contact' element={<Contact/>}/>
     </Routes>
   </BrowserRouter>
  )
}

export default App
