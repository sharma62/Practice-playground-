import * as yup from 'yup'

export const dataValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email('Email is not valid').required("Email is required"),
    phone:yup.string().required("Phone number is required"),
    password:yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
})
