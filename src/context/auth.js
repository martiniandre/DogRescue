import React, { createContext, useState} from 'react';

const AuthContext = createContext({signed:false,user:{}});


export const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(() =>{
    const storageUser =   localStorage.getItem('user');
    const storageToken =  localStorage.getItem('token');
         if(!storageUser && !storageToken) {
          return null;
        }
       return JSON.parse(storageUser)

  });

  async function signOut() {
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
