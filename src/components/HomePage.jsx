import React, { useContext } from 'react'

import { Link } from 'react-router-dom'

import { ThemeContext } from '../App'

function HomePage() {
  const theme = useContext(ThemeContext)
  return (
    <div className='w-full justify-center flex'>
      <h1
        className={`text-5xl font-bold text-center leading-[64px] ${
          theme === 'Default' ? ' text-black' : 'text-red-600'
        }`}
      >
        Welcome to the <br />
        {theme === 'Default' ? 'Qatalog' : theme} homepage!
      </h1>
      <Link
        to='/settings'
        className={`${
          theme === 'Default' ? ' text-black' : 'text-red-600'
        } font-semibold text-lg absolute bottom-4 w-full text-center`}
      >
        Back to Settings
      </Link>
    </div>
  )
}

export default HomePage
