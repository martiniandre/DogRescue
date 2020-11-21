import api from './api'


export default {
  async CreateUser(userData){
    try{
      const { data } = await api.post('/user',userData)
      localStorage.setItem('token','Bearer '+data.token)
      return data;
    }catch(err){
        console.log(err);
    }}
}
