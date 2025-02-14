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
          <h1><span>F</span>ree <span>W</span>eb <span>C</span>onsultancy</h1>
          <MenuToggle></MenuToggle>
          <h2>Claim your free check today<span>!</span></h2>
          <div className={styles.innerPage}>
            <div className={styles.innerPage__text}>
              <p>For a limited time, I'm offering a free 30-minute web consultancy session to help businesses improve their online presence. Whether you need advice on website strategy, SEO improvements, or technical recommendations, I've got you covered.</p>
              <p>What's included:<br></br>
                <ul>
                  <li>Website Audit - Identify key areas for improvement with actionable insights</li>
                  <li>SEO and Performance Review - Boost your rankings and site speed</li>
                  <li>UX and Design Advice - Improve user engagement and experience</li>
                  <li>Technology Recommendations - Discover the best tools and platforms for your needs</li>
                </ul>
                Interested? <Link href="mailto:me@matthewdurey.com?subject=Free Web Consultancy">Get in touch</Link> today to claim your free session.</p>
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
          </div>
          </div>
      </section>
      <Footer className="footer--left"></Footer>
    </div>
  );
}