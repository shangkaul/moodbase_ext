import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

export default function Content()
{
    function get_date()
  {
    var dt=new Date();
    var clock=dt.toLocaleTimeString(navigator.language, {hour: "2-digit", minute:"2-digit"});
    var cal=dt.toLocaleDateString()

    return {"date":cal,"time":clock};
  }
  
  const [curr_time,setTime]=useState(get_date().time); 
  const [curr_date,setDate]=useState(get_date().date); 
  const [name,setName] = useState(localStorage.getItem("mood_name"));

  let focus_obj=localStorage.getItem("mood_main_focus") == undefined? {"text":"My main focus for the day is...","checked":false}: JSON.parse(localStorage.getItem("mood_main_focus"));
  const [focus,setFocus] = useState(focus_obj);
  


  useEffect(()=>{
    var time_timer = setInterval(()=>setTime(get_date().time), 1000 )
    var date_timer = setInterval(()=>setDate(get_date().date),1000)
        return function cleanup() {
            clearInterval(time_timer);
            clearInterval(date_timer);
        }

  },[]);

  var getSal = () =>  {
    if(curr_time>"16:00" || curr_time < "05:00")
      return "Good Evening";
    else if(curr_time>"12:00")
      return "Good Afternoon";
    else
      return "Good Morning";

  }


  function handleChange(e)
  {
    let obj=JSON.parse(localStorage.getItem("mood_main_focus"));
    localStorage.setItem("mood_main_focus",JSON.stringify({...obj,"text":e.target.value}));
  }

  function check()
  {
    localStorage.setItem("mood_main_focus",JSON.stringify({...focus,"checked":!focus.checked}));
    setFocus(JSON.parse(localStorage.getItem("mood_main_focus")));

  }



return(

<div className="content no-select"> 
        <div className="time">{curr_time}</div>
        {/* <div className="date">{curr_date}</div> */}
        <div className="welcome_msg">{getSal()}, {name}.</div>
        <div className="focus">
        
        <input className="focus_check" name="lol" type="checkbox" onChange={check} checked={focus.checked}/>
        <input className="focus_input" name="lol" defaultValue={focus.text} onChange={e=>handleChange(e)}/>
        </div>
        </div>

)
}
