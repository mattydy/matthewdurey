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
  const posts = props.portfolio[18];
  const color = posts.color;
  const nextProject = props.portfolio[17];
  
  return (
    <div>
      <style jsx>{`
      h1::after, h3::after {
        content: '';
        background: ${color};
      }
      
      a {
        color: ${color};
      }`}</style>

    <div className='container'>
      <PortfolioIntro data={posts}></PortfolioIntro>

      <div className={styles.portfolioContent}>

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
                  src='/images/b4u/countdown.png'
                  height={419}
                  width={735}
                  alt="Blinds 4 You countdown"
                />
                <span className={styles.caption}>Blinds 4 You Countdown banner</span>
            </SwiperSlide>

            <SwiperSlide>
                <Image
                  src='/images/b4u/countdown-settings.png'
                  height={419}
                  width={735}
                  alt="Blinds 4 You countdown settings"
                />
                <span className={styles.caption}>Blinds 4 You countdown settings</span>
            </SwiperSlide>
            </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Adding Countdown<span>:</span></h4>
            <p>To allow people to understand when sales are ending I created a countdown for the Blinds 4 You website.<br></br><br></br>Within the shopify theme settings, we can set the end date & time for the countdown. We can also customise the colours of the countdown so it can match the banner below.<br></br><br></br>Once the countdown has ended the Countdown states 'Event Ended'.</p>
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
                  src='/images/b4u/popup.png'
                  height={419}
                  width={735}
                  alt="Blinds 4 You popup"
                />
                <span className={styles.caption}>Blinds 4 You Popup</span>
            </SwiperSlide>

            <SwiperSlide>
                <Image
                  src='/images/b4u/basket.png'
                  height={419}
                  width={735}
                  alt="Blinds 4 You basket"
                />
                <span className={styles.caption}>Blinds 4 You basket showcasing the additional item</span>
            </SwiperSlide>
            </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Electric Blinds Additional Items<span>:</span></h4>
            <p>Another feature I added to the Blinds 4 You website was a popup to allow customers to purchase additional items.<br></br><br></br>The popup shows after certain certain electrical items, identified by a tag attached to the product, are added to the basket. The items are created via the products section in the admin, and are found by the variant identifiers, which are selected in the code.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}