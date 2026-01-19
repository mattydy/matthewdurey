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
          <p>Below are some of the key features of the Triple Point Digital website. I designed and developed these elements to streamline workflows, clearly present services, and provide a smooth experience for visitors.</p>
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
                  src='/images/3point/homepage-animation.gif'
                  height={419}
                  width={735}
                  alt="homepage animations"
                />
                <span className={styles.caption}>Homepage anmiations showing the floating feel</span>
            </SwiperSlide>
            </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Distinct Visual Identity & Brand<span>:</span></h4>
            <p>The site was designed to stand out from competitors through a darker colour palette and floating elements that add depth and movement, rather than relying on a traditional brochure-style layout. Subtle animated effects help create a modern, dynamic feel while keeping the experience lightweight and accessible.<br></br><br></br>The brand and visual identity are established immediately in the hero section, featuring a strong headline built around the agency's motto, alongside two large animated dots in the core brand colours.</p>
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
                  src='/images/3point/services.png'
                  height={419}
                  width={735}
                  alt="homepage animations"
                />
                <span className={styles.caption}>Services showcasing the Create, Code, Compete</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/3point/homepage-services.gif'
                  height={419}
                  width={735}
                  alt="homepage animations"
                />
                <span className={styles.caption}>Create, Code, Compete on the homepage</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Create, Code, Compete<span>:</span></h4>
            <p>The agency's motto, Create, Code, Compete, influenced both the visual and structural decisions throughout the site — from the name Triple Point to the three-dot logo and the way services are presented. This helped reinforce the brand's philosophy in a simple, visual way.<br></br><br></br>The colour palette of green, pink, and gold was used consistently across the site to further support this identity and create visual cohesion.</p>
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
                src='/images/3point/about-us.png'
                height={419}
                width={735}
                alt="About us paragraphs"
              />
              <span className={styles.caption}>About us paragraphs on About Us page</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/3point/about-us-mobile.png'
                height={419}
                width={270}
                alt="about us paragraphs on mobile"
              />
              <span className={styles.caption}>The same paragraph on mobile</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/3point/text-quote.png'
                height={419}
                width={735}
                alt="Text block and quote block on desktop"
              />
              <span className={styles.caption}>Text block and quote block</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/3point/text-quote-mobile.png'
                height={419}
                width={270}
                alt="Text block and quote block on mobile"
              />
              <span className={styles.caption}>The same blocks on mobile</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Responsive & Performance Focused<span>:</span></h4>
            <p>The website was built with mobile users in mind, using flexible layouts that adapt seamlessly across desktop and mobile devices. Images and animations were optimised to maintain fast load times and strong SEO fundamentals, while preserving a smooth and engaging user experience.</p>
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
                src='/images/3point/homepage.png'
                height={419}
                width={735}
                alt="Homepage showcasiing Call To Action"
              />
              <span className={styles.caption}>Homepage showcasing call to action</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/3point/about-us.png'
                height={419}
                width={735}
                alt="Floating CTA"
              />
              <span className={styles.caption}>Image showing the floating get in touch button</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Intuitive Navigation & User Flow<span>:</span></h4>
            <p>User journeys were carefully considered throughout the build. Calls to action were positioned to guide visitors naturally through the site, while the navigation included a floating Get in Touch button to make key actions easily accessible without interrupting the browsing experience.</p>
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
                src='/images/3point/blocks.png'
                height={419}
                width={735}
                alt="CMS of website showcasing blocks"
              />
              <span className={styles.caption}>The CMS showcasing how pages are built using blocks</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/3point/fields.png'
                height={419}
                width={735}
                alt="CMS of website showcasing fields"
              />
              <span className={styles.caption}>The fields available within the Text block</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Content Flexibility<span>:</span></h4>
            <p>The site was developed using reusable content blocks, allowing pages to be updated quickly and consistently. This approach made it easy to manage case studies and blog content, enabling a strong focus on content quality without complex editing workflows.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}