import React, {useState, useEffect, useRef} from "react";
import { useSelector, useDispatch} from "react-redux";
import { changeInfos } from "../../../store/profile/profileActions";
import profileValidation from "./profileValidation";
import Swal from 'sweetalert2';

const ChangePersonalInformation = ({setIsChange}) => {
    const userData      = useSelector(state => state.profileSlice);
    const dispatch      = useDispatch();
    const profileImgRef = useRef();
    const [infosErrValidate, setInfosErrValidate] = useState({});
    
    const [formInfos, setFormInfos] = useState({
            first_name      : '',
            last_name       : '',
            phone_number    : '',
            image           : '',
    });

    useEffect(() => {
        setFormInfos({
            ...formInfos,
            first_name      : (userData?.user?.first_name ? userData?.user?.first_name : ''),
            last_name       : (userData?.user?.last_name ? userData?.user?.last_name : ''),
            phone_number    : (userData?.user?.phone_number ? userData?.user?.phone_number : ''),
            image           : userData?.user?.image,
        })
    }, [userData?.user])

    const handleChange = (event) => {
        setFormInfos({...formInfos, [event.target.name] : event.target.value});
    }

    // Preview image
    const handleSelectedImg = (event) => {
        // Assuming only image
        var file = event.target.files[0];
        var reader = new FileReader();
        if (file) {
        var url = reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            setFormInfos({ ...formInfos, image: reader.result });
        };
        } 
        // else {
        //     setFormInfos({ ...formInfos, image: "https://via.placeholder.com/150" });
        // }
    }

    useEffect(() => {
        if (userData?.isInfos === true) {
            setIsChange(true);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your information personal has been updated',
                showConfirmButton: false,
                timer: 1500
            });
          profileImgRef.current.value = "";
        }
    }, [userData]);

    // Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();

        let errorsV = {};
        errorsV = profileValidation(formInfos, 'change-infos');
        setInfosErrValidate(errorsV);

        if (Object.keys(errorsV).length === 0) {
        const formData = new FormData();
          formData.append("first_name", formInfos?.first_name);
          formData.append("last_name", formInfos?.last_name);
          formData.append("phone_number", formInfos?.phone_number);

        if (profileImgRef.current.files[0]) {
            formData.append("image", profileImgRef.current.files[0]);
        }
        dispatch(changeInfos(formData));
        }
    };

    return (
        <div className="card card-info">
            <div className="card-header">
                <h3 className="card-title">Personal information </h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className="row">
                        
                        <div className="col-md-3">
                            <div>
                                <img src={formInfos?.image} alt="user-avatar" className="img-circle img-fluid image-profile"/>
                            </div>
                        </div>

                        <div className="col-md-9">
                            {userData?.errors?.message &&
                                <div>
                                    <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.message}</span><br />
                                </div>
                            }

                            <div className="form-group">
                                <label htmlFor="first_name">First name</label>
                                <input
                                value={formInfos?.first_name} 
                                onChange={handleChange}
                                name='first_name'
                                type="text" 
                                className="form-control" 
                                id="first_name" 
                                placeholder="Enter the first name" 
                                />
                                {infosErrValidate?.first_name &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.first_name}</span><br />
                                            </div>
                                }
                                {userData?.errors?.first_name &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.first_name}</span><br />
                                    </div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="last_name">Last name</label>
                                <input 
                                value={formInfos?.last_name} 
                                onChange={handleChange}
                                name='last_name'
                                type="text" 
                                className="form-control" 
                                id="last_name" 
                                placeholder="Enter the last name" 
                                />
                                {infosErrValidate?.last_name &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.last_name}</span><br />
                                            </div>
                                }
                                {userData?.errors?.last_name &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.last_name}</span><br />
                                    </div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone_number">Phone number</label>
                                <input 
                                value={formInfos?.phone_number} 
                                onChange={handleChange}
                                name='phone_number'
                                type="text" 
                                className="form-control" 
                                id="phone_number" 
                                placeholder="Enter the last name" 
                                />
                                {infosErrValidate?.phone_number &&
                                            <div>
                                                <span style={{ color: 'red', fontSize: '14px' }}>{infosErrValidate?.phone_number}</span><br />
                                            </div>
                                }
                                {userData?.errors?.phone_number &&
                                    <div>
                                        <span style={{ color: 'red', fontSize: '14px' }}>{userData?.errors?.phone_number}</span><br />
                                    </div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Image</label>
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input 
                                        onChange={handleSelectedImg}
                                        ref={profileImgRef}
                                        type="file" 
                                        className="custom-file-input" 
                                        id="exampleInputFile" />
                                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose image</label>
                                    </div>
                                    <div className="input-group-append">
                                        <span className="input-group-text">Upload</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card-footer">
                    <button style={{ float : 'right' }} type="submit" className="btn btn-info">Save changes</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePersonalInformation;