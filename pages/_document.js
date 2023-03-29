import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@300;400;700;800&display=swap" rel="stylesheet"></link>

      </Head>
      <body className='body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}