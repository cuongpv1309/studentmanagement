import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: ""
    })


    const handleSubmit = async () => {

        const api = await fetch(`http://localhost:8080/admin/login?username=${data.username}&password=${data.password}`, {
            method: 'GET',
            headers: {

                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })

        const rolez = await api.json()

        localStorage.removeItem("id")
        localStorage.removeItem("username")
        localStorage.removeItem("password")
        localStorage.removeItem("role")

        localStorage.setItem("id", rolez.id)
        localStorage.setItem("username", rolez.username)
        localStorage.setItem("password", rolez.password)
        localStorage.setItem("role", rolez.role)

        if (rolez && rolez.role === 0)   navigate("/teacher")


        else if (rolez && rolez.role === 1) navigate("/student")



    }

    return (
        <>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" value={data.username} onChange={(e) => setData(prev => ({ ...prev, username: e.target.value }))} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={data.password} onChange={(e) => setData(prev => ({ ...prev, password: e.target.value }))} />
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>

        </>
    )
}

export default Login