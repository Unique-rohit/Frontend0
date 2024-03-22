import React, { useState } from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom';


const URL='http://localhost:5000/api/auth/register'
const Register = () => {
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",

  });
  const navigate=useNavigate();
  // handling the input
  const handleInput=(e)=>{
     console.log(e);
     let name=e.target.name;
     let value=e.target.value;

     setUser({
      ...user,
      [name]:value,
     })
  }

  // handle the form submission
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(user);
    try{
      // connection frontend to backend
    const response =await fetch(URL,{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify(user),
    });
    if(response.ok){
      const res_data=await response.json();
      console.log('response from server',res_data);
      // store token in localhost
      // storetokenInLS(res_data.token);
      localStorage.setItem("token",res_data);
      setUser({username:"",email:"",phone:"",password:""});
      navigate("/login");
    }
    console.log(response);
  }
  catch(error){
    console.log("register",error)
  }
  }
  return (
    
   <section>
    <main>
      <div className="section-register">
        <div className="container grid gid-two-cols">
          <div className="registration-image">
            <img src="/images/register.png" alt="a user is trying to register"
            width="500" height="500" />
          </div>
          {/* let tackle registration form */}
          <div className="registration-form">
            <h1 className='main-heading mb-3'>registration form</h1>
            <br />

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input type="text" name="username"  palaceholder="username"
                id="username" required autoComplete='off' value={user.username}
                onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input type="email" name="email"  palaceholder=" enter your email"
                id="email" required autoComplete='off' value={user.email}
                onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="phone">phone</label>
                <input type="number" name="phone"  palaceholder="phone"
                id="phone" required autoComplete='off' value={user.phone}
                onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input type="password" name="password"  palaceholder="password"
                id="password" required autoComplete='off' value={user.password}
                onChange={handleInput}
                />
              </div>

              <br />
              <button type="submit" >Register Now</button>
            </form>
          </div>
        </div>
      </div>
    </main>
   </section>
  )
}

export default Register