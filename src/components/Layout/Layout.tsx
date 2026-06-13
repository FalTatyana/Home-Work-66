import type { PropsWithChildren } from "react"
import Header from "../Header/Header"
import CaloriesTotal from "../CaloriesTotal/CaloriesTotal"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container mt-4">
        <CaloriesTotal />
        {children}
      </main>
    </>
  )
}

export default Layout