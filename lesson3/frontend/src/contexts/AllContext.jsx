import React, { useState } from 'react'


export const AuthContext = React.createContext()


export function AuthProvider({children}) {
  const [authUser,setAuthUser]= useState(null);
  const [cart,setCart]= useState([])

  return (
    <AuthContext.Provider value={{authUser,setAuthUser,cart,setCart}}>
      {children}
    </AuthContext.Provider>
  )
}

