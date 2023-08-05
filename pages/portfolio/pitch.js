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
  const posts = props.portfolio[9];
  const color = posts.color;
  const nextProject = props.portfolio[8];
  
  return (
    <div>
      <style jsx>{`
      h1 span, h3 span, h4 span {
        color: ${color};
      }
      
      a {
        color: ${color};
      }`}</style>

    <div className='container'>
      <PortfolioIntro data={posts}></PortfolioIntro>

      <div className={styles.portfolioContent}>
      
          <div className={styles.highlights}>
          <h3>Highlighted Features<span>:</span></h3>
          <p>Below I have listed some key features on the website. They include parts of the website which the client whiched to change from the original design, elements that I have coded to save time and repeation and areas of the site that were key for functionality/user experience.</p>
          </div>
      
        <div className={styles.feature}>
          
          <div className={styles.image}>

          <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              autoHeight={true}
              style={{
                "--swiper-pagination-color": "#eaff00",
                "--swiper-pagination-bullet-inactive-color" : 'white'
              }}
            >
            <SwiperSlide>
              <Image
                  src='/images/pitch/pitch-homepage.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt=""
                />
                <span className={styles.caption}>Homepage slider that allows the user to see what Pitch stand for, via text, images and videos.</span>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                  src='/images/pitch/pitch-partnerships.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt=""
                />
                <span className={styles.caption}>Each Service page begins with an Image and Text</span>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                  src='/images/pitch/pitch-highlights.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt=""
                />
                <span className={styles.caption}>Highlights section that allow users to navigate to the services pages</span>
                </SwiperSlide>
                </Swiper>

          </div>
          
          <div className={styles.content}>
          <h4>Instant Impact<span>:</span></h4>
          <p>One of the key features of the Pitch site is the Imagry and colours. When you first access the website its clear that the work and clientele Pitch work with are impressive.<br></br><br></br>This theme continues thorughout the site, the majority of the links on the site all include a powerful image.<br></br><br></br>Within each Service the user is again presented with a large image and text related to one of the case studies related to that service.</p>
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
                "--swiper-pagination-color": "#eaff00",
                "--swiper-pagination-bullet-inactive-color" : 'white'
              }}
            >
            <SwiperSlide>
              <Image
                  src='/images/pitch/pitch-clients.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt=""
                />
                <span className={styles.caption}>Client Slider located on the About Us page</span>
                </SwiperSlide>
                <SwiperSlide>
                            <Image
                  src='/images/pitch/pitch-grid.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt=""
                />
                <span className={styles.caption}>Case Study grid showcasing case studies and clients</span>
                </SwiperSlide>
                </Swiper>

          </div>
          
          <div className={styles.content}>
          <h4>Impressive Clients<span>:</span></h4>
          <p>There are a few different ways we show the user the clients that Pitch work with. On various pages we use a use a grid layout which showcases photos and the client names. This changes on the inner services pages to only the clients related to those services.<br></br><br></br>We also have a client carousel on the About Us page which showcases the clients at once.</p>
          </div>
          
        </div>

        <div className={styles.feature}>
          
          <div className={styles.image}>

          
              <Image
                  src='/images/pitch/pitch-history.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt=""
                />
                <span className={styles.caption}>Client Slider located on the About Us page</span>

          </div>
          
          <div className={styles.content}>
          <h4>Full of history<span>:</span></h4>
          <p>To showcase Pitches history we built a slider, complete with the year, text and imagry. The user can easily navigate the timeline, hovering over images to get further information.</p>
          </div>
          
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}
