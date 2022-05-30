
import React, {memo, useEffect} from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector} from "react-redux";
import { deleteUser } from "../../../store/users/userActions";

const LineOfUserTable = ({user, filter, setFilter, userUpdate, setUserUpdate}) => {
    const dispatch      = useDispatch();
    const userData      = useSelector(state => state.userSlice);

    const handleUpdate = () => {
        setUserUpdate({
            ...userUpdate,
            id : user?.id,
            username : user?.username,
            email : user?.email,
            id_role : user?.id_role,
            actions : user?.actions,
        })
    }

    useEffect(() => {
        if(userData?.isDelete === 1) {
            setFilter({
                ...filter,
                search: '',
                pagination: filter?.pagination,
                count_per_page: filter?.count_per_page,
            });
            Swal.fire(
                'Deleted!',
                'Your user has been deleted.',
                'success'
            );
        } else if (userData?.isDelete === 2) {
            let message = '';
            if(userData?.errors?.message){
                message = userData?.errors?.message;
            }
            if(userData?.errors?.id){
                message = userData?.errors?.id;
            }
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }, [userData])

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
                dispatch(deleteUser(user?.id));
            }
          })
    }

    return (
        <tr>
            <td>{user?.id}</td>
            <td>{user?.username} </td>
            <td>{user?.email}</td>
            <td>
                {user?.id_role === 2 && <span className="badge bg-warning">{user?.role}</span>}
                {user?.id_role === 3 && <span className="badge bg-primary">{user?.role}</span>}
            </td>
            <td>
                <button onClick={handleUpdate} type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-update-user">
                    <i className="nav-icon fas fa-pen"></i>
                </button>
                <span> </span>
                <button onClick={handleUpdate} type="button" className="btn btn-info" data-toggle="modal" data-target="#modal-show-user">
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

export default memo(LineOfUserTable);