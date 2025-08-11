import React, { Component } from 'react'

 class ClassComponent extends Component {
  render() {
    return (
      <div>ClassComponent</div> 
      /*Class componentler de function componentler gibi çalışır ancak class yapısı kullanılır. 
      Class componentler state ve lifecycle metodlarını kullanabilir.*/
      /*Class componentler extends Component ile oluşturulur ve render metodu ile döndürülür.*/
      /*Class componentler de PascalCase standardında isimlendirilir ve main.jsx içinde <ClassComponent/> şeklinde çağırılır.*/
    )
  }
}
export default ClassComponent // Class componentler de main.jsx de çağırmamız yani component olarak yazmamız gerekir bu yüzden kullanılır.