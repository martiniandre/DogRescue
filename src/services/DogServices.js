import api from './api'

export default {
  async ListDogs(limit,state){
      return await api.get(`/dogs/${limit}`).then(resp => state(resp.data))

}}
