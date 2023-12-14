import React from "react";
import Lottie from "react-lottie";
import Smiley from '../Login2.json'
import Login from '../Loggin.json'
export function Reload(){
    const defaultOptions ={
        loop:true,
        autoplay:true,
        animationData : Smiley,
        renderSettings:{
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <div>
                  <Lottie options={defaultOptions} width={100} height={100}/>

        </div>
    )
    
}
export function Reload1(){
  const defaultOptions1 ={
    loop:true,
    autoplay:true,
    animationData : Login,
    renderSettings:{
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return(
    <div>
              <Lottie options={defaultOptions1} width={100} height={100}/>

    </div>
)

}