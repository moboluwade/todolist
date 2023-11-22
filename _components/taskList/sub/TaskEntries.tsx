import Task from "./Task"
import { taskList } from "@/_lib/taskList"

const TaskEntries = async () => {

    const isChecked = true
    
    return (
        <section className='task-list overflow-scroll overflow-x-hidden lg:w-[43.5rem]'>
                {taskList.map((task) => {
                    return <Task key={task.id} task={task} />
                })}
        </section>
    )
}

export default TaskEntries