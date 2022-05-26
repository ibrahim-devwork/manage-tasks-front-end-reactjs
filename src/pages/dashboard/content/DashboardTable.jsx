import React, {useEffect, memo, useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import '../Dashboard.css';
import TaskCard from './TaskCard';
import { getDashboard } from '../../../store/dashboard/dashboardActions';
import DashboardPagination from './DashboardPagination';

const DashboardTable = ({ filter, setFilter }) => {
    const dispatch          = useDispatch();
    const dashboardData     = useSelector(state => state.dashboardSlice);
    const listToDo          = dashboardData?.tasks?.filter((task) => (task?.statut === 1));
    const listInProgress    = dashboardData?.tasks?.filter((task) => (task?.statut === 2));
    const listTest          = dashboardData?.tasks?.filter((task) => (task?.statut === 3));
    const listCancel        = dashboardData?.tasks?.filter((task) => (task?.statut === 4));
    const listFinished      = dashboardData?.tasks?.filter((task) => (task?.statut === 5));
    
    useEffect(() => {
        dispatch(getDashboard(filter));
    }, [dispatch, filter]);

    return (
        <div>
            {dashboardData?.isLoading ? (
                <div className="spinner-border text-primary spinner-loading" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div>
                    {dashboardData?.errorsGetData?.message ? (
                        <h1>{dashboardData?.errorsGetData?.message}</h1>
                    ) : (
                        <div>
                            <div className='row'>
                                
                                <div className="col">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                                <h3 className="card-title">To do</h3>

                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                        </div>
                                            <div className="card-body">
                                            {/* ---------------------------- Body ---------------------------- */}
                                                {listToDo?.map((toDo, index) => (
                                                    <TaskCard key={index} task={toDo}/>
                                                ))}
                                            {/* ---------------------------- Body ---------------------------- */}
                                            </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-warning">
                                        <div className="card-header">
                                                <h3 className="card-title">In progress</h3>

                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                            {/* ---------------------------- Body ---------------------------- */}
                                            {listInProgress?.map((toDo, index) => (
                                                    <TaskCard key={index} task={toDo}/>
                                                ))}
                                            {/* ---------------------------- Body ---------------------------- */}
                                            </div>
                                        </div>
                                </div>
                                <div className="col">
                                    <div className="card card-info">
                                        <div className="card-header">
                                                <h3 className="card-title">Test</h3>

                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                            {/* ---------------------------- Body ---------------------------- */}
                                            {listTest?.map((toDo, index) => (
                                                    <TaskCard key={index} task={toDo}/>
                                                ))}
                                            {/* ---------------------------- Body ---------------------------- */}
                                            </div>
                                        </div>
                                </div>
                                <div className="col">
                                    <div className="card card-danger">
                                        <div className="card-header">
                                                <h3 className="card-title">Cancel</h3>

                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                            {/* ---------------------------- Body ---------------------------- */}
                                            {listCancel?.map((toDo, index) => (
                                                    <TaskCard key={index} task={toDo}/>
                                                ))}
                                            {/* ---------------------------- Body ---------------------------- */}
                                            </div>
                                        </div>
                                </div>
                                <div className="col">
                                    <div className="card card-success">
                                        <div className="card-header">
                                                <h3 className="card-title">Finished</h3>

                                                <div className="card-tools">
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                            {/* ---------------------------- Body ---------------------------- */}
                                            {listFinished?.map((toDo, index) => (
                                                    <TaskCard key={index} task={toDo}/>
                                                ))}
                                            {/* ---------------------------- Body ---------------------------- */}
                                            </div>
                                        </div>
                                </div>

                            </div>
                            <br />
                            <DashboardPagination
                                className='pagination'
                                countPerPage={dashboardData?.countPerPage}
                                filter={filter}
                                setFilter={setFilter}
                            /> 
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default memo(DashboardTable);