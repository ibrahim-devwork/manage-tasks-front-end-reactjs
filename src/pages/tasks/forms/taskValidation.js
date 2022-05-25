const projectValidation = (form, selectedUser) => {
    let errors = {};

    if (!form.description) {
        errors.description = "The description is required !";
    } else if (form.description.length > 300) {
        errors.description = "The description must not be greater than 300 characters !";
    }

    if (!form.deadline) {
        errors.deadline = "The deadline is required !";
    }

    if (!form.statut) {
        errors.statut = "The statut is required !";
    } else if (form.statut < 1) {
        errors.statut = "Choice one satut !";
    }

    if (!form.id_project) {
        errors.id_project = "The project is required !";
    } else if (form.id_project < 1) {
        errors.id_project = "Choice one project !";
    }

    if (selectedUser.length === 0) {
        errors.users = "The users is required !";
    }
    
    return errors;    
};

export default projectValidation;