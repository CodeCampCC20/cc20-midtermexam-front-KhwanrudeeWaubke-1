import axios from "axios"

const todoApi = {}

const BASEURL = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1"

todoApi.createTodo = (input) => {
  return axios.post(`${BASEURL}/todos`,input)
}

todoApi.getTodos = (id) => {
  return axios.get(`${BASEURL}/todos/${id}`)
}

todoApi.deleteTodo = (id, userId) => {
  return axios.delete(`${BASEURL}/todos/${id}/${userId}`)
}

todoApi.updateTodo = (id, userId, input) => {
  return axios.patch(`${BASEURL}/todos/${id}/${userId}`, input)
}



export default todoApi