import React from 'react'
import { useUi } from './UiContext'

const Header = () => {
  const { dark, setDark } = useUi();
  return (
    <div>
      <h2>Use Context: {dark ? "dark" : "light"}</h2>
      <button onClick={() => setDark(!dark)}>Mode</button>
    </div>
  )
}

export default Header