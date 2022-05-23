import React, {useState} from 'react';

const FilterProjects = ({ filter, setFilter }) => {
    const [filterForm, setFilterForm] = useState({
        search: "",
      });

    const handleChange = (event) => {
    setFilterForm({ ...filterForm, [event.target.name]: event.target.value });
    };

    const handleFilter = (event) => {
        event.preventDefault();
        setFilter({
            ...filter,
            search: filterForm.search,
            pagination: 1,
            count_per_page: 10
        });
    }

    return (
    <div>
        <div className="row">
            <div className="col-md-4 md-2">
                <form onSubmit={handleFilter}>
                    <div className="input-group input-group-lg">
                        <input
                        name='search'
                        value={filterForm.search}
                        onChange={handleChange}
                        type="search" className="form-control form-control-lg" placeholder="Type your keywords here"/>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-lg btn-default">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-8">
                <button className='add-new-btn btn btn-primary'>
                <i className="nav-icon fas fa-plus"></i>
                <span> </span>
                    Add new
                </button>
            </div>
        </div>
    </div>
    )
}

export default FilterProjects;