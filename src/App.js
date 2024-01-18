
import './App.css';
import Hero from './component/Hero';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './component/Infodisplay';
import Mapcom from './component/Map'
function App() {
  const [ip, setIp] = useState(''); 
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null
  });
  const [show, setShow] = useState(false)
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');
const [lat, setlat] = useState('');
const [lon, setlong] = useState('');
const [city, setcity] = useState('');
const [region, setregion] = useState('');

const [userIp, setUserIp] = useState(null);
  // const [searchIp, setSearchIp] = useState(async (query) => {
  //   const {data} = await axios.get('https://geo.ipify.org/api/v2/country,city?apiKey=at_bh2S1lLDBwCWlsKksLEh8fHLjoDh2', {
  //     params: {ipAddress: query} 
  //   });
    
  //   console.log(data)
  //   return data;
  // });

const API = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_bh2S1lLDBwCWlsKksLEh8fHLjoDh2';

  const fetchData = async (userInput) => {

    let inputType = "";
    if (typeof userInput === "string" && userInput.includes("@")) {
      // Input is an email address
      inputType = "email";
    } else if (typeof userInput === "string" && userInput.includes(".")) {
      // Input is a domain name
      inputType = "domain";
    } else {
      // Input is an IP address
      inputType = "ipAddress";
    }



    let validInput = false;



    switch (inputType) {
      case "email":

        let emailRegex = /^\w+@\w+\.\w+$/;
        validInput = emailRegex.test(userInput);
        break;
      case "domain":

        let domainRegex = /^\w+\.\w+$/;
        validInput = domainRegex.test(userInput);
        break;
      case "ipAddress":

        let ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
        validInput = ipRegex.test(userInput);
        break;
      default:

        validInput = false;
    }
    



 

  if (validInput) {
    const {data} = await axios.get(API, {params: { [inputType]: userInput }});
    console.log(data)
    setIp(data.ip);
    setLocation(data.location);
    setIsp(data.isp);
    setlat(data.location.lat);
    setlong(data.location.lng);
    setcity(data.location.city)
    setregion(data.location.region)
  } else {

    const {data} = await axios.get(API, {params: { ipAddress: userInput }});
    setIp(data.ip);
    setLocation(data.location);
    setIsp(data.isp);
    setlat(data.location.lat);
    setlong(data.location.lng);
    setcity(data.location.city)
    setregion(data.location.region)
    console.error("Invalid input");

  }

  }



   

  useEffect(() => {


    const getUserIp = async () => {
      const response = await axios.get('https://api.ipify.org?format=json');

      return response.data.ip;
    }
    getUserIp().then(userIp => {
      fetchData(userIp);
    });

    
  }, []);

  const handleSearch = (query) => {

    fetchData(query);
  };
  
  return (
    <div className="App">
      <Hero onSearch={(query) => handleSearch(query)} />

      <Display
     location={location}
     ip={ip}
     isp={isp}
     region={region}
     
     />
    <Mapcom lat={lat}
    lng={lon}
    ip={ip}
    isp={isp}
    city={city}
    />
    </div>
  );
}

export default App;
