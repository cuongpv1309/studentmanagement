import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const CreateTeacher = () => {

    let navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: ""
    })


    const handleSubmit = (e) => {

        e.preventDefault();
        if (!(localStorage.getItem("role") !== 0)) navigate('/login')
        else {

            fetch(`http://localhost:8080/admin/add`, {

                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify(

                    {
                        username: data.username,
                        password: data.password
                    }

                )

            }).then(res => res.json).finally(() => navigate("/teacher"))



        }

    }

    return (
        <>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">

                <a class="navbar-brand" href="#">Teacher Management System</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Teacher Management</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 container justify-content-center card">
                        <h1 class="text-center">Create new teacher</h1>
                        <div class="card-body">
                            <form   >
                                <div class="form-group">
                                    <label>Teacher username</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        class="form-control"
                                        placeholder="Enter teacher username"
                                        onChange={(e) => setData((prev) => ({ ...prev, username: e.target.value }))}
                                        value={data.username}
                                    />
                                </div>
                                <div class="form-group">
                                    <label>Teacher password</label>
                                    <input
                                        type="password"
                                        name="lastname"
                                        class="form-control"
                                        placeholder="Enter teacher password"
                                        onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
                                        value={data.password}
                                    />
                                </div>

                                <div class="box-footer">
                                    <button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTeacher