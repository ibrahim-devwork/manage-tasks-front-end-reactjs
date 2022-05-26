import React, {useEffect, memo, useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import '../Tasks.css';
import LineOfTaskTable from './LineOfTaskTable';
import {getTasks} from '../../../store/tasks/taskActions';
import TaskPagination from './TaskPagination';
import UpdateTask from '../forms/UpdateTask';
import ShowOneTask from '../forms/ShowOneTask';

const TaskTable = ({ filter, setFilter }) => {
    const dispatch      = useDispatch();
    const tasksData     = useSelector(state => state.taskSlice);
    const [taskUpdate, setTaskUpdate] = useState({});

    useEffect(() => {
        dispatch(getTasks(filter));
    }, [dispatch, filter]);

    return (
        <div>
            {tasksData?.isLoading ? (
                <div className="spinner-border text-primary spinner-loading" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div>
                    {tasksData?.errorsGetData?.message ? (
                        <h1>{tasksData?.errorsGetData?.message}</h1>
                    ) : (
                        <div>
                            <table id="task-table" className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Description</th>
                                        <th>Deadline</th>
                                        <th>Statut</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasksData?.tasks?.map((task, index) => (
                                        <LineOfTaskTable 
                                        key={index} 
                                        task={task} 
                                        filter={filter}
                                        setFilter={setFilter}
                                        taskUpdate={taskUpdate} 
                                        setTaskUpdate={setTaskUpdate}
                                        />
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Description</th>
                                        <th>Deadline</th>
                                        <th>Statut</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                            </table>
                            <br />
                            <TaskPagination
                                className='pagination'
                                countPerPage={tasksData?.countPerPage}
                                filter={filter}
                                setFilter={setFilter}
                            /> 
                                                           
                        </div>
                    )}
                </div>
            )}
             <UpdateTask
                filter={filter}
                setFilter={setFilter}
                taskUpdate={taskUpdate} 
            /> 
            <ShowOneTask
            taskUpdate={taskUpdate} 
            /> 
        </div>
    )
}

export default memo(TaskTable);