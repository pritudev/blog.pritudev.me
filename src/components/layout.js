import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  function themeToggle() {
    var element = document.body
    element.classList.toggle("dark-theme")
  }
  if (isRootPath) {
    header = (
      <h1 id="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        🏠 Home
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>

      <button className="indigo-btn" onClick={themeToggle}>
        Toggle Theme
      </button>

      <br />
      <br />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://twitter.com/preetsuthar27">Preet Suthar</a>
      </footer>
    </div>
  )
}

export default Layout
