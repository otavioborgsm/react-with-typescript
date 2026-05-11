import React from 'react'
import Header from './Header'
import Content from './Content'
import { UserContextProvider } from './UserContext'

const UseContextExercise = () => {
  return (
    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  )
}

export default UseContextExercise