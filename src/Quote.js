import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

export default function Quote()
{
  const [quote,setQuote] = useState("A doctor a day keeps the apple away!")

  useEffect(()=>{
  axios
  .get("https://type.fit/api/quotes")
  .then((resp)=> {
  let ind=Math.floor((Math.random() * 1640) + 1);
  setQuote(resp.data[ind].text);
})
  .catch(err_msg=>{console.log(err_msg);
  });
},[]);

return(<div className="Quote">{quote}</div>)
}
