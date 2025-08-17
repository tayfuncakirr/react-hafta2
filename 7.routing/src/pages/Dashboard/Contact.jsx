import React from 'react'
import { useFormik} from "formik";


function Contact() {
  const {handleSubmit,handleChange,values, isSubmitting} = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      email:"",
      message:"",
    },
    onSubmit:async (values, bag) => {
      await new Promise ((r)=> setTimeout(r, 1000))
      console.log(values);
      alert(JSON.stringify(values,null,2))
      bag.resetForm();
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
              disabled={isSubmitting}
              value={values.firstName}
              onChange={handleChange("firstName")}
             />
          </div>
          <div>
          <label htmlFor="lastName">Last Name</label>
            <input 
              id="lastName"
              name="lastName"
              placeholder='soyad'
              disabled={isSubmitting}
              value={values.lastName}
              onChange={handleChange("lastName")}
             />
          </div>
          <div>
          <label htmlFor="email">email</label>
            <input 
              id="email"
              name="email"
              placeholder='email'
              disabled={isSubmitting}
              value={values.email}
              onChange={handleChange("email")}
             />
          </div>
          <div>
          <label htmlFor="message">message</label>
            <textarea
              id="message"
              name="message"
              placeholder='Your Message...'
              disabled={isSubmitting}
              value={values.message}
              onChange={handleChange("message")}
             />
          </div>
          <button type='submit' disabled={isSubmitting}>Submit</button>
        </form>
    </div>
  )
}

export default Contact