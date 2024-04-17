import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import "./styles.css"

const Login = ({setUserId}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');

  const navigate = useNavigate()

  const onButtonClick = async (e) => {
    // You'll update this function later...
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:3000/login",{email,password});
        setUserId(res?.data);
        navigate('/');
    } catch (error) {
        setError(error?.response?.data);

    }
  }

  return (
    <form className={'mainContainer'} onSubmit={onButtonClick}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          type = "email"
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
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
          onChange={(ev) => setPassword(ev.target.value)}
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
        <input type="submit" value="Sign in" />
      </div>
      <br />
      <span>Don't have an account? <Link to={"/register"}>Register</Link> here</span>

    </form>
  )
}

export default Login