import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Next Auth - App" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
        
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </Head>
      <body className='bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
