import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const Content = async () => {
    const session = await getServerSession(authOptions)

    if(!session){
        redirect('/signin?callbackURL=/protected/client')
    }
    return (
        <main>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum libero unde minima totam id voluptatum minus. Odit minima eum delectus nesciunt cum. Minus perferendis magni et quis minima natus delectus!</div>
            {/* <div>{session?.user?.name}</div> */}
        </main>
    )
}

export default Content