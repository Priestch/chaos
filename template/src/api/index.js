import http from './http'

export default {
  // add api request here
  demoRequest() {
    http.get("/")
  }
}
