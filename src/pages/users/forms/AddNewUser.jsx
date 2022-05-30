import React, {memo, useState, useEffect, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { MultiSelect } from "react-multi-select-component";
import userValidation from './userValidation';
import { createUser } from '../../../store/users/userActions';

const AddNewUser = ({filter, setFilter}) => {
    const actionsDropDownRef = useRef();
    const dispatch           = useDispatch();
    const roles              = useSelector(state => state.dropDownsDataSlice.roles);
    const actions            = useSelector(state => state.dropDownsDataSlice.actions);
    const userData           = useSelector(state => state.userSlice);
    const [userValideted, setUserValideted]     = useState({});
    const [selectedAction, setSelectedAction]   = useState([]);
    
    const actionOptions = actions?.map((action) => ({
        "value" : action?.id,
        "label" : action?.action
    }));

    const [form, setForm] = useState({
        username : '',
        email    : '',
        id_role  : '0',
        actions  : [],
        password : '',
        confirm_password : ''
    });

    const handleChange = (event) => {
        setForm({...form, [event.target.name] : event.target.value});
        if(event.target.name == 'id_role' && event.target.value == 3){
            actionsDropDownRef.current.hidden = true;
            setSelectedAction([]); 
        } else {
            actionsDropDownRef.current.hidden = false;
        }
    }

    useEffect(() => {
        if(userData?.isDone === true){
           handleClear();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your user has been created.',
                showConfirmButton: false,
                timer: 1500
            });
            setFilter({
                ...filter,
                search: '',
                pagination: filter?.pagination,
                count_per_page: filter?.count_per_page
            });
        }
    }, [userData?.isDone])

    const handleClear = () => {
        setForm({...form,  
            username : '',
            email    : '',
            id_role  : '0',
            actions  : [],
            password : '',
            confirm_password : ''
        });
        setSelectedAction([]);
        setUserValideted({});
        actionsDropDownRef.current.hidden = false;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const actionsSlected = selectedAction?.map(action => action.value);
        
        let taskValidErr    = {};
        taskValidErr        = userValidation(form, 'add-new');
        setUserValideted(taskValidErr);

        if (Object.keys(taskValidErr).length === 0) {
            dispatch(createUser({
                username : form?.username,
                email    : form?.email,
                id_role  : form?.id_role,
                actions  : actionsSlected,
                password : form?.password,
                confirm_password : form?.confirm_password
            }));
        }
    }

    return (
        <div>
            <button className='add-new-btn btn btn-primary' data-toggle="modal" data-target="#add-new-user">
                <i className="nav-icon fas fa-plus"></i>
                <span> </span>
                    Add new
            </button>

            <div className="modal fade" id="add-new-user">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add new user</h4>
                            <button onClick={handleClear} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Modal body */}
                            {userData?.errors?.message &&
                                <div>
                                    <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.message}</span><br />
                                </div>
                            }                          
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor='username'>Username </label>
                                        <input 
                                        value={form?.username}
                                        onChange={handleChange}
                                        name='username'
                                        type="text"
                                        className="form-control" 
                                        id='username' 
                                        placeholder="Enter Username"
                                        />
                                        {userValideted?.username &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userValideted?.username}</span><br />
                                            </div>
                                        }
                                        {userData?.errors?.username &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.username}</span><br />
                                            </div>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor='email'>Email </label>
                                        <input 
                                        value={form?.email}
                                        onChange={handleChange}
                                        name='email'
                                        type="email"
                                        className="form-control" 
                                        id='email' 
                                        placeholder="Enter Email"/>
                                        {userValideted?.email &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userValideted?.email}</span><br />
                                            </div>
                                        }
                                        {userData?.errors?.email &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.email}</span><br />
                                            </div>
                                        }
                                    </div>

                                    <div className="form-group">
                                        <label>Role</label>
                                        <select
                                        className="form-control select2bs4"
                                        name="id_role"
                                        value={form?.id_role}
                                        onChange={handleChange}
                                        >
                                        <option value='0'>Select role</option>
                                        {roles?.map((role, index) => (
                                            <option key={index} value={role?.id}>{role?.role}</option>
                                        ))}
                                        </select>
                                        {userValideted?.id_role &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userValideted?.id_role}</span><br />
                                            </div>
                                        }
                                        {userData?.errors?.id_role &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.id_role}</span><br />
                                            </div>
                                        }
                                    </div>
                                    
                                    <div className="form-group" ref={actionsDropDownRef}>
                                        <label>Actions</label>
                                        <MultiSelect
                                            options={actionOptions}
                                            value={selectedAction}
                                            onChange={setSelectedAction}
                                            labelledBy="Select"
                                        />
                                        {userValideted?.actions &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userValideted?.actions}</span><br />
                                            </div>
                                        }
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor='password'>Password </label>
                                        <input 
                                        value={form?.password}
                                        onChange={handleChange}
                                        name='password'
                                        type="password"
                                        className="form-control" 
                                        id='password' 
                                        placeholder="Enter password"
                                        />
                                        {userValideted?.password &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userValideted?.password}</span><br />
                                            </div>
                                        }
                                        {userData?.errors?.password &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.password}</span><br />
                                            </div>
                                        }
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor='confirm_password'>Cofirm password </label>
                                        <input 
                                        value={form?.confirm_password}
                                        onChange={handleChange}
                                        name='confirm_password'
                                        type="password"
                                        className="form-control" 
                                        id='confirm_password' 
                                        placeholder="Enter confirm password"
                                        />
                                        {userValideted?.confirm_password &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userValideted?.confirm_password}</span><br />
                                            </div>
                                        }
                                        {userValideted?.comparingPasswords &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userValideted?.comparingPasswords}</span><br />
                                            </div>
                                        }
                                        {userData?.errors?.confirm_password &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.confirm_password}</span><br />
                                            </div>
                                        }
                                    </div>

                                </div>
                            </form>
                            {/* Modal body */}
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button onClick={handleClear} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} type="submit" className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default memo(AddNewUser);