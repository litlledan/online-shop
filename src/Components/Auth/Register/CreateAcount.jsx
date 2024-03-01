import React,{useState, useEffect} from 'react'
import "./Register.css"
import phone from "../../../assets/Image/cartPhone.png"
import { Link, useNavigate } from 'react-router-dom'
import googleIcon from "../../../assets/svg/google.svg"

import axios from 'axios'


function CreateAcount() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    avatar: "https://i.imgur.com/5mPmJYO.jpeg",
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name, value)
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async () => {

    try {
        const response = await axios.post("https://api.escuelajs.co/api/v1/users/", user)

        console.log(response)
        navigate("/login")
        
    } catch(error) {

    }
  }

  return (
    <div className='register'>
        <img src={phone} alt='cart' />
        <div className='register-content'>
          <div className='register-header'>
            <h4>Create an account</h4>
            <p>Enter your details below</p>
          </div>
          <div className='register-form'>
            <input 
              onChange={handleChange} 
              name='name' 
              value={user.name} 
              type='text' 
              placeholder='Name'
            />
            <input 
              onChange={handleChange} 
              name='email' 
              value={user.email} 
              type='email' 
              placeholder='Email'
            />
            <input 
              onChange={handleChange} 
              name='password' 
              value={user.password} 
              type='password' 
              placeholder='Password'
            />

            <div className='button-container'>
              <button onClick={()=> handleSubmit()} className='create-account'>
                Create Account
              </button>
              <button className='create-account-google'>
                  <img src={googleIcon} alt='icon'/>
                  <p>Sign Up with Google</p>
              </button>
              <div className='login-link'>
                <p>Already have account?</p>
                <Link to='/login'> Login</Link>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateAcount