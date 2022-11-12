import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calender from './calender';
import { useState } from 'react';
import Button from '@mui/material/Button';  
import CalendarS from './calender2';
import { format } from "date-fns";

export default function Bike(props) {
  const[result,setResult] =useState()
  const [name, setName] = useState("");
 const [sdate,setsDate] = useState("");
 const [edate,seteDate] = useState("");
 console.log(sdate);
 console.log(edate);


  
  function handleClick(){
    if(!name || ! sdate || !edate){
    console.log("required");
    }

    fetch('https://bikeindex.org/api/v3/search')
    .then(response => response.json())
    .then(result =>(props.setbikeData(result)));
 
  }
   

  //  const[show,SetShow] = useState(false);

  //  function handleShow()
  //  {

  //   SetShow(!show);

  //  }

  return (
    <div>
        {/* <img src={props.berline} alt="logo"/> */}
      <h1 className='header_text'>
        Police Department of Berlin <span  className='stolen'>Stolen Bykes</span>
      </h1>
      <form>
      <input className='discription' type="text"name="name" placeholder="Search case Descriptions" onChange={e => setName(e.target.value)} required/>
      {/* <input class="search_from_to_cases" type="" value="from"/>
       <CalendarMonthIcon onClick={handleShow} />
       <input class="search_from_to_cases" type="text" value="To"/>
       <CalendarMonthIcon onClick={handleShow}/> */}
       
        <label htmlFor="sDate">From:</label>
        <input
        className='discription'
          type="date" name = "date"
          onChange={e => setsDate(e.target.value)}
        />
        {(
          <React.Fragment>
            <label htmlFor="sDate">To:</label>
            <input className='discription'
              type="date"
              min={sdate}
              onChange={e => seteDate(e.target.value)}
            />
          </React.Fragment>
        )}
       
{/*        
       <CalendarS data="From"/>
       <CalendarS data="To" /> */}
      
       <Button variant="contained" onClick={handleClick}>Find Cases</Button>
       </form>
      {/* {show ? <Calender/>:""}
      */}
    </div>
  )
}
