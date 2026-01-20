import { useEffect } from 'react';
import '../styles/index.scss';
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {

  useEffect(() => {
    let defaultTitle = document.title

    window.onblur = () => {
      //change title, blink title, whatever
      document.title = "Hey, come back!"
    }
    window.onfocus = () => {
        //back to default title
        document.title = defaultTitle
    }
  })
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}