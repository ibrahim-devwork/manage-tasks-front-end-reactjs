import React, {useState, memo, useEffect, useRef} from 'react';
import axiosInstance from '../../../helpers/axiosInstance';
import AddNewTask from '../forms/AddNewTask';
import { useDispatch, useSelector } from 'react-redux';
import { getDropDownProjects, getDropDownUsers } from '../../../store/dropDownsData/dropDownsDataActions';

const TasksFilter = ({ filter, setFilter }) => {
    const dispatch      = useDispatch();
    const id_project    = useRef(filter?.id_project);
    const statut        = useRef(filter?.statut);
    const projects      = useSelector(state => state.dropDownsDataSlice.projects);

    const [filterForm, setFilterForm] = useState({
        search      : "",
        id_project  : "",
        statut      : ""
      });
   
    useEffect( () => {
        dispatch(getDropDownProjects());
        dispatch(getDropDownUsers());
    }, [dispatch]);

    const handleChange = (event) => {
    setFilterForm({ ...filterForm, [event.target.name]: event.target.value });
    };

    const handleFilter = (event) => {
        event.preventDefault();
        setFilter({
            ...filter,
            search      : filterForm.search,
            id_project  : id_project.current.value,
            statut      : statut.current.value,
            pagination  : 1,
        });
    }

    return (
    <div>
       
        <div className="row">
                <div className="col-md-3 md-2">
                    <form onSubmit={handleFilter}>
                    <div className="input-group">
                        <input
                            name='search'
                            value={filterForm.search}
                            onChange={handleChange}
                            type="search" className="form-control" placeholder="Type your keywords here" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-default">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="col-md-3 md-2">
                    <div className="input-group">
                        <select 
                        className="form-control select2bs4"
                        name="id_project"
                        ref={id_project}
                        onChange={handleFilter}
                        value={filter?.id_project}
                        >
                            <option value='0'>All projects</option>
                            {projects?.map((project, index) => (
                                <option key={index} value={project.id}>{project.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-3 md-2">
                    <div className="input-group">
                        <select 
                        className="form-control select2bs4"
                        name="statut"
                        ref={statut}
                        onChange={handleFilter}
                        value={filter?.statut}
                        >
                            <option value='0'>All status</option>
                            <option value='1'>To do</option>
                            <option value='2'>In progress</option>
                            <option value='3'>Test</option>
                            <option value='4'>Cancel</option>
                            <option value='5'>Finished</option>
                        </select>
                    </div>
                </div>
            <div className="col-md-3">
                <AddNewTask filter={filter} setFilter={setFilter}/>
            </div>
        </div>
       
    </div>
    )

}

export default memo(TasksFilter);