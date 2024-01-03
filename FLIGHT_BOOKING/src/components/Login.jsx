import React from 'react';
import '../css/Login.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import {  Reload1 } from './Loadin';
import { Alert } from '@mui/material';

function ShowPS(){
    var x=document.getElementById("pass");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
} 
const Login=() =>{

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

 

    
    return(
        <div className='S'>
            <div className="container"> 
                    <h2 className="head">Login <Reload1/></h2>
                     <div className="row">
                        <input type="email"  className="Email" placeholder="Email Address"required />
                    </div>
                    <div className="row">
                        <input type="password"  className="Password" placeholder="Password" id="pass"   required/>
                    </div>
                    <div>
                    <div className="check"><div><input type="checkbox"  className="checkb"onClick={ShowPS}/></div><div>Show Password</div></div>
                    <Button variant="outlined" onClick={handleClick} className='submit'>
 Login
</Button>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Login Successfull!
  </Alert>
</Snackbar>
   
</div>
            </div>
        </div>
    )
}
export default Login;