import { useState } from "react";
import "./App.css";

export default function Onboard()
{
  String.prototype.initCap = function () {
    return this.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
       return m.toUpperCase();
    });
 };

const[name,setName]=useState("");
  function handleChange(e){


    localStorage.setItem("mood_name",e.target.value.initCap());
    setName(e.target.value);
    
  }

return(

<div className="Onboard no-select"> 
        <div className="onboard-content">
          <div className="onboard_msg">Welcome to the first day of the rest of your life!</div>
          <div className="onboard_input">
          <input placeholder="Enter your name here." onChange={e=>handleChange(e)}/>
          </div>

          <button onClick={() => name.length>1?window.location.reload(false):alert("Enter a name with atleast 2 letters.")} className="btn btn-white">Continue</button>
          </div>

        </div>

)
}
