import React from "react";

const ChangePassword = () => {
    return (
        <div className="card card-info">
            <div className="card-header">
                <h3 className="card-title">Password</h3>
            </div>
            <form>
                <div className="card-body">                    
                            <div className="form-group">
                                <label htmlFor="current_password">Current password</label>
                                <input type="password" className="form-control" id="current_password" placeholder="******" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="new_password">New password</label>
                                <input type="password" className="form-control" id="new_password" placeholder="******" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm_password">Confirm password</label>
                                <input type="password" className="form-control" id="confirm_password" placeholder="******" />
                            </div>
                    </div>

                <div className="card-footer">
                    <button style={{ float : 'right' }} type="submit" className="btn btn-info">Save changes</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword;