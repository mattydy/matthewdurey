import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/utils.module.scss';
import MenuToggle from '../../components/menuToggle';
import { useState } from 'react';
import { router } from 'next/router';


export default function Home() {

  const [liveCount, setLiveCount] = useState(0);
  const [color, setColor] = useState('#fff');

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name ) return;
      formData[field.name] = field.value;
    });
    if (formData['contact_me_by_fax_only'] == true) {
      fetch('/api/mail', {
        method: 'post',
        body: JSON.stringify(formData)
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
           router.replace("/thank-you");
        }
    })
    }
  }

  function updateCount(e) {
    let value = e.target.value.length;
    let countSpan = document.getElementsByClassName('messageCount');

    setLiveCount(value);

    if (value == 500) {
      console.log(value);
      setColor('#8ed8f8');
    } else if (value < 500) {
      setColor('#fff');
    }
  }

  <style jsx>{`
    span.messageCount {
      color: ${color};
    }
    `}
  </style>

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
        <form action="/" method="post" onSubmit={handleSubmit}>
          <div className={styles.smaller}>
              <div className={styles.group}>
                <label htmlFor="name">Your Name<span>*</span>:</label>
                <input type="text" id="name" name="name" required placeholder='Full Name'/>
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Your email<span>*</span>:</label>
                <input type="email" id="email" name="email" required placeholder='email@example.com'/>
              </div>
          </div>
          <div className={styles.smaller}>
            <div className={styles.group}>
              <label htmlFor="company">Company Name:</label>
              <input type="text" id="company" name="company" placeholder="Company name" />
            </div>
            <div className={styles.group}>
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" name="phone" placeholder="XXXXXX XXXXX"/>
            </div>
          </div>
          <label htmlFor="subject">Subject<span>*</span>:</label>
          <input type="text" id="subject" name="subject" required placeholder="Email Subject"/>
          <label htmlFor="enquiry">How can I help?<span>*</span>:</label>
          <textarea id="enquiry" name="enquiry" required placeholder="Message goes here" rows="4" maxLength="500" onChange={updateCount}/>
          <span className={styles.messageCount} style={{color: color}}><span id="liveCount" style={{color: color}}>{liveCount}</span>/500</span>
          <input type="checkbox" name="contact_me_by_fax_only" value="1" style={{display: 'none'}} tabIndex="-1" autoComplete="off" />
          <button type="submit" className="white-button">Submit</button>
        </form>
        </div>
      </div>
    </div>
  );
}