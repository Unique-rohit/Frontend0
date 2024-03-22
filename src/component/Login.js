import React, { useState } from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom'
const URL='http://localhost:5000/api/auth/login'
const Login = () => {
  const[user,setUser]=useState({
    email:"",
    password:"",
  });

  const navigate=useNavigate();
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setUser({
       ...user,
       [name]:value,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
   try {
    const response=await fetch(URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    });
    console.log("login form",response);
    if(response.ok){
      alert("Login Succesful");
      const res_data=await response.json();
      storetokenInLS(res_data.token);
      // localStorage.setItem("token",res_data.token);
      setUser({email:"",password:""});
      navigate("/");
    }
    else{
      alert("Invalid Credentials");
      console.log("Invalid credentials");
    }
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <>
    <section>
    <main>
      <div className="section-register">
        <div className="container grid gid-two-cols">
          <div className="registration-image">
            <img src="/images/login.jpg" alt="lets fill login form"
            width="500" height="500" />
          </div>
          {/* let tackle registration form */}
          <div className="registration-form">
            <h1 className='main-heading mb-3'>Login form</h1>
            <br />

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">email</label>
                <input type="email" name="email"  palaceholder=" enter your email"
                id="email" required autoComplete='off' value={user.email}
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
              <button type="submit">Login Now</button>
            </form>
          </div>
        </div>
      </div>
    </main>
   </section>
    </>
  )
}

export default Login