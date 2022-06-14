import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul class={navLinks}>
          <li class={navLinkItem}><Link to="/" class={navLinkText}>Home</Link></li>
          <li><Link to="/about" class={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 class={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout