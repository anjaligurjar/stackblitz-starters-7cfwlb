import React, { useState } from 'react'


export default function RegistrationForm() {
  const [inputs, setInputs] = useState({}
  );
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  
  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <h1> RegistrationForm</h1>
        <label>

        </label>
        <div>
          <input type="test" value={inputs.name}
          placeholder='enter your name'
          onChnage={handleChange}
           />
        </div>

        <label for='email'><b>email</b></label>
        <div>
          <input type="test" value={inputs.email}
            placeholder='Enter the your email'
            onChange={handleChange} />
        </div>
        <label for="password"><b>password</b></label>
        <div>
          <input type="test" value={inputs.password}
          placeholder='type your password'
            onChange={handleChange} />
        </div>
        <label for="address"><b>address</b></label>
        <div>
          <input type="test" value={inputs.address}
          placeholder='Write your address'
            onChange={handleChange} />
        </div>
        <label for="contact"><b>contact_Number</b></label>
        <div>
          <input type="test" value={inputs.contact}
        placeholder='put your Number here'
          onChange={handleChange} />
          </div>
          

        <input type="Button" value="Submit" />


      </div>
    </form>
  )
}

