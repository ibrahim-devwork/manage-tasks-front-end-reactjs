import React, {useState, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { changeUsername } from "../../../store/profile/profileActions";
import profileValidation from "./profileValidation";
import Swal from 'sweetalert2';

const ChangeUsername = ({setIsChange}) => {
    const userData      = useSelector(state => state.profileSlice);
    const dispatch      = useDispatch();
    const [infosErrValidate, setInfosErrValidate] = useState({});
    
    const [formUsername, setFormUsername] = useState({
        username   : '',
        password   : '',
    });
    
    useEffect(() => {
        setFormUsername({
            ...formUsername,
            username      : (userData?.user?.username ? userData?.user?.username : ''),
        })
    }, [userData?.user])

    const handleChange = (event) => {
        setFormUsername({...formUsername, [event.target.name] : event.target.value});
    }

    useEffect(() => {
        if (userData?.isUsername === true) {
            setIsChange(true);
            setFormUsername({...formUsername, password : ''});
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Username has been changed.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }, [userData]);

    // Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();

        let errorsV = {};
        errorsV = profileValidation(formUsername, 'change-username');
        setInfosErrValidate(errorsV);

        if (Object.keys(errorsV).length === 0) {
            dispatch(changeUsername(formUsername));
        }
    };

    return (
        <div className="card card-info">
            <div className="card-header">
                <h3 className="card-title">Username</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="card-body">                    
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                name="username"
                                value={formUsername?.username}
                                onChange={handleChange} 
                                type="text" 
                                className="form-control" 
                                id="username" 
                                placeholder="Enter the Username" 
                                />
                                {infosErrValidate?.username &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.username}</span><br />
                                            </div>
                                }
                                {userData?.errorsUsername?.username &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsUsername?.username}</span><br />
                                    </div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="passwordUsername">Password</label>
                                <input
                                name="password"
                                value={formUsername?.password}
                                onChange={handleChange} 
                                type="password" 
                                className="form-control" 
                                id="passwordUsername" 
                                placeholder="******" 
                                />
                                {infosErrValidate?.password &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.password}</span><br />
                                            </div>
                                }
                                {userData?.errorsUsername?.password &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsUsername?.password}</span><br />
                                    </div>
                                }
                                {userData?.errorsUsername?.message &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errorsUsername?.message}</span><br />
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

export default ChangeUsername;