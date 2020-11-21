import api from './api'

export default {
   SignIn(userData,modal,callback,reset){
    api.post('/auth',userData).then(resp => {
      if(!localStorage.getItem('token')){
        localStorage.setItem('token','Bearer '+resp.data.token)
    }
    localStorage.setItem('user',JSON.stringify(resp.data.user))
    callback("")
    modal(true);

  }).catch(err => {
    callback(err.response.data.error)
    reset()
  })
}}

