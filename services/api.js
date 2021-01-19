const axios = required('axios')

const axiosInstance = axios.create({
  url: 'http://localhost:3000/tools'
})

async function getAllTools() {
  return axios.get('/tools')
    .then((response) => response)
    .catch((err) => console.log('getAllTools', err))
}

async function searchTools() {
  return axios.get('tools?title=')
    .then((response) => response)
    .catch((err) => console.error('getAllTools', err))
}
export default {
  axiosInstance,
  getAllTools,
  searchTools
}