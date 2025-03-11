"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store,persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Mainloader from './Mainloader'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Mainloader/>} persistor={persistor}>
      {children}
      </PersistGate>
      </Provider>
  )
}

export default Layout