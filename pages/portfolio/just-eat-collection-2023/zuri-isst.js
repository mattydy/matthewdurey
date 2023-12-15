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
  const posts = props.portfolio[14].subProjects[0];
  const color = posts.color;
  const nextProject = props.portfolio[14].subProjects[1];
  
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
                  src='/images/jet-collection/zuri-isst/content-js.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Content.json file"
                />
                <span className={styles.caption}>Content.json file</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/zuri-isst/de-content.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Landing page showing German content"
                />
                <span className={styles.caption}>Landing page showing German content</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/zuri-isst/eng-content.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Landing page showing English content"
                />
                <span className={styles.caption}>Landing page showing English content</span>
                </SwiperSlide>
                </Swiper>
        </div>
          <div className={styles.content}>
            <h4>One file for two languages<span>:</span></h4>
            <p>As this landing page is focused on restaurants in Zürich, there are two languages needed (German and English). Instead of having to replicate the same code twice, I have used a JSON file to contain the relevant data and then pulled that through whenever it is needed.</p>
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
                  src='/images/jet-collection/zuri-isst/september.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Array showing September data"
                />
                <span className={styles.caption}>Array showing September data</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/zuri-isst/october.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Array showing October data"
                />
                <span className={styles.caption}>Array showing October data</span>
                </SwiperSlide>
                </Swiper>
            </div>
          <div className={styles.content}>
            <h4>Different restaurants each month<span>:</span></h4>
            <p>Each month, the landing page features a different restaurant. This means the featured image, restaurant logo, restaurant content and image gallery all change to display the new content.<br></br><br></br>Within the content.json file I have created an array, where I input the relevant details for the restaurant. This is done for both the German and English markets.</p>
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
                  src='/images/jet-collection/zuri-isst/applyclass.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="applyClass function in the Hero Component"
                />
                <span className={styles.caption}>applyClass function in the Hero Component</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/zuri-isst/november-tab.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="November data unlocked"
                />
                <span className={styles.caption}>November data unlocked</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/zuri-isst/december-tab.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="December data unlocked"
                />
                <span className={styles.caption}>December data unlocked</span>
                </SwiperSlide>
                </Swiper>
            </div>
          <div className={styles.content}>
            <h4>Getting the current month<span>:</span></h4>
            <p>As the content changes each month, I have decided to use some JavaScript to get the current month and then display the relevant information.<br></br><br></br>Within each component I have created a function called applyClass. Once the page is loaded this function looks at which month it is currently is applies various active classes throughout the document.</p>
          </div>
        </div>

        <div className={`${styles.feature} ${styles.featureAlt}`}>
          <div className={styles.image}>
          <Image
                  src='/images/jet-collection/zuri-isst/changemonth.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="changeMonth function"
                />
            <span className={styles.caption}>changeMonth function within the Hero component</span>
            </div>
          <div className={styles.content}>
            <h4>Changing month<span>:</span></h4>
            <p>One feature that the stakeholder wanted on this project was the ability to see the previous month restaurants using tabs on the page. This meant that I needed to create a changeMonth function and apply it to each tab. Once the user clicks on the previous month, this function gets the class name from the tab (which is the month) and finds the relevant content from the content.json file.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}