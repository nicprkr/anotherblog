import React from 'react'
import { footerStyles } from 'styles'

/**
 * Site footer component
 */
const Footer = () => (
  <footer>
    <p>
      Made with &hearts; and 
      <a
        href="https://prismic.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prismic
      </a> | 
      Wanna chat? I'm on <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicprkr/">LinkedIn</a>

    </p>
    <style jsx global>{footerStyles}</style>
  </footer>
)

export default Footer
