import React from 'react'

function Input(props) {
    
    const {label ,errors, errorMessage, touched, ...inputProps} = props;


  return (
    <div className="w-full flex flex-col justify-center items-center">
        <label  className=" w-10/12 sm:w-1/2 mb-2 text-sm font-medium text-gray-400 ">{label}</label>
        <input {...inputProps} autocomplete="off" className={`bg-gray-50 border w-10/12 sm:w-1/2 auto text-gray-900 ${touched && errorMessage ? "border-red-500" : "border-gray-300"} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5`} />
        <span className='w-10/12 sm:w-1/2 mb-4 mt-1 px-1 text-red-800' >{ touched && errorMessage }</span>
       
    </div>
  )
}

export default Input