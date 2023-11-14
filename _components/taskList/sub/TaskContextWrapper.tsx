"use client"

import { createContext, useState } from "react"

export const TaskContext = createContext({})

const TaskContextWrapper = ({ children, }: { children: React.ReactNode }) => {
  const [taskArray, setTaskArray] = useState([])

  return (
    <TaskContext.Provider value={{ taskArray, setTaskArray }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContextWrapper