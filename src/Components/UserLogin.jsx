import axios from 'axios'
import React, { useState } from 'react'

const UserLogin = () => {
    const [inputField,setInputField]=useState(
        {username:"",password:""}
    )

    const apiLink="http://localhost:3001/login"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    let userid=Response.data.data._id
                    let token=Response.data.token
                    sessionStorage.setItem("userid",userid)
                    sessionStorage.setItem("token",token)
                    alert("Logged In Successfully !!!")
                } else {
                    alert(Response.data.status)
                }
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Login</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Username</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input onChange={inputHandler} type="password" name="password" className="form-control" value={inputField.password}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Sign In</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="">Not Registered? Sign Up Here !!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserLogin