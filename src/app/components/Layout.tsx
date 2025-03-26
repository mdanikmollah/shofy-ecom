"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store,persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Mainloader from './Mainloader'
import { SessionProvider } from 'next-auth/react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
   <SessionProvider>
     <Provider store={store}>
      <PersistGate loading={<Mainloader/>} persistor={persistor}>
      {children}
      </PersistGate>
    </Provider>
   </SessionProvider>
  )
}

export default Layout