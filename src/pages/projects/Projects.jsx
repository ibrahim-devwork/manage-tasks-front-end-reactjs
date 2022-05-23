import React, { useState } from 'react';
import ProjectTable from './content/ProjectTable';
import './Projects.css';
import FilterProjects from './content/FilterProjects';

const Projects = () => {
    const [filter, setFilter] = useState({
        pagination : 1,
        search : "",
        count_per_page : 10
    });

    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>List of projects</h1>
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
                                    <FilterProjects  filter={filter} setFilter={setFilter} />
                                </div>
                                <div className="card-body">
                                   <ProjectTable  filter={filter} setFilter={setFilter} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
    )
}

export default Projects;