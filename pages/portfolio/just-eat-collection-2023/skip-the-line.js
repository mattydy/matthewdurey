import fsPromises from 'fs/promises';
import path from 'path'
import Image from 'next/image';
import styles from '../../../styles/utils.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Link from 'next/link';
import PortfolioIntro from '../../../components/portfolio-intro'
import PortfolioConclusion from '../../../components/portfolio-conclusion'

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
  const posts = props.portfolio[14].subProjects[3];
  const color = posts.color;
  const nextProject = props.portfolio[14].subProjects[4];
  
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
          <p>Below, I have listed some key features of this project. They include parts elements that I have coded to save time and repetition, features of functionality, and areas of the site that were key for user experience.</p>
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
                  src='/images/jet-collection/skip/skip-the-line.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="hero images on desktop"
                />
                <span className={styles.caption}>Hero images on desktop</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/skip/hero-mobile.png'
                  // height={400}
                  // width={212}
                  height={421}
                  width={186}
                  alt="hero images on mobile"
                />
                <span className={styles.caption}>Hero images on mobile</span>
                </SwiperSlide>
                </Swiper>
        </div>
            <div className={styles.content}>
            <h4>Responsive Issues<span>:</span></h4>
            <p>There are numerous sections on the page that contain images or buttons that are layed out side by side, like the hero images and the 'How it works' instructions. On mobile we decided to make the hero images turn into a slider, so we can show the food types in greater detail. The 'How it works' steps fall under one another so the user can easily read the instructions.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}