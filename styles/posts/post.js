import css from "styled-jsx/css";

export const postStyles = css.global`
  .outer-container {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
  }
  .back {
    display: block;
    max-width: 700px;
    margin: 0 auto 2em auto;
    font-family: "Lato", sans-serif;
    font-size: 16px;
  }
  .back:before {
    content: "←";
    display: inline-block;
    position: relative;
    margin-right: 8px;
  }
  .back a:hover {
    text-decoration: underline;
  }
  .container {
    max-width: 700px;
    margin: auto;
  }
  .blog-post-meta {
    color: #9a9a9a;
    font-family: "Work Sans", sans-serif;
    margin-bottom: 8px;
  }
  .post-part.single a,
  .blog-main.single a {
    text-decoration: none;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.8) 75%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.8) 75%
    );
    background-repeat: repeat-x;
    background-size: 2px 2px;
    background-position: 0 23px;
  }
  h2, h3, h4 {
    margin-top: 3rem;
  }
  .post-part.single img,
  .blog-main.single img {
    width: 100%;
    height: auto;
  }
  .post-part.single .image-full-width + .image-label,
  .blog-main.single .image-full-width + .image-label {
    width: 100%;
  }
  .post-part.single .image-label {
    display: block;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    color: #949494;
  }
  .image-label .block-quotation,
  .post-part.single .block-quotation {
    margin-bottom: 2rem;
    display: inline-block;
    font-style: italic;
    font-size: 24px;
  }
  .post-part li {
    list-style-type: initial;
    margin-left: 1em;
  }
  .post-part ol li {
    list-style-type: decimal;
  }
`;
