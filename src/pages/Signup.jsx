import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/user/create', formData)
      console.log('Signup successful:', response.data)
      // Handle successful signup (e.g., redirect or show success message)
    } catch (error) {
      console.error('Signup failed:', error)
      // Handle error (e.g., show error message)
    }
  }

  return (
    <> 
    <form onSubmit={handleSubmit} className='mt-10 flex flex-col items-center justify-center gap-4 p-4'>
      <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder='Enter your name' 
        className='w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
      />
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder='Enter your email' 
        className='w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
      />
      <input 
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder='Enter your password' 
        className='w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none'
      />
      <button 
        type="submit"
        className='w-full max-w-md rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none'
      >
        Sign up
      </button>
    </form>
    </>
  )
}

export default Signup
