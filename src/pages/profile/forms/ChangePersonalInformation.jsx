import React from "react";

const ChangePersonalInformation = () => {
    return (
        <div className="card card-info">
            <div className="card-header">
                <h3 className="card-title">Personal information </h3>
            </div>
            <form>
                <div className="card-body">
                    <div className="row">
                        
                        <div className="col-md-3">
                            <div>
                                <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid image-profile"/>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="form-group">
                                <label htmlFor="first_name">First name</label>
                                <input type="text" className="form-control" id="first_name" placeholder="Enter the first name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">Last name</label>
                                <input type="text" className="form-control" id="last_name" placeholder="Enter the last name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone_number">Phone number</label>
                                <input type="text" className="form-control" id="phone_number" placeholder="Enter the last name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Image</label>
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose image</label>
                                    </div>
                                    <div className="input-group-append">
                                        <span className="input-group-text">Upload</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card-footer">
                    <button style={{ float : 'right' }} type="submit" className="btn btn-info">Save changes</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePersonalInformation;