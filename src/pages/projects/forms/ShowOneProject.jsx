import React, {memo, useState, useEffect} from 'react';

const ShowOneProject = ({projectUpdate}) => {
    const [form, setForm]   = useState({
        id : '',
        name : '',
        description : ''
    });

    useEffect(()=>{
        if(projectUpdate?.id)
        setForm({...form, id : projectUpdate?.id, name : projectUpdate?.name, description : projectUpdate?.description});
    }, [projectUpdate])

    return (
        <div> 
            <div className="modal fade" id="modal-show-project">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Details of this project</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Modal body */}
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="projectName">Name</label>
                                        <input 
                                        readOnly
                                        value={form?.name}
                                        name='name'
                                        type="text" 
                                        className="form-control" 
                                        id="projectName" 
                                        placeholder="Enter name" 
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor='description'>Description</label>
                                        <textarea 
                                        readOnly
                                        value={form?.description}
                                        name='description'
                                        className="form-control" 
                                        rows="6" 
                                        id='description' 
                                        placeholder="Enter description"
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

export default memo(ShowOneProject);