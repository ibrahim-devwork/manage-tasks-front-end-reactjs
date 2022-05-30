import React, {useState, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { changeEmail } from "../../../store/profile/profileActions";
import profileValidation from "./profileValidation";
import Swal from 'sweetalert2';

const ChangeEmail = ({setIsChange}) => {
    const userData      = useSelector(state => state.profileSlice);
    const dispatch      = useDispatch();
    const [infosErrValidate, setInfosErrValidate] = useState({});
    
    const [formEmail, setFormEmail] = useState({
            email      : '',
            password   : '',
    });
    
    useEffect(() => {
        setFormEmail({
            ...formEmail,
            email      : (userData?.user?.email ? userData?.user?.email : ''),
        })
    }, [userData?.user])

    const handleChange = (event) => {
        setFormEmail({...formEmail, [event.target.name] : event.target.value});
    }

    useEffect(() => {
        if (userData?.isEmail === true) {
            setIsChange(true);
            setFormEmail({...formEmail, password : ''});
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Email has been changed',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }, [userData]);

    // Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();

        let errorsV = {};
        errorsV = profileValidation(formEmail, 'change-email');
        setInfosErrValidate(errorsV);

        if (Object.keys(errorsV).length === 0) {
            dispatch(changeEmail(formEmail));
        }
    };

    return (
        <div className="card card-info">
            <div className="card-header">
                <h3 className="card-title">Email</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="card-body"> 
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                name="email"
                                value={formEmail?.email}
                                onChange={handleChange}
                                type="text" 
                                className="form-control" 
                                id="email" 
                                placeholder="Enter the Email" 
                                />
                                {infosErrValidate?.email &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.email}</span><br />
                                            </div>
                                }
                                {userData?.errorsEmail?.email &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsEmail?.email}</span><br />
                                    </div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="passwordEmail">Password</label>
                                <input 
                                name="password"
                                value={formEmail?.password}
                                onChange={handleChange}
                                type="password" 
                                className="form-control" 
                                id="passwordEmail" 
                                placeholder="******" 
                                />
                                {infosErrValidate?.password &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.password}</span><br />
                                            </div>
                                }
                                {userData?.errorsEmail?.password &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsEmail?.password}</span><br />
                                    </div>
                                }
                                {userData?.errorsEmail?.message &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsEmail?.message}</span><br />
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

export default ChangeEmail;