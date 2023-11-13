'use client'
import { SessionProvider } from 'next-auth/react'

const Provider = (pageProps: {children: any}) => {
  return (
    <section>
        <SessionProvider >
            {pageProps.children}
        </SessionProvider>
    </section>
  )
}

export default Provider