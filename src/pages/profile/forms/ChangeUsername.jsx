import React from "react";

const ChangeUsername = () => {
    return (
        <div className="card card-info">
            <div className="card-header">
                <h3 className="card-title">Username</h3>
            </div>
            <form>
                <div className="card-body">                    
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter the Username" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="******" />
                            </div>
                    </div>

                <div className="card-footer">
                    <button style={{ float : 'right' }} type="submit" className="btn btn-info">Save changes</button>
                </div>
            </form>
        </div>
    )
}

export default ChangeUsername;