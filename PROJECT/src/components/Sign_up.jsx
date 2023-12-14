import React from 'react';
import '../css/login.css';
import {Reload} from "./load";
function ShowPS(){
    var x=document.getElementById("pass");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}
const Sign_Up=() =>{
    return(
        <div>
            <div className="container"> 
                    <h2 className="head">Sign-Up <Reload/></h2>
                    <div className="row">
                        <input type="text" className="FName" placeholder="First Name" required />
                    </div>
                    <div className="row">
                        <input type="text" className="FName" placeholder="Last Name" required/>
                    </div>
                    <div className="row">
                        <input type="email" className="Email" placeholder="Email Address" required/>
                    </div>
                    <div className="row">
                        <input type="password" className="Password" placeholder="Password" id="pass" required/>
                    </div>
                    <div className="row">
                        <input type="password" className="CPassword" placeholder="Confirm Password"/>
                    </div>
                    <div className="check"><input type="checkbox"  className="checkb"onClick={ShowPS}/>Show Password</div>
                    <div>
                        <button  class="submit" >Sign Up</button>
                    </div>
            </div>
        </div>
    )
}
export default Sign_Up;