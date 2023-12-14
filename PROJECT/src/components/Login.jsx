import React from 'react';
import '../css/login.css';
import { Reload1 } from './load';
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
    return(
        <div>
            <div className="container"> 
                    <h2 className="head">Login <Reload1/> </h2>
                     <div className="row">
                        <input type="email" required className="Email" placeholder="Email Address" />
                    </div>
                    <div className="row">
                        <input type="password" required className="Password" placeholder="Password" id="pass" />
                    </div>
                    <div>
                    <div className="check"><input type="checkbox"  className="checkb"onClick={ShowPS}/>Show Password</div>
                        <div><p>New User?<b style={{color: "blue"}}>Sign-Up</b></p></div>
                        <button  class="submit">Log In</button>
</div>
            </div>
        </div>
    )
}
export default Login;