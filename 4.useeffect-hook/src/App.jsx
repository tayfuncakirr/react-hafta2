import { useEffect, useState } from 'react'
import './App.css'

function App(){
  
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
//useEffect, bir bileşeni harici bir sistem ile senkronize etmenizi sağlayan React Hook’udur.
useEffect(()=>{
  console.log("her zaman çalışır")
})
useEffect(()=>{
  console.log("İlk render edildiğinde çalışır.")
}, [])

useEffect(()=>{
  console.log("İlk render edildiğinde ve name state değeri değiştiğinde çalışır")
}, [name])

useEffect(()=>{
  console.log("İlk render edildiğinde ve surname state değeri değiştiğinde çalışır")
}, [surname])

  return(
    <div>
      <div><button onClick={()=>{setName("Tayfun")}}>Adı değiştir</button></div> 
      <div><button onClick={()=>{setSurname("Çakır")}}>Soyad değiştir</button></div>
    </div>
  )
}

export default App