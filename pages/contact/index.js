import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/utils.module.scss';
import MenuToggle from '../../components/menuToggle';

export default function Home() {

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <MenuToggle></MenuToggle>
      <h2>Let's talk!</h2>
      <div className={styles.innerPage}>
        <div className={styles.innerPage__text}>
          <p>Have something you want to discuss, use the links opposite and let's get in touch.</p>
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
          <Link href="https://linkedin.com">
            <a target="_blank">
              <svg width="120px" height="120px" viewBox="0 0 120 120" version="1.1">
                <g id="surface1">
                  <path fill="#fff" d="M 95 0 L 25 0 C 11.195312 0 0 11.195312 0 25 L 0 95 C 0 108.804688 11.195312 120 25 120 L 95 120 C 108.808594 120 120 108.804688 120 95 L 120 25 C 120 11.195312 108.808594 0 95 0 Z M 40 95 L 25 95 L 25 40 L 40 40 Z M 32.5 33.660156 C 27.671875 33.660156 23.75 29.710938 23.75 24.839844 C 23.75 19.96875 27.671875 16.019531 32.5 16.019531 C 37.328125 16.019531 41.25 19.96875 41.25 24.839844 C 41.25 29.710938 37.335938 33.660156 32.5 33.660156 Z M 100 95 L 85 95 L 85 66.980469 C 85 50.140625 65 51.414062 65 66.980469 L 65 95 L 50 95 L 50 40 L 65 40 L 65 48.824219 C 71.980469 35.894531 100 34.941406 100 61.203125 Z M 100 95 "/>
                </g>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}