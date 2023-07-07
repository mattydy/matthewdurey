import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import MenuToggle from '../../components/menuToggle';
import styles from '../../styles/utils.module.scss';

export default function About() {
  
  return (
    <div>
      <section className='container'>
          <h1><span>A</span>bout <span>M</span>e</h1>
          <MenuToggle></MenuToggle>
          <h2>Web Developer<span>,</span> Sports Addict <span>&</span> Keen Traveller<span>.</span></h2>
          <div className={styles.innerPage}>
            <div className={styles.innerPage__text}>
            <p>I am a London based Website Developer, working with clients throughout the UK and Ireland. I develop bespoke, multi-browser, fully customisable, multi-device websites using WordPress, Shopify and WooCommerce. My clients range from large corporate clients to small independent traders.</p>
            <p>Originally from Northern Ireland, I graduated from the University of Derby with a degree in Computer Science. I moved to London in 2020.</p>
            <p>Having worked as a Web Developer for 7 years, I am now employed as a Front End Developer for <Link href="https://www.just-eat.co.uk/"><a target="_blank">Just Eat Takeaway.com</a></Link>.</p>
            <p>In my spare time I can usually be found on the golf course, watching Manchester United, sampling the latest craft beers or planning my next getaway.</p>
            <p>Feel free to have a look through <Link href="/portfolio/"><a>my portfolio</a></Link> to see what I have been working on, connect with me via <Link href="https://www.linkedin.com/in/matthew-durey-2511a6142"><a target="_blank">LinkedIn</a></Link>, or <Link href="/contact/"><a>get in touch</a></Link> to talk about collaborating.</p>
            <div className={styles.innerPage__buttons}>
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

          <div className={styles.innerPage__image}>
            <Image
              priority
              src="/images/matthew-durey-nz.jpeg"
              height={685}
              width={549}
              alt=""
            />
          </div>
          </div>
      </section>
    </div>
  );
}