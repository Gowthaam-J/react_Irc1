import './css/App.css';
import Login from './components/Login';
import { useState } from 'react';
import Sign_Up from './components/Sign_up';
function App() {
      const [L_S,setL_S]=useState(false);
      return(
          <div>
              <button onClick={() =>setL_S((prev)=>!prev)}>Login/Sign_Up</button>
              {L_S ?<Login/> : <Sign_Up/>}
          </div>
      )
      }

export default App;