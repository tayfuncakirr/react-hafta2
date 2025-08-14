import React from 'react'
import PropTypes from "prop-types" //gerekli paket kurulup import ediyoruz

//Proptypes girilen değerin türünü kontrol altına almamızı sağlar.

function PropTypeUser({name, surname,age}) {
  return (
    <div>
        <h3>PropTypeUser </h3>
        <div>AD: {name}</div>
        <div>SOYAD: {surname}</div>
        <div>YAS: {age}</div>
    </div>
  )
}
PropTypeUser.propTypes = {
    name : PropTypes.string.isRequired,
    surname : PropTypes.string,
    age : PropTypes.number
};
export default PropTypeUser