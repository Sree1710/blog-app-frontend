import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewMyPost = () => {
    const [postData, setPostData] = useState(
        []
    )

    const apiLink = "http://localhost:3001/viewmp"

    const getData = () => {
        let data = { "token": sessionStorage.getItem("token"), "post_id": sessionStorage.getItem("userid") }
        axios.post(apiLink, data).then(
            (Response) => {
                setPostData(Response.data)
            }
        )
    }

    useEffect(() => { getData() }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View My Post</h1>
                            </div>
                            {postData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex align-items-stretch">
                                        <div className="card">
                                            <img height="300px" src={value.postImg} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.postTitle}</h5>
                                                <p className="card-text">{value.postDesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMyPost