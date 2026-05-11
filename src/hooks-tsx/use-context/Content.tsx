import React from 'react'
import { useUi } from './UiContext';

const Content = () => {
  const { dark } = useUi();

  return (
    <div>{dark ? "dark" : "light"}</div>
  )
}

export default Content