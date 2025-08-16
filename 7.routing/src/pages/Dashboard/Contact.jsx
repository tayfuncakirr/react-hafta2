import React from 'react'
import { useFormik} from "formik";


function Contact() {
  const {handleSubmit,handleChange, isSubmitting} = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      email:"",
      message:"",
    },
    onSubmit: (values, bag) => {
      console.log(values);
      
    },
  });
  return (
    <div>
        <h2>İletişim</h2>

        <form onSubmit={handleSubmit} className='form'>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input 
              id="firstName"
              name="firstName"
              placeholder='ad'
              onChange={handleChange("firstName")}
             />
          </div>
          <div>
          <label htmlFor="lastName">Last Name</label>
            <input 
              id="lastName"
              name="lastName"
              placeholder='soyad'
              onChange={handleChange("lastName")}
             />
          </div>
          <div>
          <label htmlFor="email">email</label>
            <input 
              id="email"
              name="email"
              placeholder='email'
              onChange={handleChange("email")}
             />
          </div>
          <div>
          <label htmlFor="message">message</label>
            <textarea
              id="message"
              name="message"
              placeholder='Your Message...'
              onChange={handleChange("message")}
             />
          </div>
          <button type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default Contact