import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/'
})

// async function getAllTools() {
//   return axios.get('/tools')
//     .then((response) => response)
//     .catch((err) => console.log('getAllTools', err))
// }

// async function searchTools() {
//   return axios.get('tools?title=')
//     .then((response) => response)
//     .catch((err) => console.error('getAllTools', err))
// }
export default axiosInstance