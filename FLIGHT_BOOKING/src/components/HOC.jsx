import React from 'react'
import Loading from '../Loading1.json'
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
                this.setState({isLoading:false})
            },1500)
        }
        render(){
            const {isLoading}=this.state;
            return(
                isLoading ? (      <Lottie options={defaultOptions} width={500} height={500}/>
                ):
                (<WrappedComponent {...this.props}/>)
            )

        }
  }

}

export default HOC