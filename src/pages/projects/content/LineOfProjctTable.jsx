
import React, {memo} from "react";
import UpdateProject from "../forms/UpdateProject";

const LineOfProjctTable = ({project, filter, setFilter, projectUpdate, setProjectUpdate}) => {
    
    const handleUpdate = () => {
        setProjectUpdate({
            ...projectUpdate,
            id : project?.id,
            name : project?.name,
            description : project?.description,
        })
    }

    return (
        <tr>
            <td>{project?.id}</td>
            <td>{project?.name} </td>
            <td>{project?.description}</td>
            <td>
                <button onClick={handleUpdate} type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-update-project">
                    <i className="nav-icon fas fa-pen"></i>
                </button>
                <span> </span>
                <button type="button" className="btn btn-info">
                    <i className="nav-icon fas fa-eye"></i>
                </button>
                <span> </span>
                <button type="button" className="btn btn-danger">
                    <i className="nav-icon fas fa-trash"></i>
                </button>
            </td>
        </tr>
    );
}

export default memo(LineOfProjctTable);