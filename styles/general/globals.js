import css from "styled-jsx/css";

export const globals = css.global`
  * {
    -webkit-font-smoothing: antialiased;
  }
  ::selection {
    background: #fff7c7; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: #fff7c7; /* Gecko Browsers */
  }
  html {
    --light-grey: #dfdfdf;
    --space: 1rem;
    --black: #271d41;
    --gradient: 45deg, #FBDA61 0%, #FF5ACD 100%;
    
  }

  /*
 * Globals
 */
  body {
    padding: 3rem 0 0 0;
    color: var(--black);
    line-height: 1.5;
    font-family: "Lato", san-serif;
    font-size: 20px;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: -webkit-linear-gradient( var(--gradient) )!important; 
  }
  a {
    color: var(--black);
    text-decoration: none;
    transition: 0.2s;
    position: relative;
    z-index: 99;
  }
  a::after {
    content: "";
    left: 0;
    bottom: 0;
    min-height: 5px;
    height: 2%;
    max-width: 800px;
    width: 100%;
    background: #FBDA61;
    display: inline-block;
    position: absolute;
    z-index: -1;
    transition: 0.2s;

  }
  a:hover {
    opacity: 0.9;
    transition: 0.2s;
  }
  a:hover::after {
    height: 100%;
    transition: 0.2s;
  }
  pre {
    font-family: monospace;
    background: var(--light-grey);
    padding: var(--space);
  }
  .blog-main h1,
  .blog-main .h1,
  .blog-main h2,
  .blog-main .h2,
  .blog-main h3,
  .blog-main .h3,
  .blog-main h4,
  .blog-main .h4,
  .blog-main h5,
  .blog-main .h5,
  .blog-main h6,
  .blog-main .h6 {
    background: -webkit-linear-gradient(var(--gradient));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;
  }
  
  h1:not(.blog-title),
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Work Sans", sans-serif;
    background: -webkit-linear-gradient(var(--gradient));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1.blog-title {
    color: var(--black);
    font-family: "Work Sans", sans-serif;
  }
  h1 {
    margin-bottom: var(--space);
    font-size: 50px;
    font-weight: 900;
    line-height: 60px;
  }
  h2 {
    margin-bottom: var(--space);
    font-size: 28px;
    font-weight: 900;
    line-height: 40px;
  }
  h3 {
    margin-bottom: var(--space);
    font-size: 22px;
    font-weight: 900;
  }
  p {
    margin-bottom: calc(var(--space) * 2);
  }
  pre,
  ul,
  ol {
    margin-bottom: 20px;
  }
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }

  /* Media Queries */
  @media (max-width: 767px) {
    .home,
    .blog-main,
    .container,
    footer {
      padding: 0 20px;
    }
    .post-part,
    .blog-main {
      font-size: 18px;
    }
    .post-part pre {
      font-size: 14px;
    }
    h1 {
      font-size: 36px;
      line-height: 45px;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 768px) {
    .post-part.single .block-citation,
    .blog-main.single .block-citation {
      margin: 20px 0;
    }
  }

  /* vh vw fallback for ios7 */
  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: portrait) {
    .main .blog-header.single,
    .blog-header.home {
      height: 1024px;
    }
    .main .blog-main.single .image-full-width {
      width: 768px;
    }
    .main .post-part.single .image-full-width {
      width: 768px;
    }
  }

  @media all and (device-width: 768px) and (device-height: 1024px) and (orientation: landscape) {
    .main .blog-header.single,
    .blog-header.home {
      height: 768px;
    }
    .main .blog-main.single .image-full-width {
      width: 768px;
    }
    .main .post-part.single .image-full-width {
      width: 768px;
    }
  }

  @media screen and (device-aspect-ratio: 40/71) {
    .main .blog-header.single,
    .main .blog-header.home {
      height: 530px;
    }
    .main .blog-main.single .image-full-width {
      width: 530px;
    }
    .main .post-part.single .image-full-width {
      width: 530px;
    }
  }
`;
