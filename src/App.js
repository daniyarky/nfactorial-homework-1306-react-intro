import React  from 'react';
import './App.css';
import logo from "./img/logo.jpeg";
// import {useState} from 'react';
import { format } from 'date-fns';



function App() {
  const currentDate=new Date();
   const dadate=format(currentDate, 'MM.dd.yyyy hh:mm')
  
  return(
    <> <header > <img src={logo} /> 
       { dadate }
       {console.log('qweqwe')}
      </header>
    <div className="App"> 
        
        <div className="HEY qq"><p>HEY</p> </div>


        <div className="LETS qq"><p>LET'S </p></div>


        <div className="GIVE qq"><p>GIVE</p> </div>


        <div className="ALL qq"><p>ALL</p> </div>


        <div className="YOUCAN qq"><p>YOU CAN</p></div>

      </div>
    </>
    
  );
}

export default App;
