import * as Yup from 'yup'

export const schemaTodo = Yup.object({
  taskName: Yup.string().max(300).required("Taskname is required")
})


export const schemaLogin = Yup.object({
  username: Yup.string().max(30).required("Username is required"),
  password: Yup.string().max(20).required("Password is required"),
})