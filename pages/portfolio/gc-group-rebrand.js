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
  const posts = props.portfolio[19];
  const color = posts.color;
  const nextProject = props.portfolio[18];
  
  return (
    <div>
      <style jsx>{`
      h1::after, h3::after, h4:after {
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
          <p>Below I have listed some key features in the project, including functionality, code and design.</p>
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
                  src='/images/gc-group-rebrand/homepage-grampian-old.png'
                  height={419}
                  width={735}
                  alt="Old Grampian Branding"
                />
                <span className={styles.caption}>Old Grampian Branding</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/gc-group-rebrand/homepage-grampian.png'
                  height={419}
                  width={735}
                  alt="New Grampian Branding"
                />
                <span className={styles.caption}>New Grampian Branding</span>
            </SwiperSlide>


            </Swiper>

          </div>
          <div className={styles.content}>
            <h4>One codebase, multiple brands<span>:</span></h4>
            <p>The rebrand apllies to seven sites, all with the same branding, layouts and functionality. Therefore I felt the best solution was to use a base shopify theme, storing the majority of the code and settings.<br></br><br></br>Each site then has a separate branch, which contains individual settings and site specific content.<br></br><br></br>
            The full list of sites is: <Link href="https://goldcrest-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://goldcrest-blinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://baileys-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://baileys-blinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://grampian-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://grampian-blinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://sunrite.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://sunrite.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://rainbowblinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://rainbowblinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://cruickshank-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://cruickshank-blinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://scot-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://scot-blinds.co.uk
      </a>
    </Link>.</p>
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
                  src='/images/gc-group-rebrand/theme-settings.png'
                  height={419}
                  width={735}
                  alt="Grampian theme settings"
                />
                <span className={styles.caption}>Grampian theme settings</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/gc-group-rebrand/metaobjects.png'
                  height={419}
                  width={735}
                  alt="Shopify Metaobjects"
                />
                <span className={styles.caption}>Shopify Metaobjects</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/gc-group-rebrand/metaobject-content.png'
                  height={419}
                  width={735}
                  alt="Metaobjects Content"
                />
                <span className={styles.caption}>Metaobjects content</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/gc-group-rebrand/frontend.png'
                  height={419}
                  width={735}
                  alt="How it works on the frontend"
                />
                <span className={styles.caption}>How it works on the Frontend</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Side Wide Settings<span>:</span></h4>
            <p>There are various sections on the website that are the same across each page, for example the 'How it works' section. I've used a mixture of Metaobjects and Theme Settings. Theme settings are where titles, colours and links are set, whereas Metaobjects are where the content for the sections are created and stored.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}