import React, {memo, useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import { MultiSelect } from "react-multi-select-component";

const ShowOneUser = ({userUpdate}) => {
    const actionsDropDownRef = useRef();
    const roles              = useSelector(state => state.dropDownsDataSlice.roles);
    const actions            = useSelector(state => state.dropDownsDataSlice.actions);
    const userData           = useSelector(state => state.userSlice);
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

    useEffect(()=>{
        if(userUpdate?.id){
        setForm({
            ...form, 
            id          : userUpdate?.id, 
            username    : userUpdate?.username, 
            email       : userUpdate?.email,
            id_role     : userUpdate?.id_role,
        });
        
        if(userUpdate?.id_role && userUpdate?.id_role == 3){
            actionsDropDownRef.current.hidden = true;
            setSelectedAction([]); 
        } else {
            actionsDropDownRef.current.hidden = false;
            const actionsFromUserUpdate = userUpdate?.actions?.map((action) => ({
                "value" : action?.id,
                "label" : action?.action
            }));
            setSelectedAction([]);
            setSelectedAction(actionsFromUserUpdate);
        }
    }
    }, [userUpdate])

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
        actionsDropDownRef.current.hidden = false;
    }

    return (
        <div>
            <div className="modal fade" id="modal-show-user">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Details of user</h4>
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
                                        readOnly
                                        name='username'
                                        type="text"
                                        className="form-control" 
                                        placeholder="Enter Username"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor='email'>Email </label>
                                        <input 
                                        value={form?.email}
                                        readOnly
                                        name='email'
                                        type="email"
                                        className="form-control" 
                                        placeholder="Enter Email"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Role</label>
                                        <select
                                        className="form-control select2bs4"
                                        name="id_role"
                                        value={form?.id_role}
                                        readOnly
                                        >
                                        <option value='0'>Select role</option>
                                        {roles?.map((role, index) => (
                                            <option key={index} value={role?.id}>{role?.role}</option>
                                        ))}
                                        </select>
                                    </div>
                                    
                                    <div className="form-group" ref={actionsDropDownRef}>
                                        <label>Actions</label>
                                        <MultiSelect
                                            options={actionOptions}
                                            value={selectedAction}
                                            onChange={setSelectedAction}
                                            labelledBy="Select"
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor='password'>Password </label>
                                        <input 
                                        value={form?.password}
                                        readOnly
                                        name='password'
                                        type="password"
                                        className="form-control" 
                                        placeholder="Enter password"
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor='confirm_password'>Cofirm password </label>
                                        <input 
                                        value={form?.confirm_password}
                                        readOnly
                                        name='confirm_password'
                                        type="password"
                                        className="form-control" 
                                        placeholder="Enter confirm password"
                                        />
                                    </div>

                                </div>
                            </form>
                            {/* Modal body */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default memo(ShowOneUser);