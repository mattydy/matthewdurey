import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/utils.module.scss';
import MenuToggle from '../../components/menuToggle';
import { useState } from 'react';
import { router } from 'next/router';


export default function Home() {

  return (
    <div className="container">
      <h1><span>4</span>04 <span>E</span>rror</h1>
      <MenuToggle></MenuToggle>
      <h2>Page Not Found<span>!</span></h2>
      <div className={styles.innerPage}>
        <div className={styles.innerPage__text}>
            <p>Hey there, looks like you've got a broken link. If you think this is a mistake, why not let me know via the <Link href="/contact">Contact</Link> page, otherwise use the links below to navigate through the site, or vist my homepage <Link href="/">here</Link>.</p>
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
      </div>
    </div>
  );
}