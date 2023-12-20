import React from 'react'
import '../css/Login.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Snackbar } from '@mui/material'
const Login = () => {
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
    
  return (
    <div>
        <div className="container">
            <div className='div1'>
                <input placeholder='Email Address' className='input' />
                <input placeholder='Paasword' className='input'/>
                <Button onClick={handleClick} className='input' style={{backgroundColor:'blue',color:'white',fontSize:'20px'}}>Login</Button>
<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Login Successfully!"
  action={action}
/>
                 </div>
            <div className='div2'></div>
        </div>
    </div>
  )
}

export default Login