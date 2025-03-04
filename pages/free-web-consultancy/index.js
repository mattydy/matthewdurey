import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import MenuToggle from '../../components/menuToggle';
import styles from '../../styles/utils.module.scss';
import Footer from '../../components/footer';
import { useState } from 'react';
import { router } from 'next/router';

export default function About() {

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
      fetch('/api/free', {
        method: 'post',
        body: JSON.stringify(formData)
      }).then((res) => {
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
      setColor('#8ed8f8');
    } else if (value < 500) {
      setColor('#fff');
    }
  }
  
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
                Interested? Fill out the form on this page or get in touch via <Link href="https://www.linkedin.com/in/matthew-durey-2511a6142/"><a target="_blank">LinkedIn</a></Link> & <Link href="https://www.instagram.com/matthew_durey/"><a target='_blank'>Instagram</a></Link>.</p>
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
          <label htmlFor="url">Current Website URL<span>*</span>:</label>
          <input type="url" id="url" name="url" required placeholder="Company URL"/>
          <label htmlFor="enquiry">How can I help?<span>*</span>:</label>
          <textarea id="enquiry" name="enquiry" required placeholder="Message goes here" rows="4" maxLength="500" onChange={updateCount}/>
          <span className={styles.messageCount} style={{color: color}}><span id="liveCount" style={{color: color}}>{liveCount}</span>/500</span>
          <input type="checkbox" name="contact_me_by_fax_only" value="1" style={{display: 'none'}} tabIndex="-1" autoComplete="off" />
          <button type="submit" className="white-button">Submit</button>
        </form>
          </div>
          </div>
      </section>
      <Footer></Footer>
    </div>
  );
}