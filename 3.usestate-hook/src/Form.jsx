import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState ("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("");
  return (
    <div>
        <h3>Form</h3>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='isim giriniz'/>
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='soyisim giriniz'/>
        <div>İsim:{name} soyisim:{surname}</div>
        <div>
            <select value={gender} onChange={(e)=> setGender(e.target.value)}>
                <option value="Erkek">Erkek</option>
                <option value="Kadın">Kadın</option>
            </select>
            <div>Cinsiyet: {gender}</div>
        </div>
        </div>
  )
}

export default Form