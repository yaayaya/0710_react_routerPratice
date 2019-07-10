import axios from 'axios'
// import store from '@/store/store'

export default () => {
  return axios.create({
    // baseURL: `https://parkback0507.herokuapp.com/` 
  })
}
