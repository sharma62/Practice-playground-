import * as yup from 'yup'

export const formValidationSchema = yup.object().shape({
    name:yup.string().required('Name is Required !'),
    email:yup.string().email('email is not Valid').required('Email is Required !'),
    password:yup.string().min(8, 'Password must be at least 8 characters long').required('Password is Required !'),
    cnfPassword:yup.string().oneOf([yup.ref('password'), null], 'Password must match').required('Confirm Password is Required !'),
})