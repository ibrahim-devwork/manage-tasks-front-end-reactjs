import React from 'react';

const Login = () => {
    return (
    <div  className="hold-transition login-page">
    <div className="login-box">
    <div className="card card-outline card-primary">
        <div className="card-header text-center">
            <a href="../../index2.html" className="h1"><b>MAVISTRO</b></a>
        </div>
        
        <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>

        <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email"/>
            <div className="input-group-append">
                <div className="input-group-text">
                <span className="fas fa-envelope"></span>
                </div>
            </div>
            </div>
            <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password"/>
            <div className="input-group-append">
                <div className="input-group-text">
                <span className="fas fa-lock"></span>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-8">
                {/* <div className="icheck-primary">
                <input type="checkbox" id="remember"/>
                <label htmlFor="remember">
                    Remember Me
                </label>
                </div> */}
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