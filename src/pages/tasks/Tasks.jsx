import React, {useState} from "react";
import './Tasks.css';
import TasksFilter from "./content/TasksFilter";
import TaskTable from "./content/TaskTable";

const Tasks = () => {
    const [filter, setFilter] = useState({
        pagination      : 1,
        id_project      : "0",
        statut          : "0",
        search          : "",
        count_per_page  : 10
    });

    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>List of tasks</h1>
                        </div>
                        <div className="col-sm-6">

                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <TasksFilter filter={filter} setFilter={setFilter}/>
                                </div>
                                <div className="card-body">
                                    <TaskTable  filter={filter} setFilter={setFilter} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tasks;