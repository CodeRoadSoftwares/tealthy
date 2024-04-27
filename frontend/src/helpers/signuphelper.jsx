export const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 25 || values.name.length < 4) {
        errors.name = 'Name is too small or big';
    }

    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 15 || values.username.length < 4) {
        errors.username = 'Must be less than 20 charcters and greater than 4 characters';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.phone) {
        errors.phone = 'Required';
    } else if(values.phone.length != 10){
        errors.phone = 'Invalid phone number length'
    }

    if(!values.address) {
        errors.address = 'Required';
    }

    if(!values.password) {
        errors.password = 'Required'
    } else if(values.password.length < 6){
        errors.password = 'password too small'
    }

    if(!values.confirmpassword) {
        errors.confirmpassword = 'Required'
    } else if(values.password != values.confirmpassword){
        errors.confirmpassword = 'Passwords dont match'
    }

    return errors;
}

export const FormError = ({ errorMessage }) => {
    return (
        <div className="text-error text-xs leading-3 p-0">{errorMessage}*</div>
    )
}