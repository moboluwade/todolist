import React from 'react'
import { NoteBoard } from '@/_components/svg'

const NoTaskEntries = () => {
    return (
        <>
            <NoteBoard />
            <span className='text-list-text-lightGrey pt-4 font-bold'>You dont have tasks registered yet</span>
            <span className='text-list-text-lightGrey font-medium'>Create tasks and organize your to-do items</span>
        </>
    )
}

export default NoTaskEntries