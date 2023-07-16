import * as React from 'react';
import { useState } from 'react';


const [Registration, setRegistration ]= useState({email:"",password:"",name:""});


handleInput=(e)=>{
  const name=e.target.value,
  const value=e.target.value;
  console.log(name,value)

  setRegistration({...Registration,[name]:value})
}
const [records,setRecords]=useState([])

const handleSubmit = (e) => {
  e.preventDefault();
 const rewRecords={...Registration,id:new Date().getTime().toString()}
};
setRecords([...records,newRecords])

export default function Login() {
  return (
    <form action=""onSubmit={handleSubmit}> 
    <div> 
      <input onChange={handleInput} className="input" value="registration.emal" />
      <input onChange={handleInput} className="input" value="registration.paasword" />
      <button type="submit"> Login</button>
    </div>
    </form>
  );
}
