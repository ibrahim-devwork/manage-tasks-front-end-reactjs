import React, {useEffect, memo, useState} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import '../Users.css';
import { getUsers } from '../../../store/users/userActions';
import { getDropDownActions, getDropDownRoles} from '../../../store/dropDownsData/dropDownsDataActions';
import LineOfUserTable from './LineOfUserTable';
import UserPagination from './UserPagination';
import UpdateUser from '../forms/UpdateUser';
import ShowOneUser from '../forms/ShowOneUser';

const UsersTable = ({ filter, setFilter }) => {
    const dispatch       = useDispatch();
    const userData       = useSelector(state => state.userSlice);
    const [userUpdate, setUserUpdate] = useState({});

    useEffect(() => {
        dispatch(getUsers(filter));
        dispatch(getDropDownActions());
        dispatch(getDropDownRoles());
    }, [dispatch, filter]);

    return (
        <div>
            {userData?.isLoading ? (
                <div className="spinner-border text-primary spinner-loading" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div>
                    {userData?.errorsGetData?.message ? (
                        <h1>{userData?.errorsGetData?.message}</h1>
                    ) : (
                        <div>
                            <table id="project-table" className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData?.users?.map((user, index) => (
                                        <LineOfUserTable 
                                        key={index} 
                                        user={user} 
                                        filter={filter}
                                        setFilter={setFilter}
                                        userUpdate={userUpdate} 
                                        setUserUpdate={setUserUpdate}
                                        />
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                            </table>
                            <br />
                            <UserPagination
                                className='pagination'
                                countPerPage={userData?.countPerPage}
                                filter={filter}
                                setFilter={setFilter}
                            /> 
                                                           
                        </div>
                    )}
                </div>
            )}
            <UpdateUser
                filter={filter}
                setFilter={setFilter}
                userUpdate={userUpdate} 
            /> 
            <ShowOneUser
            userUpdate={userUpdate} 
            />
        </div>
    )
}

export default memo(UsersTable);