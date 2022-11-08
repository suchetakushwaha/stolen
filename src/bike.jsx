import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calender from './calender';
import { useState } from 'react';
import Button from '@mui/material/Button';  
import CalendarS from './calender2';
import { format } from "date-fns";

export default function Bike(props) {
  const [name, setName] = useState("");
//  const [date,setDate] = useState[{
//   sDate: "",
//   endD: ""
//  }]
  
  function handleClick(){
    if(!name){
      return "name is required";
    }

  }

   const[show,SetShow] = useState(false);

   function handleShow()
   {

    SetShow(!show);

   }

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
       
        {/* <label htmlFor="sDate">Start Date</label>
        <input
          type="date"
          onChange={e => setDate({ sDate: e.target.value })}
        />
        {(
          <React.Fragment>
            <label htmlFor="sDate">End Date:</label>
            <input
              type="date"
              min={format(sDate, "YYYY-MM-DD")}
              onChange={e => setDate({ endD: e.target.value })}
            />
          </React.Fragment>
        )}
        */}
       
       <CalendarS data="From"/>
       <CalendarS data="To" />
       <Button variant="contained" onClick={handleClick}>Find Cases</Button>
       </form>
      {show ? <Calender/>:""}
     
    </div>
  )
}
