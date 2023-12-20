import React from 'react'
// import { Link, Route, Routes } from 'react-router-dom'
import '../css/Navigation.css'
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
// import Login from './Login';
// import SignUp from './SignUp';

const Navigation = () => {
    const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div  className='NV'>
          <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
    >
        </ToggleButtonGroup>
       
        <Link to={'/Login'} style={{textDecoration:'none', color:'white'} }> <ToggleButton value="web" className='nav'>Login</ToggleButton> </Link>

        <Link to={'/SignUp'} style={{textDecoration:'none',color:'white'}}>  <ToggleButton value="ios" className='nav'>Sign-Up</ToggleButton></Link>
        
    </div>
  )
}

export default Navigation