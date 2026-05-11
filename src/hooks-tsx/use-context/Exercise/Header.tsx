import React from 'react'
import { useUser } from './UserContext'

const Header = () => {
  const { data } = useUser();
  return (
    <div>
      <h2>Use Context Exercise</h2>
      <h2>{data?.nome}</h2>
    </div>
  )
}

export default Header