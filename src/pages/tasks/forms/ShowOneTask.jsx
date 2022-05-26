import React, {memo, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MultiSelect } from "react-multi-select-component";

const ShowOneTask = ({ taskUpdate }) => {
    const projects      = useSelector(state => state.dropDownsDataSlice.projects);
    const users         = useSelector(state => state.dropDownsDataSlice.users);
    const taskData      = useSelector(state => state.taskSlice);
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

    const handleClear = () => {
        setForm({...form,  
            description : '',
            deadline    : '',
            statut      : '0',
            id_project  : '0',
        });
        setSelectedUser([]);
    }

    return (
        <div>
            <div className="modal fade" id="modal-show-task">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Details of this task</h4>
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
                                        readOnly
                                        name='description'
                                        className="form-control" 
                                        rows="2" 
                                        id='description' 
                                        placeholder="Enter description"/>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Deadline</label>
                                        <input 
                                        readOnly
                                        type="date" 
                                        className="form-control"
                                        value={form.deadline}
                                        name='deadline'
                                        />
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Project</label>
                                        <select 
                                        className="form-control select2bs4"
                                        name="id_project"
                                        value={form?.id_project}
                                        readOnly
                                        >
                                        <option value='0'>All projects</option>
                                        {projects?.map((project, index) => (
                                            <option key={index} value={project.id}>{project.name}</option>
                                        ))}
                                        </select>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Statut</label>
                                        <select 
                                        className="form-control select2bs4"
                                        name="statut"
                                        value={form?.statut}
                                        readOnly
                                        >
                                        <option value='0'>Select statut</option>   
                                        <option value='1'>To do</option>
                                        <option value='2'>In progress</option>
                                        <option value='3'>Test</option>
                                        <option value='4'>Cancel</option>
                                        <option value='5'>Finished</option>
                                        </select>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>Users</label>
                                        <MultiSelect
                                            options={userOptions}
                                            value={selectedUser}
                                            onChange={setSelectedUser}
                                            labelledBy="Select"
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

export default memo(ShowOneTask);