import React, {memo, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import taskValidation from './taskValidation';
import Swal from 'sweetalert2';
import moment from 'moment'
import { MultiSelect } from "react-multi-select-component";
import { updateTask } from '../../../store/tasks/taskActions';

const UpdateTask = ({filter, setFilter, taskUpdate}) => {
    const dispatch      = useDispatch();
    const projects      = useSelector(state => state.dropDownsDataSlice.projects);
    const users         = useSelector(state => state.dropDownsDataSlice.users);
    const taskData      = useSelector(state => state.taskSlice);
    const [taskValideted, setTaskValideted] = useState({});
    const [selectedUser, setSelectedUser]   = useState([]);
    
    const userOptions = users?.map((user) => ({
        "value" : user.id,
        "label" : user.username
    }));

    const [form, setForm] = useState({
        description : '',
        deadline : '',
        statut : '',
        id_project : '',
    });

    useEffect(()=>{
        if(taskUpdate?.id){
        setForm({
            ...form, 
            id          : taskUpdate?.id, 
            description : taskUpdate?.description, 
            deadline    : taskUpdate?.deadline,
            statut      : taskUpdate?.statut,
            id_project  : taskUpdate?.id_project
        })
        
        const usersFromTaskUpdate = taskUpdate?.users?.map((user) => ({
            "value" : user.id,
            "label" : user.username
        }));
        setSelectedUser([]);
        setSelectedUser(usersFromTaskUpdate);
    }
    }, [taskUpdate])

    const handleChange = (event) => {
        switch(event.target.name) {
            case 'deadline' : 
            setForm({...form, deadline : moment(new Date(event.target.value)).format("YYYY-MM-DD")});
            break;
            default : 
            setForm({...form, [event.target.name] : event.target.value});
        }
    }

    useEffect(() => {
        if(taskData?.isUpdate === true){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your task has been updated',
                showConfirmButton: false,
                timer: 1500
            });
            setFilter({
                ...filter,
                search: '',
                pagination: 1,
                count_per_page: 10
            });
        }
    }, [taskData?.isUpdate])

    const handleClear = () => {
        setForm({...form,  
            description : '',
            deadline    : '',
            statut      : '0',
            id_project  : '0',
        });
        setSelectedUser([]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const usersSlected = selectedUser?.map(user => user.value);
        setForm({...form, users : usersSlected});
        
        let taskValidErr    = {};
        taskValidErr        = taskValidation(form, usersSlected);
        setTaskValideted(taskValidErr);

        if (Object.keys(taskValidErr).length === 0) {
            dispatch(updateTask({
                id          : taskUpdate?.id,
                description : form.description,
                deadline    : form.deadline,
                statut      : form.statut,
                id_project  : form.id_project,
                users       : usersSlected
            }));
        }
    }

    return (
        <div>
            <div className="modal fade" id="modal-update-task">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Update this task</h4>
                            <button onClick={handleClear} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {taskData?.errors?.message &&
                                <div>
                                    <span style={{ color: 'red', fontSize: '14px' }}>{taskData?.errors?.message}</span><br />
                                </div>
                            }

                            {/* Modal body */}
                            <form>
                                <div className="card-body">
                                <div className="form-group">
                                        <label htmlFor='description'>Description  </label>
                                        <textarea 
                                        value={form.description}
                                        onChange={handleChange}
                                        name='description'
                                        className="form-control" 
                                        rows="2" 
                                        id='description' 
                                        placeholder="Enter description"/>
                                        {taskValideted?.description &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{taskValideted?.description}</span><br />
                                            </div>
                                        }
                                        {taskData?.errors?.description &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{taskData?.errors?.description}</span><br />
                                            </div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Deadline</label>
                                        <input 
                                        type="date" 
                                        className="form-control"
                                        value={form.deadline}
                                        onChange={handleChange}
                                        name='deadline'
                                        />
                                        {taskValideted?.deadline &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{taskValideted?.deadline}</span><br />
                                            </div>
                                        }
                                        {taskData?.errors?.deadline &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{taskData?.errors?.deadline}</span><br />
                                            </div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Project</label>
                                        <select 
                                        className="form-control select2bs4"
                                        name="id_project"
                                        value={form?.id_project}
                                        onChange={handleChange}
                                        >
                                        <option value='0'>All projects</option>
                                        {projects?.map((project, index) => (
                                            <option key={index} value={project.id}>{project.name}</option>
                                        ))}
                                        </select>
                                        {taskValideted?.id_project &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{taskValideted?.id_project}</span><br />
                                            </div>
                                        }
                                        {taskData?.errors?.id_project &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{taskData?.errors?.id_project}</span><br />
                                            </div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Statut</label>
                                        <select 
                                        className="form-control select2bs4"
                                        name="statut"
                                        value={form?.statut}
                                        onChange={handleChange}
                                        >
                                        <option value='0'>Select statut</option>   
                                        <option value='1'>To do</option>
                                        <option value='2'>In progress</option>
                                        <option value='3'>Test</option>
                                        <option value='4'>Cancel</option>
                                        <option value='5'>Finished</option>
                                        </select>
                                        {taskValideted?.statut &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{taskValideted?.statut}</span><br />
                                            </div>
                                        }
                                        {taskData?.errors?.statut &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{taskData?.errors?.statut}</span><br />
                                            </div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Users</label>
                                        <MultiSelect
                                            options={userOptions}
                                            value={selectedUser}
                                            onChange={setSelectedUser}
                                            labelledBy="Select"
                                        />
                                        {taskValideted?.users &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{taskValideted?.users}</span><br />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </form>
                            {/* Modal body */}
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button onClick={handleClear} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} type="submit" className="btn btn-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default memo(UpdateTask);