import type { ReactNode } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <main className="container mt-4">
        {children}
      </main>
    </>
  )
}

export default Layout