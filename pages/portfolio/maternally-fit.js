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
  const posts = props.portfolio[15];
  const color = posts.color;
  const nextProject = props.portfolio[14];
  
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
                  src='/images/matfit/old-homepage.png'
                  height={419}
                  width={406}
                  alt="old homepage"
                />
                <span className={styles.caption}>Old Maternally Fit homepage</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/matfit/old-about.png'
                  height={419}
                  width={406}
                  alt="Old Maternally Fit about us page"
                />
                <span className={styles.caption}>Old Maternally Fit about us page</span>
            </SwiperSlide>

            <SwiperSlide>
                <Image
                  src='/images/matfit/old-company.png'
                  height={419}
                  width={406}
                  alt="Old Maternally Fit company values page"
                />
                <span className={styles.caption}>Old Maternally Fit company values page</span>
            </SwiperSlide>
            </Swiper>

          </div>
          <div className={styles.content}>
            <h4>The old website<span>:</span></h4>
            <p>The old Maternally Fit website had not been updated since 2006. All pages had the same template, there was no functionality and the site was not mobile responsive.</p>
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
                src='/images/matfit/homepage.png'
                height={419}
                width={735}
                alt="Maternally Fit homepage image"
              />
              <span className={styles.caption}>Full width image</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/matfit/image-links.png'
                height={419}
                width={735}
                alt="Images linking to other pages"
              />
              <span className={styles.caption}>Images linking to other pages</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/matfit/contact-form.png'
                height={419}
                width={735}
                alt="contact form"
              />
              <span className={styles.caption}>Contact form</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/matfit/instagram.png'
                height={419}
                width={735}
                alt="Instagram feed"
              />
              <span className={styles.caption}>Instagram feed</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>New features<span>:</span></h4>
            <p>There are a few new features on the website to modernize the site in line with current web design trends. The site makes use of full width images which can either be static or parallax.<br></br><br></br>Images are also used to link to other pages. The use of all these images makes the site more appealing, improving the user experience and adding a sense of dynamism.<br></br><br></br>The new website also makes use of contact forms to allow potential users to get in touch easily. It also has a social media feed so that potential clients can get a real time look into what Maternally Fit is about.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}