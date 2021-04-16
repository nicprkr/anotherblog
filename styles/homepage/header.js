import css from "styled-jsx/css";

export const headerStyles = css.global`
  .home {
    text-align: center;
    max-width: 700px;
    margin: auto;
  }

  .blog-avatar {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    margin: 1em auto;
  }
  .blog-description {
    font-size: 16px;
    color: grey;
  }
  .blog-description h2 {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--light-grey);
  }
`;
