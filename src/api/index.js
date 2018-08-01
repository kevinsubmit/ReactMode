import axios from '../util/request'

export const Login = (params) => axios.post('user/signdemo', params)