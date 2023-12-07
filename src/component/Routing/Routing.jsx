// import React from 'react'
// import Routing from 'react'
import { Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import Login from "../login page/Login"
// import SignUp from "../login page/SignUp"
import Dashboard from "../login page/Dashboard"

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path = "/" element = {<Login />} />

           <Route path = "dashboard" element = {<Dashboard />} />
           {/* <Route path="/SignUp" element = {<SignUp />} */}
           
        </Routes>
      </BrowserRouter>
 
    </div>
  )
}

export default Routing
