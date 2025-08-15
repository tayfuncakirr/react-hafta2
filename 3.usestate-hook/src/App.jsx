import React, { useState } from "react";
import Form from "./Form";
import './App.css'

//useState nedir ? useState, React'te bir bileşenin durumunu yönetmek için kullanılan bir Hook'tur.
//useState, bileşenin durumunu saklamak ve güncellemek için bir dizi döndürür.
//useState, başlangıç durumunu alır ve bu durumu güncellemek için bir fonksiyon sağlar.
//useState, bileşenin yeniden render edilmesini tetikler ve güncellenmiş durumu kullanarak bileşeni yeniden render eder.
//useState, fonksiyon bileşenlerinde durum yönetimi için kullanılır.
//useState, bir state'in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir.

function App(){

  const [name, setName] = useState("tayfun"); 
  const [age, setAge] = useState(30);
  const [users, setUsers] = useState(["tayfun", "ahmet", "mehmet"]);
  const [userInfo, setUserInfo] = useState({username:"tcakir", password:"1234"});
  const [count, setCount] = useState(0);

 // Arttır azalt butonu için foknsiyon 
  const arttir = ()=>{
    setCount( count + 1)
  }
  
  function azalt(){
    setCount (count - 1)
  }
  return(
     //yukarıda tanımladığımız değer obje ise, değeri { } süslü parantezler içinde alıyoruz.-
    <div className="app-container">
           
         <div className="user-container">
          <h3>User</h3>
           Kullanıcı Adı: {userInfo.username} <br /> 
          Şifre:{userInfo.password}       
         </div>

          <hr />
        <div className="list-container">
          <h3>Liste</h3>
            {users.map((user,index) =>
            <div key={index}> {user}</div> )}
            
            </div>
         
      <hr />
      
      <div className="change-container">
        ad:{name} yaş:{age}
        <button onClick={()=>{setName("ali")}}> isim değiştir </button>
        
        <div>
          <p>{count}</p>
            <button onClick={arttir}>arttır</button>
            <button onClick={azalt}>azalt</button>
        </div>
        </div>
        <hr />
        <div className="form-container"><Form/></div>
        
    </div>
  )
}

export default App