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
                  src='/images/jet-collection/beta/content-js.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="content.js file"
                />
                <span className={styles.caption}>content.js file</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/beta/env.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="env.local file showing the available languages"
                />
                <span className={styles.caption}>env.local file showing the available languages</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/beta/content-hero.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Code to pull the correct language"
                />
                <span className={styles.caption}>Code to pull the correct language</span>
                </SwiperSlide>
                </Swiper>
        </div>
          <div className={styles.content}>
            <h4>One file for multiple languages<span>:</span></h4>
            <p>At the moment the Lieferando Beta landing page only focuses on the Austrian market. However the Stakeholder mentioned that we may be releasing the app in different markets and if that was the case the design would be the same, with different content.<br></br><br></br>Therefore I decide that it made sense to build this project using Vue JS, as it allows me to create a content.js file with universal content.<br></br><br></br>Once the file has been created I also create a env.local file with the 'VUE_APP_LOCALITY' variable, which lets the code know which language to pull the content through for.</p>
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
                  src='/images/jet-collection/beta/link.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Link within content.js"
                />
                <span className={styles.caption}>Link within content.js file</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/beta/get-data.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Code to get the data"
                />
                <span className={styles.caption}>Code to get the data</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/beta/faqs-code.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Code to show the questions and answers"
                />
                <span className={styles.caption}>Code to show the questions and answers</span>
                </SwiperSlide>
                </Swiper>
            </div>
          <div className={styles.content}>
            <h4>Ability to dynamically change content<span>:</span></h4>
            <p>As this is a landing page for a new app, the Stakeholder wanted the ability to update the Frequently asked questions without the need to continuously come back to a developer. Therefore I created two separate json files named 'faqs-en.json' and 'faqs-de.json' (one for each language).<br></br><br></br>Then within the content.js file, I have a link to each file on the server, so that we can continue to add languages and don't need to change any of the code.<br></br><br></br>Following this I then call the data within the FAQs.vue component when the page first loads. I then loop through the questions and answers and show them on the page. This means that the Stakeholder can simply update the file on teh server and it will be reflected on the live page.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}