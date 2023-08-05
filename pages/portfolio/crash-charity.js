import fsPromises from 'fs/promises';
import path from 'path'
import Image from 'next/image';
import styles from '../../styles/utils.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Link from 'next/link';
import PortfolioIntro from '../../components/portfolio-intro'
import PortfolioConclusion from '../../components/portfolio-conclusion'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}
export default function Home(props) {
  const posts = props.portfolio[8];
  const color = posts.color;
  const nextProject = props.portfolio[7];
  
  return (
    <div>
      <style jsx>{`
      h1::after, h3::after {
        content: '';
        background: ${color};
      }
      
      a, h3 span, h4 span {
        color: ${color};
      }`}</style>

    <div className='container'>
      <PortfolioIntro data={posts}></PortfolioIntro>

      <div className={styles.portfolioContent}>

        <div className={styles.highlights}>
          <h3>Highlighted Features<span>:</span></h3>
          <p>{props.general[0].highlighted}</p>
        </div>

        <div className={`${styles.feature}`}>
          <div className={styles.image}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              autoHeight={true}
              style={{
                "--swiper-pagination-color": `${posts.color}`,
                "--swiper-pagination-bullet-inactive-color" : 'white'
              }}
            >
            <SwiperSlide>
                <Image
                  src='/images/crash/project-post.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="project post type"
                />
                <span className={styles.caption}>Creating a project within the CMS</span>
              </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/crash/project-list.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="List of projects"
                />
                <span className={styles.caption}>List of projects in the CMS</span>
                </SwiperSlide>
                <SwiperSlide>
              <Image
                  src='/images/crash/project-pagination.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Project Page on site"
                />
                <span className={styles.caption}>Page showing all the projects on the site</span>
                </SwiperSlide>
                <SwiperSlide>
              <Image
                  src='/images/crash/project-page.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Individual project page"
                />
                <span className={styles.caption}>Individual project page</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Projects<span>:</span></h4>
            <p>Crash do a lot of work with homelessness and hospice charities and wanted a section on the website to portray their work. I created a post type called 'projects' where they could upload content using the custom built blocks. Then I created a 'Projects' page, where the projects were automatically pulled through.</p>
          </div>
        </div>

        <div className={`${styles.feature} ${styles.featureAlt}`}>
          <div className={styles.image}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              autoHeight={true}
              style={{
                "--swiper-pagination-color": `${posts.color}`,
                "--swiper-pagination-bullet-inactive-color" : 'white'
              }}
            >
            <SwiperSlide>
                <Image
                  src='/images/crash/events-single.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="single event"
                />
                <span className={styles.caption}>Single event</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/crash/list-of-events.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="List of events"
                />
                <span className={styles.caption}>List of events</span>
                </SwiperSlide>
                <SwiperSlide>
              <Image
                  src='/images/crash/events-page.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Events page"
                />
                <span className={styles.caption}>Events page</span>
                </SwiperSlide>
                </Swiper>
                </div>
          <div className={styles.content}>
            <h4>Events<span>:</span></h4>
            <p>Throughout the year Crash host numerous events to raise awareness and money for the charities they support. They wanted a section on the website where they could create these events and show them on the website.<br></br><br></br>I created a post type called 'Events' and gave the client the option of having an 'Anytime' event (for ongoing events) or the ability to select a set date. Crash wanted a slider on the homepage to show the evnts in latest order, as well as a fundraising page where they could show all the events.</p>
          </div>
        </div>

        <div className={`${styles.feature}`}>
          <div className={styles.image}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              autoHeight={true}
              style={{
                "--swiper-pagination-color": `${posts.color}`,
                "--swiper-pagination-bullet-inactive-color" : 'white'
              }}
            >
            <SwiperSlide>
                <Image
                  src='/images/crash/news-list.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="List of news"
                />
                <span className={styles.caption}>News list in the CMS</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/crash/news-post.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Single news post"
                />
                <span className={styles.caption}>Single news post</span>
                </SwiperSlide>
                <SwiperSlide>
              <Image
                  src='/images/crash/news-page.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="News page"
                />
                <span className={styles.caption}>News page</span>
                </SwiperSlide>
                </Swiper>
                </div>
          <div className={styles.content}>
            <h4>News<span>:</span></h4>
            <p>Crash wanted a blog on their website so they could keep their clients up-to-date with what they have been up to in the community.<br></br><br></br>I used the default 'Post' post type to allow Crash to upload the articles, and pulled them through on the News page.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}