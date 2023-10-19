import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EnrollComponent = () => {

    const [regno,setRegno] = useState('')
    const [firstname,setFirstname] =useState('')
    const [lastname,setLastname] = useState('')
    const [email , setEmail] = useState('')
    const [ password,setPassword] = useState('')

    const regNoHandler = (event) =>{
        setRegno(event.target.value)
    }
  
    const firstNameHandler = (event) =>{
      setFirstname(event.target.value)
    }
  
    const lastNameHandler = (event) =>{
      setLastname(event.target.value)
    }
  
    const emailHandler = (event) =>{
      setEmail(event.target.value)
    }
  
    const passwordHandler = (event) =>{
      setPassword(event.target.value)
    }
  
    const formSubmitHandler = (event) =>{
      event.preventDefault()
      console.log(regno,firstname,lastname,email,password)


      axios
      .post(`http://localhost:3500/api/v1/enroll`,
      {regno:regno,
        firstname: firstname,
        lastname:lastname,
        email : email,
        password : password})
      .then(response=> console.log(response.data))
      .catch(response=>console.log(error.response.data))
    }
  
  return (
    // <div>EnrollComponent</div>
    <React.Fragment>
      <form onSubmit={formSubmitHandler}>
        <h1>ENROLL</h1>

        <div>
          <label>Register Number</label>
          <input type ='text'
          placeholder = 'Enter your Registernumber'
          value = {regno}
          onChange ={regNoHandler}
          required/>
        </div>

        <div>
          <label>First Name</label>
          <input type ='text'
          placeholder = 'Enter your firstname'
          value = {firstname}
          onChange ={firstNameHandler}
          required/>
        </div>

        <div>

          <label>Last Name</label>
          <input type = 'text'
          placeholder='Enter your Lastname'
          value={lastname}
          onChange={lastNameHandler}
          required
          />
        </div>
        <div>

          <label>E-Mail</label>
            <input type = 'email'
          placeholder='Enter your email address'
          value={email}
          onChange={emailHandler}
          required
          />
        </div>
        <div>

          <label>Password</label>
          <input type = 'text'
          placeholder='Enter your password'
          value={password}
          onChange={passwordHandler}
          required
          />
          </div>


          <div>
            <button type='submit'>Submit</button>
          </div>

          <p>Already Registered ?<Link to={'/login'}>Sign in!!</Link>    </p>



      </form>

    </React.Fragment>
    

  )
}

export default EnrollComponent

