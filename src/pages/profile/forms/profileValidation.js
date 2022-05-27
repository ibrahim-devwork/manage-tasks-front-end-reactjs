const profileValidation = (form, action) => {
    let errors = {};

    switch (action){
        case 'change-infos' : 
                            if (form?.first_name?.length > 25) {
                                errors.first_name = "The first name must not be greater than 25 characters !";
                            }
                        
                            if (form?.last_name?.length > 25) {
                                errors.last_name = "The last name must not be greater than 25 characters !";
                            }
                        
                            if (form?.phone_number?.length > 15) {
                                errors.phone_number = "The phone number must not be greater than 15 characters !";
                            }
                            break;

        case 'change-email' :
                            if (!form?.email) {
                                errors.email = "The email is required !";
                            } else if (form?.email?.length < 3) {
                                errors.email = "The email must be at least 3 characters !";
                            }
                            else if (form?.email?.length > 22) {
                                errors.email = "The email must not be greater than 22 characters !";
                            }

                            if (!form?.password) {
                                errors.password = "The password is required !";
                            } else if (form?.password?.length < 6) {
                                errors.password = "The password must be at least 6 characters !";
                            }
                            else if (form?.password?.length > 50) {
                                errors.password = "The password must not be greater than 50 characters !";
                            }
                            break; 

        case 'change-username' :
                            if (!form?.username) {
                                errors.username = "The username is required !";
                            } else if (form?.username?.length < 3) {
                                errors.username = "The username must be at least 3 characters !";
                            }
                            else if (form?.username?.length > 22) {
                                errors.username = "The username must not be greater than 22 characters !";
                            }

                            if (!form?.password) {
                                errors.password = "The password is required !";
                            } else if (form?.password?.length < 6) {
                                errors.password = "The password must be at least 6 characters !";
                            }
                            else if (form?.password?.length > 50) {
                                errors.password = "The password must not be greater than 50 characters !";
                            }
                            break; 

        case 'change-password' :
                            if (!form?.new_password) {
                                errors.new_password = "The new_password is required !";
                            } else if (form?.new_password?.length < 6) {
                                errors.new_password = "The new_password must be at least 6 characters !";
                            }
                            else if (form?.new_password?.length > 50) {
                                errors.new_password = "The new_password must not be greater than 50 characters !";
                            }

                            if (!form?.current_password) {
                                errors.current_password = "The current_password is required !";
                            } else if (form?.current_password?.length < 6) {
                                errors.current_password = "The current_password must be at least 6 characters !";
                            }
                            else if (form?.current_password?.length > 50) {
                                errors.current_password = "The current_password must not be greater than 50 characters !";
                            }
                            
                            if (!form?.confirm_password) {
                                errors.confirm_password = "The confirm_password is required !";
                            } else if (form?.confirm_password?.length < 6) {
                                errors.confirm_password = "The confirm_password must be at least 3 characters !";
                            }
                            else if (form?.confirm_password?.length > 50) {
                                errors.confirm_password = "The confirm_password must not be greater than 22 characters !";
                            }
                            break; 
        default : {};
    }
    
    return errors;    
};

export default profileValidation;