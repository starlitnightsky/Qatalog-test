import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../App'

import BgTheme from '../orgs.json'

function Settings({ updatedSettings }) {
  const [selectedTheme, setSelectedTheme] = useState('')
  const theme = useContext(ThemeContext)

  useEffect(() => {
    if (theme !== 'Default') {
      setSelectedTheme(theme)
    }
  }, [theme])

  function reset() {
    setSelectedTheme('')
    updatedSettings('Default')
  }

  function apply() {
    if (selectedTheme !== '') {
      updatedSettings(selectedTheme)
    }
  }

  return (
    <div className='w-full justify-center flex'>
      <div className='bg-[#D8D8D8] rounded-[40px] w-[404px] h-[351px] px-6 py-7 flex flex-col'>
        <Listbox value={selectedTheme} onChange={setSelectedTheme}>
          <div className='relative mt-1'>
            <Listbox.Button className=' px-[25px] py-[21px] font-normal leading-4 relative w-full cursor-default rounded-lg bg-white text-left ring-0 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm hover:cursor-pointer'>
              <span className='block truncate text-gray-400'>
                {selectedTheme === ''
                  ? 'Choose an Organization'
                  : selectedTheme}
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-3 flex items-center pr-2'>
                <ChevronDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {BgTheme.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      `relative select-none py-2 pl-10 pr-4 cursor-pointer ${
                        active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                      }`
                    }
                    value={item.org_name}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item.org_name}
                        </span>
                        {selected ? (
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600'>
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <div className='flex flex-col-reverse h-full font-bold'>
          <div className='flex gap-4 w-full h-16'>
            <button
              className='bg-white rounded-[10px] px-14 text-blue-500 hover:bg-gray-50 active:bg-gray-100'
              onClick={reset}
            >
              Reset
            </button>
            <button
              className='bg-blue-600 w-full text-white rounded-[10px] hover:bg-blue-700 active:bg-blue-800'
              onClick={apply}
            >
              Apply Theme
            </button>
          </div>
        </div>
      </div>
      <Link
        to='/homepage'
        className={`${
          theme === 'Default' ? ' text-black' : 'text-red-600'
        } font-semibold text-lg absolute bottom-4 w-full text-center`}
      >
        Your Homepage
      </Link>
    </div>
  )
}

export default Settings
