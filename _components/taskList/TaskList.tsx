import React, { useState } from 'react'
import NoteBoard from '../svg/NoteBoard'

const TaskList = () => {
    const task = 0

    return (
        <section className='pt-16 border-t-2 lg:w-[43.5rem] border-list-lightGrey'>
            {task === Number(0) &&
                <div className='text-list-text-lightGrey w-full h-full flex flex-col justify-center items-center'>
                    <NoteBoard />
                    <span className='pt-4 font-bold'>You don't have tasks registered yet</span>
                    <span className='font-medium'>Create tasks and organize your to-do items</span>
                </div>
            }
        </section>
    )
}

export default TaskList