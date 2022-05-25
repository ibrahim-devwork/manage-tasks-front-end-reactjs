import React, {memo, useEffect} from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector} from "react-redux";

const LineOfTaskTable = ({task, filter, setFilter, taskUpdate, setTaskUpdate}) => {
    // const dispatch      = useDispatch();
    // const projectData   = useSelector((state) => state.projectSlice);

    // const handleUpdate = () => {
    //     setProjectUpdate({
    //         ...taskUpdate,
    //         id : project?.id,
    //         name : project?.name,
    //         description : project?.description,
    //     })
    // }

    // useEffect(() => {
    //     if(projectData?.isDelete === 1) {
    //         setFilter({
    //             ...filter,
    //             search: '',
    //             pagination: filter.pagination,
    //             count_per_page: 10
    //         });
    //         Swal.fire(
    //             'Deleted!',
    //             'Your file has been deleted.',
    //             'success'
    //         );
    //     } else if (projectData?.isDelete === 2) {
    //         let message = '';
    //         if(projectData?.errors?.message){
    //             message = projectData?.errors?.message;
    //         }
    //         if(projectData?.errors?.id){
    //             message = projectData?.errors?.id;
    //         }
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'error',
    //             title: message,
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }
    // }, [projectData])

    // const handleDelete = () => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             dispatch(deleteProject(project?.id));
    //         }
    //       })
    // }

    return (
        <tr>
            <td>{task?.id}</td>
            <td>{task?.description} </td>
            <td>{task?.deadline}</td>
            <td>
                {task?.statut === 1 && <span className="badge bg-primary">To do</span>}
                {task?.statut === 2 && <span className="badge bg-warning">In pogress</span>}
                {task?.statut === 3 && <span className="badge bg-info">Test</span>}
                {task?.statut === 4 && <span className="badge bg-danger">Cancel</span>}
                {task?.statut === 5 && <span className="badge bg-success">Finished</span>}
            </td>
            <td>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-update-project">
                    <i className="nav-icon fas fa-pen"></i>
                </button>
                <span> </span>
                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modal-show-project">
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

export default memo(LineOfTaskTable);