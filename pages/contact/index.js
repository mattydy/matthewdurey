import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/utils.module.scss';

export default function Home() {

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <h2>Have some work you are interested in discussing? Reach out below and we can begin talking!</h2>
            <div className={styles.buttons}>
              <Link href="/about">
                <a className='white-button'>About</a>
              </Link>
              <Link href="/portfolio">
                <a className='white-button'>Portfolio</a>
              </Link>
              <Link href="/contact">
                <a className='white-button'>Services</a>
              </Link>
            </div>
    </div>
  );
}