import React from 'react'

import { ThemeContext } from '../App'

function HomePage() {
  const theme = useContext(ThemeContext)
  return (
    <div className='w-full justify-center flex'>
      <p
        className={`text-5xl font-bold text-center leading-[64px] ${
          theme === 'Default' ? ' text-black' : 'text-red-600'
        }`}
      >
        Welcome to the <br />
        {theme === 'Default' ? 'Qatalog' : theme} homepage!
      </p>
    </div>
  )
}

export default HomePage
