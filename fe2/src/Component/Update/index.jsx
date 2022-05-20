import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Update = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [form, setForm] = useState(location.state)

    const handleUpdate = (e) => {

        e.preventDefault();

        fetch(`http://localhost:8080/student/${form.id}`, {

            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(
                {
                    id: form.id,
                    firstname: form.firstname,
                    lastname: form.lastname,
                    email: form.email,
                    diemcc: form.diemcc,
                    diemkt: form.diemkt,
                    diemthi: form.diemthi,
                }
            )

        }).then(res => res.json()).finally(() => navigate("/student"))

    }


    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 container justify-content-center card">
                    <h1 class="text-center">Update student</h1>
                    <div class="card-body">
                        <form >
                            <div class="form-group">
                                <label>Student first name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={form.firstname}
                                    onChange={(e) => setForm(prev => ({ ...prev, firstname: e.target.value }))}
                                    class="form-control"
                                />
                            </div>
                            <div class="form-group">
                                <label>Student last name</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    value={form.lastname}
                                    onChange={(e) => setForm(prev => ({ ...prev, lastname: e.target.value }))}
                                    class="form-control"
                                />
                            </div>
                            <div class="form-group">
                                <label>Student email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={form.email}
                                    onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                                    class="form-control"
                                />
                            </div>
                            <div class="form-group">
                                <label>Diem chuyen can</label>
                                <input
                                    type="text"
                                    name="diemcc"
                                    value={form.diemcc}
                                    onChange={(e) => setForm(prev => ({ ...prev, diemcc: e.target.value }))}
                                    class="form-control"
                                />
                            </div>
                            <div class="form-group">
                                <label>Diem kiem tra</label>
                                <input
                                    type="text"
                                    name="diemkt"
                                    value={form.diemkt}
                                    onChange={(e) => setForm(prev => ({ ...prev, diemkt: e.target.value }))}
                                    class="form-control"
                                />
                            </div>
                            <div class="form-group">
                                <label>Diem thi</label>
                                <input
                                    type="text"
                                    name="diemthi"
                                    value={form.diemthi}
                                    onChange={(e) => setForm(prev => ({ ...prev, diemthi: e.target.value }))}
                                    class="form-control"
                                />
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-primary" onClick={(e) => handleUpdate(e)}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update