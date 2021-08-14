import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Link to='/'>
    <div>
      <h1 className="text-center text-success mt-3 mb-4">Cryptocurrency Watcher</h1>
    </div>
    </Link>
  )
}

export default Header
