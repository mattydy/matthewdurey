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
  const posts = props.portfolio[1];
  const color = posts.color;
  const nextProject = props.portfolio[2];
  
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
          <h3>Highlighted Features</h3>
          <p>Below I have listed some key features on the website. They include parts of the website which the client whiched to change from the original design, elements that I have coded to save time and repeation and areas of the site that were key for functionality/user experience.</p>
          </div>
      
        <div className={styles.feature}>
          <div className={styles.image}></div>
          
          <div className={styles.content}>
          <h4>Instant Impact</h4>
          <p>One of the key features of the Pitch site is the Imagry. When you first connect to teh site you are presented with a slider of high definition images, giving the users a clear indication of the type of clientele Pitch work with.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}
