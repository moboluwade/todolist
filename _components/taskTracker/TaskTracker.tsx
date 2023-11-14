import React from 'react'

const TaskTracker = () => {
    return (
        <section className=' pb-6 w-[43.5rem] flex flex-row justify-between font-bold'>
            <div className='flex flex-row items-center'>
                <span className='pr-2 text-list-blue'>Tasks Created</span>
                <div className='bg-list-lightGrey font-semibold py-2 flex flex-row justify-center items-center text-list-white rounded-full w-fit px-2 h-5'>0</div>
            </div>
            <div className='flex flex-row items-center'>
                <span className='pr-2 text-list-purple'>Concluded</span>
                <div className='bg-list-lightGrey font-semibold py-2 flex flex-row justify-center items-center text-list-white rounded-full w-fit px-2 h-5'>0 of 5</div>
            </div>
        </section>
    )
}

export default TaskTracker