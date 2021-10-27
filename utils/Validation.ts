import * as yup from 'yup';

export const globalValidationScheme = yup.object().shape({
  name: yup.string().required('Name is required'),
  code: yup
    .string()
    .required('OTP code is required')
    .min(1, 'Must be 6 digits')
    .max(6, 'Must be exactly 6 digits'),
  number: yup
    .string()
    .required('Mobile number is required')
    .min(1, 'Please enter a valid number')
    .max(10, 'Please enter a valid number'),
});