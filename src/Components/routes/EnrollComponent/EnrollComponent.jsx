import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EnrollComponent = () => {

    const [firstname,setFirstname] =useState('')
    const [lastname,setLastname] = useState('')
    const [email , setEmail] = useState('')
    const [ password,setPassword] = useState('')
  
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
      console.log(firstname,lastname,email,password)


      axios
      .post(`http://localhost:3500/api/v1/signup`,
      {firstname: firstname,
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
        <h1>SIGN UP</h1>

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




// import axios from 'axios'
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Signinroutecomponent = () => {
 
   
//   }


//   return (
//       )
// }

// export default Signinroutecomponent