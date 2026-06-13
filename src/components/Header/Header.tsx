import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>Colorie Tracker</Link>
  </div>
</nav>
  )
}

export default Header