import { useState } from 'react';
;

export default function LoginForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
  
  
    <form onSubmit={handleSubmit}>
   
 <form>
     <div className='container'>
      <button>LogIN</button>
      <div>
     <label for='username'><b>username</b></label>
      <input 
        type="username" 
        name="username" 
        placeholder='Enter your username'
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </div>
     <div>
      <label for='email'><b>email</b></label>
        <input 
          type="email" 
          name="email" 
          placeholder='Enter your email'
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </div>
       
      <div>
      <label for='password'><b>password</b></label>   
      <input 
        type="password" 
        name="password" 
        placeholder='Enter your password'
        value={inputs.password || ""} 
        onChange={handleChange}
      />
      </div>
      
       <input type="submit" />
        </div>
        </form>
    </form>
  
  
  )
}