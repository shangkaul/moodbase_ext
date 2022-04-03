import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

export default function Weather()
{
  const [weather,setWeather] = useState({"temp":"","icon":"","condition":"","location":""});

  useEffect(()=>{

    axios
    .get("https://geolocation-db.com/json/")
    .then((res)=> {
      // console.log(res.data);
      // setLoc({"city":res.data.city,"lat":res.data.latitude,"long":res.data.longitude})
      var weather_uri="http://api.weatherapi.com/v1/current.json?key=062a8a36a82146db805140312222703&q="+res.data.city;
      axios
      .get(weather_uri)
      .then((resp)=> {
      // console.log(resp.data);
      setWeather({"temp":Math.round(resp.data.current.temp_c),"icon":resp.data.current.condition.icon,"condition":resp.data.current.condition.text,"location":resp.data.location.name});      
    })
      .catch(err_msg=>{console.log(err_msg);
      });
    })
    .catch(err=>{console.log(err);
});
},[]);

return(<div className="Weather no-select">
<div className="weather_temp">
  <img src={"http://"+weather.icon.slice(2,weather.icon.length)} alt={weather.condition}/>
  <div className="temp">{weather.temp}&#8451;</div>
</div>
<div className="location"><i className="fa fa-map-marker"></i> {weather.location}</div>
</div>)
}
