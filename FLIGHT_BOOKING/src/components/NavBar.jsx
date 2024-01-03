import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import { RowRadioButtonsGroup } from './Home'
import HOC from './HOC'
import '../css/NavBar.css'
import Login from './Login'
  const HOComponent1=HOC(Login)
        const HOComponent2=HOC(SignUp)
        const HOComponent3=HOC(RowRadioButtonsGroup)
const NavBar = () => {
  return (
    <div >

  <div className='NabVar'>
        <div className='itemhead'>
          Just Fly
        </div>
         <div className='item'>
        <Link to={'/'}><button className='home'>Home</button></Link>
        </div>
        <div className='item'> 
        <Link to={'/Login'}><button className='home'>Login</button></Link>
        <Link to={'/SignUp'}><button className='home'>SignUp</button></Link>
        </div>
        </div>
        <Routes>
        <Route path='/' element={<HOComponent3/>}/>
        <Route path='/Login' element={<HOComponent1/>}/>
        <Route path='/SignUp' element={<HOComponent2/>}/>
  </Routes>
    </div>
  )
}

export default NavBar