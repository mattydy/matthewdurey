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
  const posts = props.portfolio[14].subProjects[2];
  const color = posts.color;
  const nextProject = props.portfolio[14].subProjects[3];
  
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
                  src='/images/jet-collection/veganuary/code-footer.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="code pulling the header and footer"
                />
                <span className={styles.caption}>Code to get the header and footer</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/veganuary/footer.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="universal footer"
                />
                <span className={styles.caption}>Image showing the universal footer with English content</span>
                </SwiperSlide>
                </Swiper>
        </div>
          <div className={styles.content}>
            <h4>Universal header and footer<span>:</span></h4>
            <p>The Veganuary campaign uses the universal header and footer that exists throughout the <Link href="https://www.just-eat.co.uk/sustainability/"><a target="_blank">Sustainability</a></Link> pages on the Just Eat Takeaway.com platform. The header and footer files are hosted online and pulled through using some code.</p>
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
                  src='/images/jet-collection/veganuary/deals.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Deals section of the site"
                />
                <span className={styles.caption}>Deals section of the page</span>
                </SwiperSlide>
                </Swiper>
            </div>
          <div className={styles.content}>
            <h4>Localised Deals<span>:</span></h4>
            <p>The Stakeholder on this project wanted consumers to be able to link directly to the deals filter on the Just Eat site. They wanted consumers on the German and English versions of the website to link to deals within the Zürich area, and consumers on the French version to link to deals within the Geneva area.<br></br><br></br>To do this I have simply added the 'deals' and 'area' to the URL on the Just Eat website.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}