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
  const posts = props.portfolio[11];
  const color = posts.color;
  const nextProject = props.portfolio[10];
  
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
                  src='/images/matthewdurey/old-homepage.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Old homepage"
                />
            <span className={styles.caption}>The old homepage</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/matthewdurey/homepage.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="New homepage"
                />
            <span className={styles.caption}>The new homepage</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/matthewdurey/about-page.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="about page"
                />
            <span className={styles.caption}>About page showing the use of the accent colour</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/matthewdurey/portfolio-page.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="portfolio page"
                />
            <span className={styles.caption}>Portfolio page showing the brand colour of the company</span>
            </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Colour Scheme<span>:</span></h4>
            <p>One of the main changes from the previous website is the colour scheme. The old website used a range of colours (white, grey, black and light blue). I decided to simplify the colour scheme, using an off black for the background, white for text and keeping the light blue (which represents trust) as my feature colour. This is used throughout the website on the headings, links and punctuation.<br></br><br></br>Within my portfolio each website has an assigned colour too which is usually the brand colour of the company. This colour is used on the homepage, as well as sublty throughout the portfolio page.</p>
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
                  src='/images/matthewdurey/old-portfolio.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Old portfolio"
                />
                <span className={styles.caption}>Old portfolio</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/matthewdurey/new-portfolio.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="New portfolio"
                />
                <span className={styles.caption}>New portfolio</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/matthewdurey/portfolio-features.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Portfolio features"
                />
                <span className={styles.caption}>Feature sections on the portfolio page</span>
                </SwiperSlide>
                </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Detailed Portfolio<span>:</span></h4>
            <p>On the previous website the portfolio page listed all the websites I had worked on. When the links were clicked on the user was directed to the website. I decided that on the new website I should talk a bit about the website.<br></br><br></br>On the new site I have created a page for each project. On the portfolio page I have listed the services used and when hovered on the text changes to the featured colour of the project. Within each project I talk about certain elements of the site to give users an insight into how the site works and features that help the site stand out.</p>
          </div>
        </div>

        <div className={`${styles.feature}`}>
          <div className={styles.image}>
                <Image
                  src='/images/matthewdurey/about-page.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Buttons on bottom of page"
                />
                <span className={styles.caption}>Buttons showing at bottom of page</span>

          </div>
          <div className={styles.content}>
            <h4>User journey<span>:</span></h4>
            <p>When creating a website one of the main things to consider is the user journey. This means considering what you want to achieve on the website, in this case potential clients getting in touch with me.<br></br><br></br>At the bottom of each page I have added buttons, to allow the user to easily navigate to my contact page where they can reach out.</p>
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
                  src='/images/matthewdurey/bc-new-back.png'
                  // height={400}
                  // width={212}
                  height={620}
                  width={914}
                  alt="back of new business card"
                />
                <span className={styles.caption}>Back of the new business card</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/matthewdurey/bc-new-front.png'
                  // height={918}
                  // width={1612}
                  height={620}
                  width={914}
                  alt="front of new business card"
                />
                <span className={styles.caption}>Front of new business card</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/matthewdurey/bc-old-back.png'
                  // height={400}
                  // width={212}
                  height={620}
                  width={402}
                  alt="Back of old business card"
                />
                <span className={styles.caption}>Back of old business card</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/matthewdurey/bc-old-front.png'
                  // height={400}
                  // width={212}
                  height={620}
                  width={402}
                  alt="Front of old business card"
                />
                <span className={styles.caption}>Front of old business card</span>
                </SwiperSlide>
                </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Business cards<span>:</span></h4>
            <p>Along with rebranding the website, I also created new business cards. I decided to match the colours of the website, using the off black as the background and the light blue as an accent. I also decided to add 2 QR codes, one taking the user to my LinkedIn profile and the other to my portfolio page.</p>
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
                  src='/images/matthewdurey/data.json.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="data.Json File"
                />
                <span className={styles.caption}>This is the data.json file which holds the portfolio info</span>
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                  src='/images/matthewdurey/portfolio-intro.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Portfolio intro component"
                />
                <span className={styles.caption}>The portfolio intro component</span>
                </SwiperSlide>
                </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Clean Code<span>:</span></h4>
            <p>As I was moving from WordPress to React I wanted to make the process of adding portfolio projects simple. I decided to break each portfolio page into components and by creating a data.json file I could add the majority of content in one place and it would dynamically update on the site.<br></br><br></br>Within the individual portfolio pages I called the relevant components (Portfolio Intro & Portfolio Conclusion) and passed the data through. Then I simply added the relevant content on the page.</p>
          </div>
        </div>


      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}