import React from 'react'
import UserClass from './UserClass';
import React from 'react';


  class About extends React.Component{
    constructor(props){
      super(props);
      // console.log("parent constructor")
      this.State={
        userInfo:{
         login:"dummy",
         avatar_url:"hhh"
        }
      }
  }
  

async componentDidMount(){
  
  const data =await fetch("https://api.github.com/users/sirajshaikh7068");
  const json= await data.json();
   console.log(json)
  // console.log("parent component did mount")
  this.setState({
    userInfo:json,
  })
}


  render(){
    console.log(this.State)
    return (
      <div>
      <h1>{this.State.userInfo.login}</h1>
      <img src='https://avatars.githubusercontent.com/u/141167935?v=4'></img>
   
    
    <div>About</div>
      </div>
  );
 
}
  }

export default About;