import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../styles/utils.module.scss';

export default function Home() {

  return (
    <div className="container">
      <section className={styles.homePage}>
        <div className={styles.homeImage}>
        <Image
          priority
          src="/images/matt.webp"
          className={styles.homeImage}
          height={472}
          width={285}
          alt=""
          />
        </div>

          <div className={styles.homeContent}>
            <h1 className='large'>Matthew Durey</h1>
            <h2 className='large'>Web Developer</h2>
            <p className='large'>I'm a London based Web Developer specialising in custom built WordPress websites. I also have experience in React, SEO, Shopify and WooCommerce.</p>
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
              <Link href="/contact">
                <a className='white-button'>Contact</a>
              </Link>
            </div>
          </div>
      </section>
    </div>
  );
}