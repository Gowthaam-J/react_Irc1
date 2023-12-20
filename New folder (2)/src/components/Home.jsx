import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../css/Home.css'
import { Autocomplete, TextField } from '@mui/material';
import ColorToggleButton from './MUI';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Login', 'SignUp'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor:'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={'/Login'} >{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
    }
   
    const From= ['Mumbai,India', 'Bengaluru,India','New Delhi,India','Pune,India','Coimbatore,India','Bangkok,ThaiLand'];
    export  function RowRadioButtonsGroup() {
      return (
        <div>
        <div className='outer'>
        <div className='RadioBtn'>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Journey Type</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="One Way" />
            <FormControlLabel value="male" control={<Radio />} label="Two Way" />
            <FormControlLabel value="other" control={<Radio />} label="MultiCity" />
          </RadioGroup>
        </FormControl>
        </div>
        <div className='Trip'>
            <div className='items'>
              <b>From</b>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={From}
                              sx={{ width: 200 }}
                              renderInput={(params) => <TextField {...params} label="From" />}
                            />
            </div>
            <div className='items'>
              <b>To</b>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={From}
                              sx={{ width: 200 }}
                              renderInput={(params) => <TextField {...params}  label="To" />}
                            />
            </div>
            <div className='items'>
              <b>
                Departure
              </b>
              <br/>
              <input className='date' type='date'/>
                </div>
            <div className='items'>
              <b>Class</b>
              <br/>
              <ColorToggleButton/>
            </div>
        </div>
        <div className='FareType'>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Fare Types</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Regular Fare" />
            <FormControlLabel value="male" control={<Radio />} label="Student Fare" />
            <FormControlLabel value="other" control={<Radio />} label="Senior Citizen Fare" />
          </RadioGroup>
        </FormControl>
        </div>
        <div style={{marginTop:'-60px',marginLeft:'60%',fontSize:'x-large'}}>
          Top Searches :
          <b style={{color:'blue'}}>
          Mumbai➡️Goa
          </b>
          </div>
        </div>
          <div className='Inside'>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://cdn.vectorstock.com/i/1000x1000/15/01/gold-airplane-travel-logo-vector-14921501.webp' width={'40px'} height={'40px'}/><p><b>Vistara</b></p>
                  </div>
                  <div className='items11'>
                    <b>17:15
                    </b>
                   <p> New Delhi
                    </p>
                    
                  </div>
                  <div className='items11'>
                    02 h 10 m
                    <hr/>
                    <p>Non stop</p>
                  </div>
                  <div className='items11'>
                    <b>19:25</b>
                    <p>Mumbai</p>
                  </div>
                  <div className='items11'>
                    <b>₹ 9,749</b>
                  </div>
                </div>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://www.logo.wine/a/logo/IndiGo/IndiGo-Logo.wine.svg' width={'60px'} height={'60px'}/><p><b>IndiGo</b></p>
                  </div>
                  <div className='items11'>
                    <b>23:05
                    </b>
                   <p> New Delhi
                    </p>
                    
                  </div>
                  <div className='items11'>
                  02 h 20 m
                    <hr/>
                    <p>Non stop</p>
                  </div>
                  <div className='items11'>
                    <b>01:25
</b>
                    <p>Mumbai</p>
                  </div>
                  <div className='items11'>
                    <b>₹ 9,151</b>
                  </div>
                </div>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://www.logo.wine/a/logo/IndiGo/IndiGo-Logo.wine.svg' width={'60px'} height={'60px'}/><p><b>Akasa Air</b></p>
                  </div>
                  <div className='items11'>
                    <b>15:55
                    </b>
                   <p> New Delhi
                    </p>
                    
                  </div>
                  <div className='items11'>
                  02 h 25 m
                    <hr/>
                    <p>Non stop</p>
                  </div>
                  <div className='items11'>
                    <b>18:20
</b>
                    <p>Mumbai</p>
                  </div>
                  <div className='items11'>
                    <b>₹ 9,556</b>
                  </div>
                </div>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://w7.pngwing.com/pngs/288/810/png-transparent-spicejet-logo-thumbnail.png' width={'50px'} height={'50px'}/><p><b>Spice Jet</b></p>
                  </div>
                  <div className='items11'>
                    <b>22:55
                    </b>
                   <p> New Delhi
                    </p>
                    
                  </div>
                  <div className='items11'>
                  02 h 15 m
                    <hr/>
                    <p>Non stop</p>
                  </div>
                  <div className='items11'>
                    <b>01:10
</b>
                    <p>Mumbai</p>
                  </div>
                  <div className='items11'>
                    <b>₹ 10,288</b>
                  </div>
                </div>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://cdn.vectorstock.com/i/1000x1000/15/01/gold-airplane-travel-logo-vector-14921501.webp' width={'40px'} height={'40px'}/><p><b>Vistara</b></p>
                  </div>
                  <div className='items11'>
                    <b>17:45
                    </b>
                   <p> New Delhi
                    </p>
                    
                  </div>
                  <div className='items11'>
                    02 h 15 m
                    <hr/>
                    <p>Non stop</p>
                  </div>
                  <div className='items11'>
                    <b>20:25</b>
                    <p>Mumbai</p>
                  </div>
                  <div className='items11'>
                    <b>₹ 10, 745</b>
                  </div>
                </div>
          </div>
          <div>
            
          </div>
        </div>
      );
    }

