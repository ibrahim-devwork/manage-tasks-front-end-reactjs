import React, {memo, useEffect} from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector} from "react-redux";
import { deleteTask } from "../../../store/tasks/taskActions";

const LineOfTaskTable = ({task, filter, setFilter, taskUpdate, setTaskUpdate}) => {
    const dispatch   = useDispatch();
    const taskData   = useSelector((state) => state.taskSlice);

    const handleUpdate = () => {
        setTaskUpdate({
            ...taskUpdate,
            id          : task?.id,
            description : task?.description,
            deadline    : task?.deadline,
            statut      : task?.statut,
            id_project  : task?.id_project,
            users       : task?.users
        })
    }

    useEffect(() => {
        if(taskData?.isDelete === 1) {
            setFilter({
                ...filter,
                search          : filter.search,
                id_project      : filter.id_project,
                statut          : filter.statut,
                pagination      : filter.pagination,
                count_per_page  : filter.count_per_page,
            });
            Swal.fire(
                'Deleted!',
                'Your task has been deleted.',
                'success'
            );
        } else if (taskData?.isDelete === 2) {
            let message = '';
            if(taskData?.errors?.message){
                message = taskData?.errors?.message;
            }
            if(taskData?.errors?.id){
                message = taskData?.errors?.id;
            }
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }, [taskData?.isDelete])

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTask(task?.id));
            }
          })
    }

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
                <button onClick={handleUpdate} type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-update-task">
                    <i className="nav-icon fas fa-pen"></i>
                </button>
                <span> </span>
                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modal-show-task">
                    <i className="nav-icon fas fa-eye"></i>
                </button>
                <span> </span>
                <button onClick={handleDelete} type="button" className="btn btn-danger">
                    <i className="nav-icon fas fa-trash"></i>
                </button>
            </td>
        </tr>
    );
}

export default memo(LineOfTaskTable);