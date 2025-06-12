import * as yup from 'yup'

export const validateStepOneSchema = yup.object().shape({
        fname:yup.string().required('fill your name'),
        contact:yup.string().max(10,"phone no max 10 digit ").required("required"),
        age:yup.string().required("required")
})

export const validateStepTwoSchema =yup.object().shape({
        exp:yup.string().required("Mandatory"),
        skills:yup.string().required("Manddatory")
})

export const validateStepThreeSchema = yup.object().shape({
        notice:yup.string().required("Mandatory"),
        sign:yup.string().required("Mandatory")
})