const axios = required('axios')

const axiosInstance = axios.create({
  url: 'http://localhost:3000/tools'
})

export default axiosInstance