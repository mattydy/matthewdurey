import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../styles/utils.module.scss';

export default function Home() {

  return (
    <div>
      <div className="container container-large">
      <div className='background-circles'>
        <span className='circle circle--blue circle--large blue-top'></span>
        <span className='circle circle--blue circle--large blue-bottom'></span>
        <Link href="/portfolio/executive-coaching-consultancy/">
          <a className='circle circle--one'></a>
        </Link>
        <Link href="/portfolio/pitch/">
          <a className='circle circle--two'></a>
        </Link>
        <Link href="/portfolio/crash-charity/">
          <a className='circle circle--three'></a>
        </Link>
        <Link href="/portfolio/auditstar/">
          <a className='circle circle--four'></a>
        </Link>
        <Link href="/portfolio/nodishrespect/">
          <a className='circle circle--five'></a>
        </Link>
      </div>
      <section className={styles.homePage}>
        {/* <div className={styles.homeImage}>
        <Image
          priority
          src="/images/matt.webp"
          className={styles.homeImage}
          height={472}
          width={285}
          alt=""
          />
        </div> */}

          <div className={styles.homeContent}>
            <h1 className='large'><span>M</span>atthew <span>D</span>urey</h1>
            <h2 className='large'><span>W</span>eb <span>D</span>eveloper</h2>
            <p className='large'>I'm a London based Web Developer specialising in custom built WordPress websites. I also have experience in React, SEO, Shopify and WooCommerce.</p>
            <div className={styles.buttons}>
              <Link href="/about">
                <a className='white-button'>About</a>
              </Link>
              <Link href="/portfolio">
                <a className='white-button'>Portfolio</a>
              </Link>
              <Link href="/services">
                <a className='white-button'>Services</a>
              </Link>
              <Link href="/contact">
                <a className='white-button'>Contact</a>
              </Link>
            </div>
          </div>
      </section>
      </div>
    </div>
  );
}