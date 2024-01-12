import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err= useRouteError();
    console.log(err);
 
    return (
        
    <div className='err-container'>
     <div className='err-ct'>
            <h3>{err.status}:{err.statusText}</h3>
            <h3>{err.data}</h3>
    </div>
      <div className='err-c'>
      <div><img className='errImage' src='https://tse3.mm.bing.net/th?id=OIP.hw68_qS-F5pc6Ys1c48zLAHaHs&pid=Api&P=0&h=180'></img></div>
        <div className='err-text'>
            <h1>Oops!!!!</h1>
        <h2>Something went wrong</h2>
       
        </div>
        </div>  
      
    </div>
  )
}

export default Error
