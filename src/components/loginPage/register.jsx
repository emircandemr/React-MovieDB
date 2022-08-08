import { useFormik } from 'formik';
import React from 'react'
import Input from './input'
import { Link } from "react-router-dom";
import { inputSchemas } from './schemas';


function Register() {

  
    const {values , handleSubmit, handleBlur , handleChange , errors ,touched} = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:"",
            confirmpassword:"",
        },
        validationSchema:inputSchemas,
    })


    const inputs = [
        {
          id: 1,
          name: "username",
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
          value : values.username,
          errorMessage : errors.username,
          touched : touched.username
        },
        {
          id: 2,
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
          value : values.email,
          errorMessage : errors.email,
          touched : touched.email,
        },
        {
          id: 3,
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
          value : values.password,
          errorMessage : errors.password,
          touched : touched.password,        
        },
        {
          id: 4,
          name: "confirmpassword",
          label: "Confirm Password",
          type: "password",
          placeholder: "Enter your Confirm Password",
          value : values.confirmpassword,
          errorMessage : errors.confirmpassword,
          touched : touched.confirmpassword,            
        },
      ];


  return (
    <form onSubmit={handleSubmit} className='w-full h-full flex flex-col justify-center items-center '>
        <h1 className='text-4xl mb-10 font-Pacifico text-[#050e1d]' >Register</h1>
        {inputs.map((input) => (
          <Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange} />
        ))}
        <div className="flex items-start w-1/2 mt-3 mb-5">
            <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">I agree with terms conditions and privacy policy</label>
        </div>  
        <button className='bg-[#082a4e] text-white py-3 px-4 w-1/2 rounded-xl' type='submit'  >Create Account</button>
        <div className='mt-6 text-gray-600'> Already have an account ? <Link to="/home/login" className='text-[#050e1d] px-2 font-bold cursor-pointer'>Sign In</Link></div>
    </form>
  )
}

export default Register