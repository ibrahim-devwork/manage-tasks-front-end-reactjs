import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginValidation from './loginValidation';
import { userLogin } from '../../store/auh/authActions';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.authSlice);
    const [form, setForm] = useState({
        'username': '',
        'password': ''
    });
    const [loginVaidation, setloginVaidation] = useState({});

    useEffect( () => {
        if (localStorage.getItem("token")) {
            console.log('yes is loged !');
            navigate("/");
        }
    },[userData.status]);

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let loginValidErr = {};
        loginValidErr = loginValidation(form);
        setloginVaidation(loginValidErr);

        if (Object.keys(loginValidErr).length === 0) {
            dispatch(userLogin(form));
        }
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <span className="h1"><b>MAVISTRO</b></span>
                    </div>

                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-2">
                                <input
                                    onChange={handleChange}
                                    value={form.username}
                                    name='username'
                                    type="text"
                                    className="form-control"
                                    placeholder="Email or username"
                                />
                                <br />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>

                            </div>
                            {loginVaidation?.username &&
                                <div>
                                    <span style={{ color: 'red', fontSize: '14px' }}>{loginVaidation?.username}</span><br />
                                </div>
                            }
                            {userData?.errors?.errors?.username &&
                                <div>
                                    <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.errors?.username}</span><br />
                                </div>
                            }
                            <br />
                            <div className="input-group mb-2">
                                <input
                                    onChange={handleChange}
                                    value={form.password}
                                    name='password'
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            {loginVaidation?.password &&
                                <div>
                                    <span style={{ color: 'red', fontSize: '14px' }}>{loginVaidation?.password}</span><br />
                                </div>
                            }
                            {userData?.errors?.errors?.password &&
                                <div>
                                    <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.errors?.password}</span><br />
                                </div>
                            }
                            {userData?.errors?.message &&
                                <div>
                                    <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.message}</span><br />
                                </div>
                            }
                            <br />

                            <div className="row">
                                <div className="col-8">
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;