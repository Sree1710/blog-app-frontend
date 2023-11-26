import axios from 'axios'
import React, { useState } from 'react'

const AddPost = () => {
    const [inputField,setInputField]=useState(
        {token:sessionStorage.getItem("token"),post_id:sessionStorage.getItem("userid"),postTitle:"",postDesc:"",postImg:""}
    )

    const apiLink="http://localhost:3001/addp"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
    axios.post(apiLink,inputField).then(
        (Response)=>{
            if (Response.data.status=="success") {
                alert("Post Added Successfully !!!")
                setInputField({postTitle:"",postDesc:"",postImg:""})
            } else {
                alert("Something Went Wrong !!!")
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
                            <h1>Add Post</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Title</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="postTitle" value={inputField.postTitle} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea onChange={inputHandler} name="postDesc" id="" cols="30" rows="10" className="form-control" value={inputField.postDesc}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Image Link</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="postImg" value={inputField.postImg} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-warning">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost