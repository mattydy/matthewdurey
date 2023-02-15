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
  const posts = props.portfolio[0];
  const color = posts.color;
  const nextProject = props.portfolio[1];

  return (
    <div>
      <style jsx>{`
      h1::after, h3::after, h4:after {
        content: '';
        background: ${color};
      }
      
      a {
        color: ${color};
      }
      
      .utils_image__J4Rwl .swiper-pagination-bullet-active {
        background: ${color};
      }`}</style>

    <div className='container'>
      <PortfolioIntro data={posts}></PortfolioIntro>

      <div className={styles.portfolioContent}>
        <div className={styles.highlights}>
      <h3>Highlighted Features</h3>
      <p>Below I have listed some key features on the website. They include parts of the website which the client whiched to change from the original design, elements that I have coded to save time and repeation and areas of the site that were key for functionality/user experience.</p>
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
                "--swiper-pagination-color": "#ffa800",
                "--swiper-pagination-bullet-inactive-color" : 'white'
              }}
            >
            <SwiperSlide>
              <Image
                  src='/images/impact-stats.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Impact Stats block on Desktop"
                />
                <span className={styles.caption}>Impact Stats block on Desktop</span>
                </SwiperSlide>
                <SwiperSlide>
                            <Image
                  src='/images/impact-stats-mobile.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={217}
                  alt="Impact Stats block on Mobile"
                />
                <span className={styles.caption}>Impact Stats block on Mobile</span>
                </SwiperSlide>
                </Swiper>
                </div>
          <div className={styles.content}>
            <h4>Impact Sliders</h4>
            <p>The client wanted to create a new section that not only attracts the eye but also displays further information about their objects as a company. Together with the design team at Go Up we came up with the ‘Impact Stats’ block. The user has the option to add between 2 - 5 slides, as well as the option to display text, icons, a paragraph of text and can also link to either a video or a page. <br></br><br></br>On mobile and tablet the block turns into a slider, showing 1 slide at a time (on tablet it shows 2), and displays all the information without the need to hover/click on the slide.</p>
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
                  "--swiper-pagination-color": "#ffa800",
                  "--swiper-pagination-bullet-inactive-color" : 'white'
                }}
              >
              <SwiperSlide>
                  <Image
                  src='/images/ecc-original-menu.png'
                  height={918}
                  width={1612}
                  alt=""
                />
                <span className={styles.caption}>Old Menu layout</span>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                      src='/images/ecc-mega-menu.png'
                      height={918}
                      width={1612}
                      alt=""
                    />
                  <span className={styles.caption}>New Menu layout</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Mega Menu</h4>
            <p>When the build was nearly complete the client wanted to change the structure of the ‘Our Solutions’ area. Previously on the Menu they had only displayed the page names and wanted to include more information about the solutions offered. Working with the Design team we implemented a different menu, one which gave the user the ability to read a summary on the Solution before visiting the page.</p>
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
                  "--swiper-pagination-color": "#ffa800",
                  "--swiper-pagination-bullet-inactive-color" : 'white'
                }}
              >
              <SwiperSlide>
                  <Image
                  src='/images/ecc-options-404.png'
                  height={918}
                  width={1612}
                  alt=""
                />
                <span className={styles.caption}>404 Page set in CMS</span>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                      src='/images/ecc-404-page.png'
                      height={918}
                      width={1612}
                      alt=""
                    />
                  <span className={styles.caption}>The 404 Page data pulling through</span>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                      src='/images/ecc-options-say-hello.png'
                      height={918}
                      width={1612}
                      alt=""
                    />
                  <span className={styles.caption}>Say Hello block set in Options</span>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                      src='/images/ecc-say-hello.png'
                      height={918}
                      width={1612}
                      alt=""
                    />
                  <span className={styles.caption}>The say hello data pulling though on the Say Hello block</span>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                      src='/images/our-coaches-options.png'
                      height={918}
                      width={1612}
                      alt=""
                    />
                  <span className={styles.caption}>The client can set the default Testionials and logos in the CMS</span>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                      src='/images/ecc-our-coaches.png'
                      height={918}
                      width={1612}
                      alt=""
                    />
                  <span className={styles.caption}>They show up on the front end</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Options Page</h4>
            <p>Due to the size of this site there were certain blocks that would always display the same information, ‘Our Coaches’, 'Say Hello' and the 404 page to name a few. Therefore it made sense to create the fields for these blocks in one place and call them when the user selects the block. I created an ‘Options’ section in the CMS, where I placed all the universal settings.</p>
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
                  "--swiper-pagination-color": "#ffa800",
                  "--swiper-pagination-bullet-inactive-color" : 'white'
                }}
              >
              <SwiperSlide>
                  <Image
                  src='/images/ecc/ecc-resources.png'
                  height={918}
                  width={1612}
                  alt=""
                />
                <span className={styles.caption}>The 'Resources' area on teh site showing the relevant categories and blog articles.</span>
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                      src='/images/ecc/ecc-work-family-you.png'
                      height={918}
                      width={1612}
                      alt=""
                    />
                  <span className={styles.caption}>The 'Work, Family & You' area on the site, showing the Categories and Blog articles unique to this section.</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Multiple Blog Areas</h4>
            <p>One of the key features of the ECC site was the multiple blogs areas. They have an area called Resources and an area called ‘Work, Family & You’. Both of these areas have their own Categories, Tags and Articles.</p>
          </div>
        </div>
      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}