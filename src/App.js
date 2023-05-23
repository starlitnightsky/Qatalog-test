import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './components/HomePage'
import Settings from './components/Settings'

import _ from 'lodash'

import BgTheme from './orgs.json'
import './App.css'

export const ThemeContext = createContext('Default')

function App() {
  const [theme, setTheme] = useState('Default')
  const [bgUrl, setBgUrl] = useState('')

  function setThemeContext(themeValue) {
    setTheme(themeValue)
    if (themeValue === 'Default') {
      setBgUrl('')
    } else {
      const index = _.findIndex(BgTheme, ['org_name', themeValue])
      setBgUrl(BgTheme[index].background_image)
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className='App' style={{ backgroundImage: `url(${bgUrl})` }}>
        <BrowserRouter>
          <Routes>
            <Route path='/homepage' element={<HomePage />} />
            <Route
              path='/settings'
              element={<Settings updatedSettings={setThemeContext} />}
            />
            <Route path='*' element={<Navigate to='/homepage' replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
