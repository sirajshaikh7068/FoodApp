import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count:0,
            count2:2
        }
        // console.log("child constructor")
    }
    componentDidMount(){
      // console.log ("child component did mount")
    }

    render(){

        const{name,location}=this.props;
        const{count,count2}=this.state;

        return(
          <div>
              <h1>name-{name}</h1>
             
              <h1>count={count}</h1>
              <button onClick={()=>{
                    this.setState({count:this.state.count+1});

              }}>
                increase count
              </button>
              <h1>count2={count2}</h1>

            <h1>location-{location}</h1>
          </div>
        )
              // console.log("child render")
    }

}

export default UserClass;