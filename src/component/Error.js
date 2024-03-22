import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
const Error = () => {
  return (
   <>
   <section id="error-page">
    <div className="content">
        <h2 className="header">404</h2>
        <h4>Sorry!Page Not Found</h4>
        <p>
            Oops!It seems like the page you're trying to reach doesn't exist
            If you belive there's an issue ,feel free to report it,and we'll look into it.
        </p>
        <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <NavLink to="/contact">Report Problem</NavLink>
        </div>
    </div>
   </section>
   
   </>
  )
}

export default Error