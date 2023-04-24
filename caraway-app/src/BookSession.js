import * as React from "react";
import "./BookSession.css";
import { Link } from 'react-router-dom';

import { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css";





export default function BookSession() {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    const [value1, onChange] = useState('10:00');
    // const [value, onChange] = useState(null);

    function handleDateSelect(event){
        setSelectedDate(event.target);
    }
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
 
    const handleChange = (newValue) => {
      setValue(newValue);
    };

    
  return (
    <div>
  
  
    
    <div className="session-page">
      <div className="sessionForm">
        <p className="form-title">Book Session</p>
        
        <div className="about-session">
        <p className="enterDate"> Enter Date:</p>
        <div className="dateDiv"><DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} /></div>
        
     </div>
     <div className="about-session">
        <p className="enterDate"> Choose Time:</p>
        <div className="timeDiv"><TimePicker onChange={onChange} value={value1} /></div>
   
        </div>
        <div className="about-session">
        <p className="enterDate"> Session Type:</p>
        <div className="sessDiv">
        <input type="checkbox" id="myCheck"></input>
        <label for="myCheck">In-person</label> 
        </div>
        <div className="sessDiv2">
        <input type="checkbox" id="myCheck"></input>
        <label for="myCheck">Online</label> 
        </div>
        </div>
        <button className="Session-button" type="submit" onClick={()=> window.location.href='/successBook'} >
            <Link to="/bookSuccess">Submit</Link>
          </button>    
        
       
        </div>
        </div>
        </div>
  );
}