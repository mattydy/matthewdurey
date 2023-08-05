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
  const posts = props.portfolio[7];
  const color = posts.color;
  const nextProject = props.portfolio[6];
  
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
                <span className={styles.caption}>Dropdown open showing language selections</span>
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
            <h4>Multiple Languages<span>:</span></h4>
            <p>Auditstar have locations throughout the world, so they wanted to have the website in numerous languages (English, Spanish & German). Using the WPML language plugin, I was able to create copies of the website where Auditstar provided the translations.<br></br><br></br>All together there are three sites, the English site (<a href="https://auditstar.co.uk/" target="_blank">https://auditstar.co.uk/</a>), Spanish site (<a href="https://auditstar.es/" target="_blank">https://auditstar.es/</a>) and German site (<a href="https://auditstar.de/" target="_blank">https://auditstar.de/</a>).</p>
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
            <h4>Mega Menu<span>:</span></h4>
            <p>The Auditstar website has 3 options for the menu, a simple link, a dropdown with icons and a multi menu with a few columns and links.<br></br><br></br>I created an area in the CMS called 'Theme Options' where the client can decide which option they would like and the text and links to increase.</p>
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
            <h4>Multiple Locations<span>:</span></h4>
            <p>As mentioned before Auditstar have offices all over the world. They wanted a section on the website where they could showcase this. We created a map with pins, blue pins with no details and orange pins which have more details.<br></br><br></br>Within the CMS I created a 'locations' post type where the client can upload the locations, selecting whether its an orange or blue pin.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}