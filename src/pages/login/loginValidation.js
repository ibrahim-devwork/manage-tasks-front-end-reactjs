const loginValidation = (form) => {
    let errors = {};
    
    if (!form.username) {
        errors.username = "Email or username is required !";
    } else if (form.username.length < 3) {
        errors.username = "Email or username must be greater than 2 characters !";
    } else if (form.username.length > 50) {
        errors.username = "Email or username must be less than 50 characters !";
    }
    
    if (!form.password) {
        errors.password = "Password is required !";
    } else if (form.password.length < 6) {
        errors.password = "Password must be greater than 5 characters !";
    } else if (form.password.length > 50) {
        errors.password = "Password must be less than 50 characters !";
    }
    
    return errors;    
};

export default loginValidation;