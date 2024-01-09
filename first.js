import React from "react";
import ReactDOM from "react-dom/client"

//React Element
const heading = (
<h1 id ="heading1">hello i am react Element</h1>)


//functional component
const Jsx= () => (
   <h1 id ="heading">This is jsx syntax</h1>
)

const HeadingComponent= () => (
  <div id="container">
    {heading}                          {/* adding Elementin functional component */}
      <Jsx/>                            {/*adding functional component in functional component*/}
        <Jsx></Jsx>                     {/*adding functional component in functional component*/}
          {Jsx()}                      { /*adding functional component in functional component*/}
    <h1 id ="heading">This is functional component</h1>
  </div>)


 const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
