import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getIdByName = (name) => {
  const request = axios.get(baseUrl)
 
  const person =  request.then(response => response.data.find(name))
  const id = person.id
  return id
}

const createPerson = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const updatePerson = (id, newObject) => {
  // const request = axios.put(`${baseUrl}/${id}`, newObject)
  // return request.then(response => response.data)
}

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
export { getAll, createPerson, updatePerson, deletePerson }