"use client"
import { PlusSVG } from '@/_components/svg'
import { useState } from 'react'

const SearchBar = (props: { handleTodo: (query: string) => void }) => {
    const [query, setQuery] = useState<string>('')

    const handleSubmit = (string: string) => {
        //handle fetch to db

    }
    return (
        <div className='absolute -bottom-7 flex flex-row center'>
            <input
                className='bg-list-lightGrey focus:border-list-purple border-black px-4 border-[1.4px] text-list-white lg:w-[37.9rem] h-14 rounded-lg'
                type="text"
                placeholder='Set a new task'
                onChange={(e) => { setQuery(e.target.value); console.log(e.target.value); console.log('this is query log: ', query) }}
                value={query} />
            <button
                className=' transition-transform ease-in-out duration-300 delay-250 hover:transform-gpu hover:-translate-y-1 hover:bg-list-purple hover:scale-105 ml-2 w-20 h-14 bg-list-blue-dark rounded-lg flex flex-row items-center justify-center'
                onClick={() => handleSubmit(query)}
                type="button" ><span className='pr-1'>Add</span><PlusSVG /></button >
        </div>
    )
}

export default SearchBar