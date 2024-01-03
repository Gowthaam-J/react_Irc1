import * as React from 'react';
import '../css/Home.css'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web" >Economy/Premium Economy</ToggleButton>
      <ToggleButton value="android" >Premium Economy</ToggleButton>
      <ToggleButton value="ios" >Business</ToggleButton>
    </ToggleButtonGroup>
  );
}


export  function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" color="success" onClick={handleOpen}>Book</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
