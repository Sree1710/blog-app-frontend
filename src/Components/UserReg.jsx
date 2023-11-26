import axios from 'axios'
import React, { useState } from 'react'
import LoginRegNav from './LoginRegNav'

const UserReg = () => {
    const [inputField,setInputField]=useState(
        {Name:"",userDob:"",userAge:"",userPhNo:"",userEmail:"",username:"",password:"",confirmpass:""}
    )

    const apiLink="http://localhost:3001/userreg"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (inputField.password==inputField.confirmpass) {
                    if (inputField.userPhNo.length<11) {
                        if (Response.data.status=="success") {
                            alert("User Registered Successfully !!!")
                            setInputField({Name:"",userDob:"",userAge:"",userPhNo:"",userEmail:"",username:"",password:"",confirmpass:""})
                        } else {
                            alert("Something Went Wrong !!!")
                        }
                    } else {
                        alert("Enter Valid Phone No. !!!")
                    }
                } else {
                    alert("Password and Confirm Password does not match !!!")
                }
            }
        )
    }
  return (
    <div>
        <LoginRegNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>User Registration</h1>
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="Name" value={inputField.Name} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input onChange={inputHandler} type="date" name="userDob" id="" className="form-control" value={inputField.userDob} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Age</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="userAge" value={inputField.userAge} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone No.</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="userPhNo" value={inputField.userPhNo} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input onChange={inputHandler} type="email" name="userEmail" id="" className="form-control" value={inputField.userEmail} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Username</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="username" value={inputField.username} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Password</label>
                            <input onChange={inputHandler} type="password" name="password" id="" className="form-control" value={inputField.password} />
                        </div>
                        <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input onChange={inputHandler} type="password" name="confirmpass" id="" className="form-control" value={inputField.confirmpass} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Register</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/">Already Registered? Login Here !!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserReg