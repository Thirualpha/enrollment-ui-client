import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import EnrollComponent from './Components/routes/EnrollComponent/EnrollComponent'
import LoginComponent from './Components/routes/loginComponent/loginComponent'




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className='container'>
      <div >
          <Link to = {'/signup'}>
               saveetha | Enrollment
          </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to={'/login'}>LOGIN</Link>
          </li>
          <li>
            <Link to={'/enroll'}>ENROLL</Link>
          </li>
        </ul>
      </div>
    </div>
    
    
    <div>
      <div>
        <Routes>
                      
        <Route exact path='/login' element={<LoginComponent/>}/>
           <Route exact path='/' element={<EnrollComponent/>}/>
          <Route exact path='/enroll' element={<EnrollComponent/>}/>
       </Routes>
      </div>
    </div>
  
    
    </Router>
  
  )
}

export default App
