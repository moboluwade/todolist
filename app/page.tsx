import { TaskTracker } from '@/_components/taskTracker'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-16 flex flex-col items-center h-screen w-screen bg-list-darkGrey'>
      <TaskTracker />
      <section></section>
      {/* <Link href='protected/content'>Click to get to protected content</Link> */}
    </main>
  )
}
