import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[ip,setip]=useState({});
  useEffect(()=>{
    const fetchdata = async()=>{
      const data = await fetch("https://api.zippopotam.us/IN/305627");
      const jsondata = await data.json();
      //const data = {"ip":"321652234", "let":"1234567890"}
      console.log(jsondata);
      setip(jsondata);
    }
  fetchdata();
  },[])
  return (
    <>
    <h1>{ip.ip}</h1>
    {/* <h1>{ip.ip}</h1>
    <h1>{ip.city}</h1>
    <h1>{ip.country}</h1>
    <h1>{ip.asn}</h1>
    <h1>{ip.country_area}</h1>
    <h1>{ip.country_calling_code}</h1>
    <h1>{ip.country_capital}</h1>
    <h1>{ip.country_code}</h1>
    <h1>{ip.country_code_iso3}</h1>
    <h1>{ip.country_name}</h1>
    <h1>{ip.country_ltd}</h1>
    <h1>{ip.currency}</h1>
    <h1>{ip.currency_name}</h1>
    <h1>{ip.latitude}</h1>
    <h1>{ip.longintude}</h1>
    <h1>{ip.org}</h1>
    <h1>{ip.languages}</h1>
    <h1>{ip.reagion}</h1>
    <h1>{ip.postal}</h1>
    <h1>{ip.reagion_code}</h1>
    <h1>{ip.timezone}</h1>
    <h1>{ip.version}</h1>
    <h1>{ip.utc_offset}</h1>
    <h1>{ip.in_eu}</h1> */}

    </>
  )
}

export default App