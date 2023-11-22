import React from 'react'
import SearchBar from './sub/searchbar'
import Image from 'next/image'


const Header = () => {

  return (
    <header className=' relative flex flex-col items-center p-8 bg-list-black text-list-white 2xl:h-52 lg:h-36'>
      <div className='flex flex-row justify-center items-center'>
        <Image
          src='/brand-logo.png'
          width={45}
          height={20}
          alt='logo' />
        <span className=' pl-2 text-3xl text-list-blue font-extrabold tracking-wider'>
          list<span className='text-3xl text-list-purple'>It</span>
        </span>
      </div>
      <SearchBar />
    </header>
  )
}

export default Header