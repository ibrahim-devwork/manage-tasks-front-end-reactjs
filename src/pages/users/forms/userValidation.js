const userValidation = (form, action) => {
    let errors = {};


    if (!form?.username) {
        errors.username = "The username is required !";
    } else if (form?.username?.length < 3) {
        errors.username = "The username must be at least 3 characters !";
    }
    else if (form?.username?.length > 22) {
        errors.username = "The username must not be greater than 22 characters !";
    }

    if (!form?.email) {
        errors.email = "The email is required !";
    } else if (form?.email?.length < 3) {
        errors.email = "The email must be at least 3 characters !";
    } else if (form?.email?.length > 22) {
        errors.email = "The email must not be greater than 22 characters !";
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form?.email))){
        errors.email = "The email format invalid !";
    }

    
    if (form?.id_role < 1) {
        errors.id_role = "The role is required !";
    }

    switch (action){
        case 'add-new' : 
                        if (!form?.password) {
                            errors.password = "The password is required !";
                        } else if (form?.password?.length < 6) {
                            errors.password = "The password must be at least 6 characters !";
                        }
                        else if (form?.password?.length > 50) {
                            errors.password = "The password must not be greater than 50 characters !";
                        }

                        if (!form?.confirm_password) {
                            errors.confirm_password = "The confirm password is required !";
                        } else if (form?.confirm_password?.length < 6) {
                            errors.confirm_password = "The confirm password must be at least 3 characters !";
                        }
                        else if (form?.confirm_password?.length > 50) {
                            errors.confirm_password = "The confirm password must not be greater than 22 characters !";
                        }

                        if(form?.password != form?.confirm_password) {
                            errors.comparingPasswords = "Yours passwords do not match !";
                        }
                        break;

        case 'update' :
                        if(form?.password){
                            if (!form?.password) {
                                errors.password = "The password is required !";
                            } else if (form?.password?.length < 6) {
                                errors.password = "The password must be at least 6 characters !";
                            }
                            else if (form?.password?.length > 50) {
                                errors.password = "The password must not be greater than 50 characters !";
                            }
    
                            if (!form?.confirm_password) {
                                errors.confirm_password = "The confirm password is required !";
                            } else if (form?.confirm_password?.length < 6) {
                                errors.confirm_password = "The confirm password must be at least 3 characters !";
                            }
                            else if (form?.confirm_password?.length > 50) {
                                errors.confirm_password = "The confirm password must not be greater than 22 characters !";
                            }
    
                            if(form?.password != form?.confirm_password) {
                                errors.comparingPasswords = "Yours passwords do not match !";
                            }
                        }
                        break;  
        default : {};
    }
    
    return errors;    
};

export default userValidation;