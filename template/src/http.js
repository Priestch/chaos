import axios from 'axios'

let http = axios.create({
  // baseURL: '/api/v1',
})

// you may want to interceptors request & response
// refer to https://github.com/axios/axios#interceptors

export default http
