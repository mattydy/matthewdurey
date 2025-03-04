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
      <h1><span>T</span>hank <span>Y</span>ou</h1>
      <MenuToggle></MenuToggle>
      <h2>Thank you for reaching out<span>,</span> I will be in touch within the next 48 hours<span>.</span></h2>
      <div className={styles.innerPage}>
        <div className={styles.innerPage__text}>
            <p>In the meantime why not connect with me via <Link href="https://www.linkedin.com/in/matthew-durey-2511a6142/"><a target="_blank">Linkedin</a></Link> & <Link href="https://www.instagram.com/matthew_durey/"><a target='_blank'>Instagram</a></Link>, or have a look through the rest of my website using the buttons below.</p>
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