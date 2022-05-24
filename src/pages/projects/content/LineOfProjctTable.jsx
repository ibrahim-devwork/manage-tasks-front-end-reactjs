
import React, {memo} from "react";

const LineOfProjctTable = ({project}) => {
    return (
        <tr>
            <td>{project?.id}</td>
            <td>{project?.name} </td>
            <td>{project?.description}</td>
            <td>
                <button type="button" className="btn btn-success">
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