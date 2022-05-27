import React from "react";

const ChangeEmail = () => {
    return (
        <div className="card card-info">
            <div className="card-header">
                <h3 className="card-title">Email</h3>
            </div>
            <form>
                <div className="card-body">                    
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter the Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="passwordEmail">Password</label>
                                <input type="password" className="form-control" id="passwordEmail" placeholder="******" />
                            </div>
                    </div>

                <div className="card-footer">
                    <button style={{ float : 'right' }} type="submit" className="btn btn-info">Save changes</button>
                </div>
            </form>
        </div>
    )
}

export default ChangeEmail;