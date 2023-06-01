import React from 'react';
import DatePicker from "./Datepicker/DatePicker";

function App() {
  return (
    <>
        <div style={{margin:20}}>
            <h1>Date Picker</h1>
            <DatePicker onChange={(a)=>{console.log(a)}} label="Start Date" subtext="Pick a random date"/>
        </div>
    </>
  );
}

export default App;
