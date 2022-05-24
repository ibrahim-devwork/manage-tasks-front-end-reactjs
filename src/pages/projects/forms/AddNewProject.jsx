import React, {memo, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import projectValidation from './projectValidation';
import { createProject } from '../../../store/projects/projectActions';
import Swal from 'sweetalert2';

const AddNewProject = ({filter, setFilter}) => {
    const dispatch      = useDispatch();
    const projectData   = useSelector(state => state.projectSlice);
    const [projectValideted, setProjectValideted] = useState({});
    const [form, setForm] = useState({
        name : '',
        description : ''
    });

    const handleChange = (event) => {
        setForm({...form, [event.target.name] : event.target.value});
    }

    useEffect(() => {
        if(projectData?.isDone === true){
            setForm({...form, name : '', description : ''});
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your project has been saved',
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
    }, [projectData?.isDone])

    const hadleClear = () => {
        setForm({...form, name : '', description : ''});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let projectValidErr = {};
        projectValidErr = projectValidation(form);
        setProjectValideted(projectValidErr);

        if (Object.keys(projectValidErr).length === 0) {
            dispatch(createProject(form));
        }
    }

    return (
        <div>
            <button className='add-new-btn btn btn-primary' data-toggle="modal" data-target="#add-new-project">
                <i className="nav-icon fas fa-plus"></i>
                <span> </span>
                    Add new
            </button>

            <div className="modal fade" id="add-new-project">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add new project</h4>
                            <button onClick={hadleClear} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {projectData?.errors?.message &&
                                <div>
                                    <span style={{ color: 'red', fontSize: '14px' }}>{projectData?.errors?.message}</span><br />
                                </div>
                            }

                            {/* Modal body */}
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="projectName">Name</label>
                                        <input 
                                        onChange={handleChange}
                                        name='name'
                                        value={form.name}
                                        type="text" 
                                        className="form-control" 
                                        id="projectName" 
                                        placeholder="Enter name" />
                                        {projectValideted?.name &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{projectValideted?.name}</span><br />
                                            </div>
                                        }
                                        {projectData?.errors?.name &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{projectData?.errors?.name}</span><br />
                                            </div>
                                        }
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor='description'>Description</label>
                                        <textarea 
                                        value={form.description}
                                        onChange={handleChange}
                                        name='description'
                                        className="form-control" 
                                        rows="6" 
                                        id='description' 
                                        placeholder="Enter description"/>
                                        {projectValideted?.description &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{projectValideted?.description}</span><br />
                                            </div>
                                        }
                                        {projectData?.errors?.description &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{projectData?.errors?.description}</span><br />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </form>
                            {/* Modal body */}
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button onClick={hadleClear} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} type="submit" className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(AddNewProject);