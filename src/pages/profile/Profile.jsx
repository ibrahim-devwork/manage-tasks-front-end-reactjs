import React, {useEffect, useState} from "react";
import './Profile.css';
import ChangePersonalInformation from './forms/ChangePersonalInformation';
import ChangeEmail from './forms/ChangeEmail';
import ChangeUsername from './forms/ChangeUsername';
import ChangePassword from './forms/ChangePassword';
import { useDispatch } from "react-redux";
import { getProfile } from "../../store/profile/profileActions";

const Profile = () => {
    const [isChange, setIsChange] = useState(false);
    const dispatch                = useDispatch();
    
    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch, isChange]);

    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1></h1>
                        </div>
                        <div className="col-sm-6">

                        </div>
                    </div>
                </div>
            </section>
            
            <div className="container" style={{ width :'38%' }}>
            <ChangePersonalInformation
            setIsChange={setIsChange}
            />
            <br/>
            
            <ChangeEmail />
            <br />
            <ChangeUsername />
            <br />
            <ChangePassword /> 
           
            <br /><br />
            </div>
            
        </div>
    )
}
export default Profile;