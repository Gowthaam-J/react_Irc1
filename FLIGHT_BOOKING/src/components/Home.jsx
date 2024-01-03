import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../css/Home.css'
import { Autocomplete, TextField } from '@mui/material';
import {ColorToggleButton ,SimpleBackdrop}from './MUI';
    const From= ['Mumbai,India', 'Bengaluru,India','New Delhi,India','Pune,India','Coimbatore,India','Bangkok,ThaiLand'];
    export  function RowRadioButtonsGroup() {
      return (
        
        <div className='Row'>
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
        <div style={{marginTop:'-80px',marginLeft:'60%',fontSize:'x-large'}}>
          Top Searches :
          <p>
          <b style={{color:'blue'}}>
          Mumbai➡️Goa
          </b>
          </p>
          </div>
        </div>
          <div className='Inside'>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://cdn.vectorstock.com/i/1000x1000/15/01/gold-airplane-travel-logo-vector-14921501.webp' alt='' width={'40px'} height={'40px'}/><p><b>Vistara</b></p>
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
                  <div className='items11'>
                   <SimpleBackdrop/>
                  </div>
                </div>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://www.logo.wine/a/logo/IndiGo/IndiGo-Logo.wine.svg' alt='' width={'60px'} height={'60px'}/><p><b>IndiGo</b></p>
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
                  <div className='items11'>
                  <SimpleBackdrop/>
                  </div>
                </div>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://www.logo.wine/a/logo/IndiGo/IndiGo-Logo.wine.svg' alt='' width={'60px'} height={'60px'}/><p><b>Akasa Air</b></p>
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
                  <div className='items11'>
                  <SimpleBackdrop/>
                  </div>
                </div>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://w7.pngwing.com/pngs/288/810/png-transparent-spicejet-logo-thumbnail.png' alt='' width={'50px'} height={'50px'}/><p><b>Spice Jet</b></p>
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
                  <div className='items11'>
                 <SimpleBackdrop/>
                  </div>
                </div>
                <div className='items1'>
                  <div className='items11'> 
                    <img src='https://cdn.vectorstock.com/i/1000x1000/15/01/gold-airplane-travel-logo-vector-14921501.webp' alt='' width={'40px'} height={'40px'}/><p><b>Vistara</b></p>
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
                  <div className='items11'>
                 <SimpleBackdrop/>
                  </div>
                </div>
          </div>
          <div>
            
          </div>
        </div>
      );
    }

