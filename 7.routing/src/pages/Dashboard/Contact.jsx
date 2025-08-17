import React from 'react'
import { useFormik} from "formik";
import {object, string} from "yup"


function Contact() {
  const contactValidations = object({
    firstName: string().required("İsim gerekli"),
    lastName: string().required("Soyisim gerekli"),
    email: string().email("Geçerli bir email girin").required("Email gerekli"),
    message: string().min(5, "Mesaj en az 5 karakter olmalı").required("Mesaj gerekli"),
  });

  const {handleSubmit,handleChange,handleBlur, values,errors, touched, isSubmitting} = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      email:"",
      message:"",
    },
    validationSchema: contactValidations,
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
              onBlur={handleBlur("firstName")}
             />
             {
              errors.firstName && touched.firstName && <div className='error'>{errors.firstName}</div>
             }
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
              onBlur={handleBlur("lastName")}
             />
             {
              errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>
             }
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
              onBlur={handleBlur("email")}
             />
             {
              errors.email && touched.email && <div className="error">{errors.email}</div>
             }
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
              onBlur={handleBlur("message")}
             />
             {
              errors.message && touched.message && <div className="error">{errors.message}</div>
             }
          </div>
          <button type='submit' disabled={isSubmitting}>Submit</button>
        </form>
    </div>
  )
}

export default Contact