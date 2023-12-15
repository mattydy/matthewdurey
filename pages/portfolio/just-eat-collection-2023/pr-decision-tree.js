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
                  src='/images/jet-collection/pr-tree/proactive.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Proactive question design"
                />
                <span className={styles.caption}>Proactive question design</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/pr-tree/reactive.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Reactive question design"
                />
                <span className={styles.caption}>Reactive question design</span>
                </SwiperSlide>
                </Swiper>
        </div>
          <div className={styles.content}>
            <h4>Proactive or Reactive<span>:</span></h4>
            <p>There are 2 main paths that the user can take, Proactive or Reactive, and this is the first question.<br></br><br></br>As I've built the project using VueJS, I decided to create a content.js file to contain the questions. I created 2 arrays, one for the Proactive questiosn, and the other for the Reactive questeions.<br></br><br></br>As the design varies depending on the answer, I've also created two components (questions-pro.vue & questions-react.vue). </p>
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
                  src='/images/jet-collection/pr-tree/ifstatement.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="javascript for the yes answer"
                />
                <span className={styles.caption}>Javascript for the yes answer</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/pr-tree/action.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="action provided to the user"
                />
                <span className={styles.caption}>Action provided to the user</span>
                </SwiperSlide>
                </Swiper>
            </div>
          <div className={styles.content}>
            <h4>Question flow<span>:</span></h4>
            <p>Each question has a 'Yes' or a 'No' answer, which once answered displays the next question in the line.<br></br><br></br>Within the code I have used some IF statements and pull the correct content from the content.json file.<br></br><br></br>Once all questions in teh line has been answered the user will be given an instruction.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}