import { TaskList } from '@/_components/taskList'
import { TaskTracker } from '@/_components/taskTracker'

export default function Home() {
  
  return (
    <main className='p-16 flex overflow-clip flex-col items-center h-screen w-full bg-list-darkGrey'>
      <TaskTracker />
      <TaskList />
    </main>
  )
}
