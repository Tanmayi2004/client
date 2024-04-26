import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function Entry() {
  function handleSubmit() {
    console.log({
      pid: document.getElementById("idpid").value,
      pname: document.getElementById("idpname").value,
      pevent: document.getElementsByName("status")[0].value,
      pattire: document.getElementsByName("sstatus")[0].value,
      pactivities: document.getElementById("idppc").value
    })
    axios.post('http://localhost:8081/entry', {
        pid: document.getElementById("idpid").value,
        pname: document.getElementById("idpname").value,
        pevent: document.getElementsByName("status")[0].value,
        pattire: document.getElementsByName("sstatus")[0].value,
        pactivities: document.getElementById("idppc").value
    }).then((response) => {
        console.log(response.data);
    })
  }

  return (
    <div>
      <br />
      Participate ID: <input type="text" name="sid" id="idpid" /> <br />
      <br />
      Participate Name: <input type="text" name="sname" id="idpname" />
      <br />
      <br />
      Event Category:
      <Select id="idevent" label="Status" name="status" defaultValue="select">
        <MenuItem value={"Select"}>Select Event Category</MenuItem>
        <MenuItem value={"Traditional Dance"}>Traditional Dance</MenuItem>
        <MenuItem value={"Art"}>Art</MenuItem>
        <MenuItem value={"Monuments"}>Monuments</MenuItem>
      </Select>{" "}
      <br />
      <br />
      Traditional Attire:
      <Select id="idattire" label="Status" name="sstatus" defaultValue="select">
        <MenuItem value={"Attire"}>Select Attire</MenuItem>
        <MenuItem value={"Traditional"}>Traditional</MenuItem>
        <MenuItem value={"style"}>Regional Style</MenuItem>
        <MenuItem value={"daily wear"}>Daily Wear</MenuItem>
      </Select>{" "}
      <br />
      <br />
      Cultural Activities: <input type="text" name="sculture" id="idppc" />
      <br />
      <br />
      <button onClick={handleSubmit}> Save Data </button>
      
    </div>
  );
}
