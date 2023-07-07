import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/utils.module.scss';
import MenuToggle from '../../components/menuToggle';

export default function Home() {

  return (
    <div className="container">
      <h1><span>C</span>ontact <span>M</span>e</h1>
      <MenuToggle></MenuToggle>
      <h2>Interested in working together<span>?</span></h2>
      <div className={styles.innerPage}>
        <div className={styles.innerPage__text}>
          <p>If you are interested in working together or wish to find out more about what I can help with, get in touch with me via <Link href="https://linkedin.com">Linkedin</Link> or <Link href="mailto:mattydy@hotmail.com">email</Link>.</p>
          <p>I normally respond within 48 hours.</p>
          <div className={styles.innerPage__buttons}>
            <Link href="/about">
              <a className='white-button'>About</a>
            </Link>
            <Link href="/portfolio">
              <a className='white-button'>Portfolio</a>
            </Link>
            <Link href="/services">
              <a className='white-button'>Services</a>
            </Link>
          </div>
        </div>
        <div className={styles.innerPage__image}>
        <Image
          priority
          src="/images/matt.webp"
          className={styles.homeImage}
          height={472}
          width={285}
          alt=""
          />
        </div>
      </div>
    </div>
  );
}