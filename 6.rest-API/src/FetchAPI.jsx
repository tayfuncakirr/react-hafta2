import React, { useState } from 'react'
import { useEffect } from 'react'


function FetchAPI() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch ("https://jsonplaceholder.typicode.com/users")
        .then(repsonse => repsonse.json())
        .then(data => {(setUsers(data))}
        )
    },[])  
  return (
    <div className='fetch'>FetchAPI
        <hr />
         {users.map((user) =>(
            <li key={user.id}>{user.name}</li>
         )
            
         
         
         )}</div>
    
  )
}

export default FetchAPI