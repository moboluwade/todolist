import { NoTaskEntries } from './sub'
import TaskEntries from './sub/TaskEntries'

const TaskList = () => {
    const task = 10
    
    return (
        <section className='pt-4 border-t-2 lg:w-[43.5rem] border-list-lightGrey w-full h-full flex flex-col justify-center items-center'>
            {task < Number(5) ?
                <NoTaskEntries /> :
                <TaskEntries />
            }
        </section>
    )
}

export default TaskList