import React from 'react'
import { RichText } from 'prismic-reactjs'
import { headerStyles } from 'styles'
import { default as NextLink } from 'next/link'
import { hrefResolver, linkResolver } from 'prismic-configuration'

/**
 * Homepage header component
 */
const Header = ({ image, headline, description, description_desc }) => {
  return (
    <div className="home">
      <div className="blog-avatar" style={{ backgroundImage: `url(${image.url})` }} />
      <h1 className="blog-title">{RichText.asText(headline)}</h1>
      {/* <p>{RichText.asText(description_desc)}</p>  */}
      <p className="blog-description">I'm a Salesforce and web developer based out of Vancouver, B.C. Here are some thoughts I have about books and code and stuff.</p>
      <p className="blog-description">      
        <NextLink
          as={linkResolver(description)}
          href={hrefResolver(description)}
      >
        <a>
          <h2>{RichText.asText(description)}</h2>
        </a>
      </NextLink>
      </p>
      <style jsx global>{headerStyles}</style>
    </div>
  )
}

export default Header
