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
  const posts = props.portfolio[16];
  const color = posts.color;
  const nextProject = props.portfolio[15];
  
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
                  src='/images/auditstar/menu-english.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="language dropdown"
                />
                <span className={styles.caption}>The old website</span>
              </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/auditstar/menu-spanish.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Spanish homepage"
                />
                <span className={styles.caption}>Spanish homepage</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>New features<span>:</span></h4>
            <p>The first change to the website was removing the side navigation. By splitting the sidebar in two, we created separate header and footers. This allows for easier navigation and it also allows us to have more room on the website.<br></br><br></br>Allowing for more room on the site means that we can spread the content out a bit more. On the homepage we updated the logo and we have rearranged the services page into columns, allowing users to see more information at once with less scrolling involved.</p>
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
                  src='/images/auditstar/menu-dropdown.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="dropdown menu"
                />
                <span className={styles.caption}>Dropdown Menu</span>
              </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/auditstar/menu-mega.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="List of projects"
                />
                <span className={styles.caption}>Mega Menu</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Cleaning the site up<span>:</span></h4>
            <p>The old website had a lot of out of date information as well as redundant content. Updating the website gave us the opportunity to remove this information, such as the fax number, social media accounts and remove a few pages that were no longer needed.</p>
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
                  src='/images/auditstar/orange-pin.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="detailed location"
                />
                <span className={styles.caption}>Detailed location marker</span>
              </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/auditstar/location-list.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="List of locations"
                />
                <span className={styles.caption}>List of locations</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>SEO Issues<span>:</span></h4>
            <p>Another issue that cropped up when rebuilding this site was related to SEO. Cloke had changed address however the data was still showing incorrectly on both the website and on Google. The client was unsure how to go about fixing this as the phone number on the account was also incorrect.<br></br><br></br>FINISH THIS OFF</p>
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
                  src='/images/auditstar/menu-dropdown.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="dropdown menu"
                />
                <span className={styles.caption}>Dropdown Menu</span>
              </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/auditstar/menu-mega.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="List of projects"
                />
                <span className={styles.caption}>Mega Menu</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Server and login Issues<span>:</span></h4>
            <p>The final issue with this site was that the servers were running a no longer supported version of PHP. This was an issue as the client was unable to log into the CMS to make changes. After downgrading some plugins that the out of date version of PHP could not support, I was able to resolve the logging in problem. Then once the site was completed, I was able to update the server to the latest version, as well as all the necessary plugins.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}