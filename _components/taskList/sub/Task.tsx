"use client"
import { DeleteBin, RadioTick, RadioUntick } from "@/_components/svg"
import { useState } from "react"
import { taskList } from "@/_lib/taskList"

const Task = (props: { task: { id: number, description: string}}) => {
    const [isChecked, setIsChecked] = useState(false)

    const popEntry = async (index: number) => {
        taskList.splice(index, 1)
        console.log(taskList)
    }

    return (
        <div
            key={props.task.id}
            className='pb-4'
        ><div className='pt-4 pl-4 pr-4 bg-list-lightGrey text-list-white text-sm flex flex-row justify-center items-start rounded-lg w-full h-[4.5rem]'>
                <div onClick={() => { setIsChecked(!isChecked) }}>
                    {isChecked ?
                        <RadioTick />
                        :
                        <RadioUntick />
                    }
                </div>

                <span className={`pl-2 ${isChecked && "line-through text-list-text-lightGrey"}`}>
                    {props.task.description}
                </span>
                <div onClick={async()=>{popEntry(props.task.id)}}>
                    <DeleteBin />
                </div>
            </div>

        </div>
    )
}

export default Task