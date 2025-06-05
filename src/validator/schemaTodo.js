import * as Yup from 'yup'

export const schemaTodo = Yup.object({
  taskName: Yup.string().max(300).required("Taskname is required")
})


export const schemaLogin = Yup.object({
  email: Yup.string().email().max(30).required("Email is required"),
  password: Yup.string().max(20).required("Password is required"),
})