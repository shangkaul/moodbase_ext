import { useEffect, useState } from "react";
import  Quote  from "./Quote"
import  Cred  from "./Cred"
import  Todo  from "./Todo"
import  Onboard  from "./Onboard"
import "./App.css";
import Weather from "./Weather";
import Content from "./Content";

function App() {

const onboard=()=> localStorage.getItem("mood_name")== undefined? true : false



  return (
    <div className="App">
        <img className="bg" alt="sample-img" src="https://picsum.photos/1920/1080" /> 
        <div className="overlay"></div>
        {onboard() ? (<Onboard/>) : (<Content/>)}


<Weather/>
<Todo/>
<Quote/>
<Cred/>


    </div>
  );
}

export default App;
