import React from 'react'
import { UiContextProvider } from './UiContext'
import Header from './Header'
import Content from './Content'

const UseContext = () => {
  return (
    <UiContextProvider>
      <Header />
      <Content />
    </UiContextProvider>
  )
}

export default UseContext