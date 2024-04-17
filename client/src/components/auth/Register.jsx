import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./styles.css"
import axios from 'axios'
import { baseURL } from '../../../credentials'

const Register = ({setUserId}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');
  const [error,setError] = useState('');

  const navigate = useNavigate()

  const onButtonClick = async(e) => {
    // You'll update this function later...
    e.preventDefault();
    try {
        setError('');
        const res = await axios.post(`${baseURL}/register`,{name,email,password});
        // localStorage.setItem("userId",res?.data);
      setUserId(res?.data);
        navigate('/');
    } catch (error) {
        console.log(error);
        setError(error?.response?.data);
    }
  }

  return (
    <form className={'mainContainer'} onSubmit={onButtonClick}>
      <div className={'titleContainer'}>
        <div>Register</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={name}
          type = "text"
          placeholder="Enter your name here"
          onChange={(ev) => {setName(ev.target.value);setError('');}}
          className={'inputBox'}
          required
        />
        {/* <label className="errorLabel">{emailError}</label> */}
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          type = "email"
          placeholder="Enter your email here"
          onChange={(ev) => {setEmail(ev.target.value);setError('');}}
          className={'inputBox'}
          required
        />
        {/* <label className="errorLabel">{emailError}</label> */}
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          type='password'
          placeholder="Enter your password here"
          onChange={(ev) => {setPassword(ev.target.value);setError('');}}
          className={'inputBox'}
          required
        />
        {/* <label className="errorLabel">{passwordError}</label> */}
      </div>
      <br />
      <span style={{color:"red"}}>{error}</span>
      <br />
      <div className={'inputContainer'}>
        {/* <button type='submit'>Sign in</button> */}
        <input type="submit" value="Sign up" />
      </div>
      <br />
      <span>Already have an account? <Link to={"/login"}>Login</Link> here</span>
    </form>
  )
}

export default Register