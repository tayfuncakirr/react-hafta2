import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

//useNavigate ile Link bileşeni kullanılmadan da etiketin onclick özelliği ile de yönlendirme yapılabilir.
function Menu() {
    const navigate = useNavigate();
  return (
    <div>
        <ul className='menu'>
            <li style={{cursor:'pointer'}} onClick={()=> navigate( -1)}>Geri</li>
            <li><Link to="/">Anasayfa</Link></li> 
            <li><Link to="users">Kullanıcılar</Link></li>
            <li><Link to="contact">İletişim</Link></li>
        </ul>
    </div>
  )
}

export default Menu