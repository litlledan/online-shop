import React, {useState} from 'react'
import "../Register/Register.css"
import registerImage from "../../../assets/Image/cartPhone.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, setUser } from '../../../redux/user/userSlice'

function LoginCom() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const token = useSelector((state) => state.user.token)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value,
        })
    }

    const handleLogin = async () => {
        try {
            const {data} = await axios.post(" https://api.escuelajs.co/api/v1/auth/login", userData)

            dispatch(setToken(data.access_token))

            const userInfo = await axios.get(" https://api.escuelajs.co/api/v1/auth/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch(setUser(userInfo.data))
            navigate("/account")

        }catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='register'>
        <img src={registerImage} alt='cart' />
        <div className='register-content'>
            <div className='register-header'>
                <h4>Log in to Exclusive</h4>
                <p>Enter your details below</p>
            </div>
            <div className='register-form'>
                <input 
                    name="email" 
                    value={userData.email}
                    type='email' 
                    placeholder='Email'
                    onChange={handleChange}
                />
                <input 
                    type='password' 
                    placeholder='Password'
                    name='password'
                    value={userData.password}
                    onChange={handleChange}
                />
                <div className='login-buttons'>
                    <button onClick={() => handleLogin()} className='login'>
                        Login
                    </button>
                    <Link to="/">Forget Password?</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginCom