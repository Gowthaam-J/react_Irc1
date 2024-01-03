import React from 'react';
import '../css/Login.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Reload } from './Loadin';
function ShowPS(){
    var x=document.getElementById("pass");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
} 
const SignUp=() =>{

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

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

    
    return(
        <div className='S'>
            <form >            <div className="container"> 
                    <h2 className="head">SignUp <Reload/></h2>
                     <div className="row">
                        <input type="email" required className="Email" placeholder="FirstName" />
                    </div>
                     <div className="row">
                        <input type="email" required className="Email" placeholder="Last Name" />
                    </div>
                     <div className="row">
                        <input type="email" required className="Email" placeholder="Email Address" />
                    </div>
                    <div className="row">
                        <input type="password" required className="Password" placeholder="Password" id="pass" />
                    </div>
                    <div className="row">
                        <input type="password" required className="Password" placeholder="Confirm Password" id="pass" />
                    </div>
                    <div>
                    <div className="check"><div><input type="checkbox"  className="checkb"onClick={ShowPS}/></div><div>Show Password</div></div>
                       <Button onClick={handleClick} className='submit' style={{height:'50px',width:'350px'}}>SignUp</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Signup SuccesFull!"
        action={action}
      />
   
</div>
            </div>
            </form>
        </div>
    )
}
export default SignUp;