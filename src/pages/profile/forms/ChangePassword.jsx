import React, {useState, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { changePassword } from "../../../store/profile/profileActions";
import profileValidation from "./profileValidation";
import Swal from 'sweetalert2';

const ChangePassword = ({setIsChange}) => {
    const userData      = useSelector(state => state.profileSlice);
    const dispatch      = useDispatch();
    const [infosErrValidate, setInfosErrValidate] = useState({});
    
    const [formPassword, setFormPassword] = useState({
        current_password    : '',
        new_password        : '',
        confirm_password    : '',
    });

    const handleChange = (event) => {
        setFormPassword({...formPassword, [event.target.name] : event.target.value});
    }

    useEffect(() => {
        if (userData?.isPassword === true) {
            setIsChange(true);
            setFormPassword({...formPassword, current_password : '', new_password : '', confirm_password : ''});
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Password has been changed.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }, [userData]);

    // Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();

        let errorsV = {};
        errorsV = profileValidation(formPassword, 'change-password');
        setInfosErrValidate(errorsV);

        if (Object.keys(errorsV).length === 0) {
            dispatch(changePassword(formPassword));
        }
    };

    return (
        <div className="card card-info">
            <div className="card-header">
                <h3 className="card-title">Password</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="card-body">                    
                            <div className="form-group">
                                <label htmlFor="current_password">Current password</label>
                                <input
                                name="current_password"
                                value={formPassword?.current_password}
                                onChange={handleChange}  
                                type="password" 
                                className="form-control" 
                                id="current_password" 
                                placeholder="******" 
                                />
                                {infosErrValidate?.current_password &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.current_password}</span><br />
                                            </div>
                                }
                                {userData?.errorsPassword?.current_password &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsPassword?.current_password}</span><br />
                                    </div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="new_password">New password</label>
                                <input 
                                name="new_password"
                                value={formPassword?.new_password}
                                onChange={handleChange} 
                                type="password" 
                                className="form-control" 
                                id="new_password" 
                                placeholder="******" 
                                />
                                {infosErrValidate?.new_password &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.new_password}</span><br />
                                            </div>
                                }
                                {userData?.errorsPassword?.new_password &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsPassword?.new_password}</span><br />
                                    </div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirm_password">Confirm password</label>
                                <input
                                name="confirm_password"
                                value={formPassword?.confirm_password}
                                onChange={handleChange}  
                                type="password" 
                                className="form-control" 
                                id="confirm_password" 
                                placeholder="******" 
                                />
                                {infosErrValidate?.confirm_password &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.confirm_password}</span><br />
                                            </div>
                                }
                                {infosErrValidate?.comparingPasswords &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.comparingPasswords}</span><br />
                                            </div>
                                }
                                {userData?.errorsPassword?.confirm_password &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsPassword?.confirm_password}</span><br />
                                    </div>
                                }
                                {userData?.errorsPassword?.message &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsPassword?.message}</span><br />
                                    </div>
                                }
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