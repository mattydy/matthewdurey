import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import MenuToggle from '../../components/menuToggle';
import styles from '../../styles/utils.module.scss';
import Footer from '../../components/footer';

export default function About() {
  
  return (
    <div>
      <section className='container'>
          <h1><span>A</span>bout <span>M</span>e</h1>
          <MenuToggle></MenuToggle>
          <h2>Web Developer<span>,</span> Sports Addict <span>&</span> Keen Traveller<span>.</span></h2>
          <div className={styles.innerPage}>
            <div className={styles.innerPage__text}>
            <p>I am a web developer and consultant, currently travelling around Australia and working with clients throughout the UK, Ireland, and beyond. I develop bespoke, multi-browser, fully customizable, multi-device websites using WordPress, Shopify, and React. My clients range from large corporations to small independent traders.</p>
            <p>Originally from Northern Ireland, I graduated from the University of Derby with a degree in Computer Science and moved to London in 2020. Having worked as a Web Developer for over 8 years, past employers include <Link href="https://kukidigital.com/"><a target="_blank">Kuki Digital</a></Link>, <Link href="https://www.goup.co.uk"><a target='_blank'>Go Up Agency</a></Link> and <Link href="https://www.just-eat.co.uk/"><a target="_blank">Just Eat Takeaway.com</a></Link>. In late 2024 I left the UK and  moved to Australia.</p>
            <p>In my spare time I can usually be found on the golf course, watching various sporting events, or planning my next getaway. Feel free to have a look through <Link href="/portfolio/"><a>my portfolio</a></Link> to see what I've been working on, connect with me via <Link href="https://www.linkedin.com/in/matthew-durey-2511a6142"><a target="_blank">LinkedIn</a></Link> & <Link href="https://www.instagram.com/matthew_durey/"><a target="_blank">Instagram</a></Link>, or <Link href="/contact/"><a>get in touch</a></Link> to talk about collaborating.</p>
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
      <Footer className="footer--left"></Footer>
    </div>
  );
}