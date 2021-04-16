import Document, { Html, Head, Main, NextScript } from 'next/document'
import PrismicScript from '../components/PrismicScript'
import { reset, globals } from 'styles'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Work+Sans:wght@700&display=swap" rel="stylesheet" /> 
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍💻</text></svg>" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <PrismicScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
