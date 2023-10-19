
import React, { useState } from 'react'

import { Link } from 'react-router-dom'


const LoginComponent = () => {
    const [regno,setRegno] = useState('')
  const [ password,setPassword] = useState('')

  const regnoHandler = (event) =>{
    setRegno(event.target.value)
  }

  const passwordHandler = (event) =>{
    setPassword(event.target.value)
  }

const submitHandler = (event) =>{
        event.preventDefault()
        console.log(regno, password)
}
  return (
    <React.Fragment>
    <h1>Login</h1>
    <form onSubmit={submitHandler}>

    <div className='login-class'>
          <label>Register number</label>
          <input
              type='text'
             
              placeholder='Enter your email address'
              value={regno}
              onChange={regnoHandler}
              required
          />
      </div>

      <div className='login-class'>
        <label>Password</label>
        <input type='password'
        
        placeholder='Enter your Password'
        value={password}
        onChange={passwordHandler}
        required />

      </div>

         
       <div className='mb-3'>
        <div>
          <input 
            type='checkbox'
            
            id='customCheck1'
            />

         
          <label  htmlFor='customCheck1'>
            Remember me?
          </label>
        </div>
        <div>
          <button type='submit'  >Submit</button>
        </div>
       
        <p >
          Forgot <a href='#'>Password?</a>
        </p>

        <p >
          New User? <Link to='/signup'>Register here!</Link>
        </p>

      </div>




    </form>


     
  </React.Fragment>
      )
}


export default LoginComponent

