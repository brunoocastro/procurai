import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-ui-background placeholder:text-ui-white text-14 text-ui-white leading-4 relative h-screen w-screen overflow-hidden'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
