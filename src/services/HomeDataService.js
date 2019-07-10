import axios from 'axios'

// 傳出  分離式寫法
export default {
  index () {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
  },
  indexById (id) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }
}
