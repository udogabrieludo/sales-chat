import React,{createContext, useReducer} from 'react'
import { initial, salesReducer } from './reducer'

export const SalesContext = createContext([])

const Provider = ({children}) => {
  
  const [state, dispatch] = useReducer(salesReducer,initial )  

    return (
        <SalesContext.Provider value={{state, dispatch}}>
            {children}
        </SalesContext.Provider>
    )
}

export default Provider
