const projectValidation = (form) => {
    let errors = {};
    
    if (!form.name) {
        errors.name = "The name is required !";
    } else if (form.name.length > 100) {
        errors.name = "The name must not be greater than 100 characters !";
    }
    
    if (!form.description) {
        errors.description = "The description is required !";
    } else if (form.description.length > 60000) {
        errors.description = "The description must not be greater than 60000 characters !";
    }
    
    return errors;    
};

export default projectValidation;