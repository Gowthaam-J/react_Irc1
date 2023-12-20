import React from 'react'
import Loading from '../Loading.json'
import Lottie from 'react-lottie';
const HOC = (WrappedComponent) => {
    const defaultOptions ={
        loop:true,
        autoplay:true,
        animationData : Loading,
        renderSettings:{
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return  class HOC extends React.Component{
         state={
            isLoading:true
        }
        componentDidMount(){
            setTimeout(()=>{
                this.setState((prev)=>false)
            },2000)
        }
        render(){
            const {isLoading}=this.state;
            return(
                isLoading ? (      <Lottie options={defaultOptions} width={400} height={400}/>
                ):
                (<WrappedComponent {...this.props}/>)
            )

        }
  }

}

export default HOC