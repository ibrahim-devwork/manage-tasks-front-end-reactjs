import React, {useState} from 'react';
import DashboardTable from './content/DashboardTable';

const Dashboard = () => {
    
    const [filter, setFilter] = useState({
        search          : "",
        count_per_page  : 15
    });

    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Dashboard</h1>
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
                                <div className="card-body">
                                    <DashboardTable  filter={filter} setFilter={setFilter} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;