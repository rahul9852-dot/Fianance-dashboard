import React from 'react'
import { HeaderLogo } from './headerLogo';

const Header = () => {
  return (
  <header className='bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:pb-36 px-14'>
    <div className='max-w-screen-2xl mx-auto'>
      <div className='w-full flex items-center justify-between mb-14'>
        <div className='flex items-center lg:gap-16'>
            <HeaderLogo/>
        </div>

      </div>
    </div>
  </header>
  )
}

export default Header;