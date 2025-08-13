import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';


function AxiosAPI() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then(response => {
        setUsers(response.data)
       })
       .catch((error)=>{
        console.log("Veri çekilirken hata oluştu")
       })
  },[])

  return (
    <div className='axios'>AxiosAPI
      <hr />
      {users.map((user)=> (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  )
}

export default AxiosAPI