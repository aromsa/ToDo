import React from 'react'
import './styles.scss'

const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="container">
        <div className="logo">
          ToDo
        </div>
      </div>
    </header>
  )
}
export default Header