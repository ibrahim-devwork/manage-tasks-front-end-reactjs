import React, {useEffect, memo, useState} from 'react';
import LineOfProjctTable from './LineOfProjctTable';
import { useDispatch , useSelector} from 'react-redux';
import { getProjects } from '../../../store/projects/projectActions';
import '../Projects.css';
import PaginationProjects from './PaginationProjects';
import UpdateProject from '../forms/UpdateProject';

const ProjectTable = ({ filter, setFilter }) => {
    const dispatch              = useDispatch();
    const projectsData          = useSelector(state => state.projectSlice);
    const [projectUpdate, setProjectUpdate] = useState({});

    useEffect(() => {
        dispatch(getProjects(filter));
    }, [dispatch, filter]);

    return (
        <div>
            {projectsData?.isLoading ? (
                <div className="spinner-border text-primary spinner-loading" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div>
                    {projectsData?.errorsGetData?.message ? (
                        <h1>{projectsData?.errorsGetData?.message}</h1>
                    ) : (
                        <div>
                            <table id="project-table" className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projectsData?.projects?.map((project, index) => (
                                        <LineOfProjctTable 
                                        key={index} 
                                        project={project} 
                                        filter={filter}
                                        setFilter={setFilter}
                                        projectUpdate={projectUpdate} 
                                        setProjectUpdate={setProjectUpdate}
                                        />
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                            </table>
                            <br />
                            <PaginationProjects
                                className='pagination'
                                countPerPage={projectsData?.countPerPage}
                                filter={filter}
                                setFilter={setFilter}
                            /> 
                                                           
                        </div>
                    )}
                </div>
            )}
            <UpdateProject
                filter={filter}
                setFilter={setFilter}
                projectUpdate={projectUpdate} 
                setProjectUpdate={setProjectUpdate}
            /> 
        </div>
    )
}

export default memo(ProjectTable);