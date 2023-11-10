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
  const posts = props.portfolio[13];
  const color = posts.color;
  const nextProject = props.portfolio[12];
  
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
          <p>Below I have listed some key features on the landing page. They include frontend features that help promote the campaign as well as elements of code to show how I can save time and repetition when coding for more than one market.</p>
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
                  src='/images/jet-dds/jet-dds-content.png'
                  height={419}
                  width={735}
                  alt="content.json file"
                />
                <span className={styles.caption}>Content.json file showing the English and Irish content</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/jet-dds/jet-dds-locality.png'
                  height={419}
                  width={735}
                  alt="env.local file"
                />
                <span className={styles.caption}>env.local file showing the locality</span>
            </SwiperSlide>
            </Swiper>

          </div>
          <div className={styles.content}>
            <h4>One codebase, multiple languages<span>:</span></h4>
            <p>I built this project in Vue JS and used a json file to pull the content. This allows me to have one codebase with different content, allowing for each market.<br /><br />The content.json file is seperated into localities, representing the country and language. When the project is built it finds the locality (which is set in the local environment file) and pulls the relevant data through. The file also allows the logos to change to the local brand name (i.e Thuisbezogd, Pyszne.pl and Takeaway.com). Within each section below I have explained in more detail about the code.<br/><br/>
            You can see the other landing pages here: <Link href="https://www.just-eat.ie/explore/did-somebody-say/"><a target="_blank">Ireland</a></Link></p>
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
                src='/images/jet-dds/jet-dds-homepage.png'
                height={419}
                width={735}
                alt="Did Somebody Say Landing Page intro"
              />
              <span className={styles.caption}>Did Somebody Say Campaign introduction</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/jet-dds/jet-dds-herocode.jpeg'
                height={419}
                width={735}
                alt="Hero component"
              />
              <span className={styles.caption}>Hero component</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/jet-dds/jet-dds-hero.png'
                height={419}
                width={735}
                alt="content.json showing hero content"
              />
              <span className={styles.caption}>Content.json file showing hero content</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Impactful start<span>:</span></h4>
            <p>When a consumer first lands on the page they will notice the large image of the talents (Christina Aguilera & Latto) as well as the 'Did Somebody Say Just Eat' logo. The background is set to the brand orange allowing consumers to know they are on the Just Eat platform.<br /><br />Within the code we import the content.json file and call the data through to the relevant places.</p>
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
                src='/images/jet-dds/jet-dds-video-start.png'
                height={419}
                width={735}
                alt="Video section before playing"
              />
              <span className={styles.caption}>Video section playing before it starts to play</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/jet-dds/jet-dds-video-playing.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Video section during playing"
                />
                <span className={styles.caption}>Video section playing during playing</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/jet-dds/jet-dds-contentvideo.png"
                    height={419}
                    width={735}
                    alt="content.json showing video ids"
                />
                <span className={styles.caption}>content.json file showing the video Ids</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/jet-dds/jet-dds-codevideo.png"
                    height={419}
                    width={735}
                    alt="video component"
                />
                <span className={styles.caption}>Video component</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/jet-dds/jet-dds-lyrics.png"
                    height={419}
                    width={735}
                    alt="Song lyrics"
                />
                <span className={styles.caption}>Song lyrics</span>
            </SwiperSlide>

            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Watch the Video & Read the Lyrics<span>:</span></h4>
            <p>The third and fourth sections of the landing page focus on the advert itself, allowing consumers to watch the video and read the lyrics to the song.<br /><br />The video is a youtube embed and it pulls the ID from the content.json file, allowing for each market to have its own advert in the local language.</p>
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
                  src='/images/jet-dds/jet-dds-food.png'
                  height={419}
                  width={735}
                  alt="Food section"
                />
                <span className={styles.caption}>Food section of the landing page</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/jet-dds/jet-dds-food-mobile.png'
                  height={419}
                  width={288}
                  alt="food section on mobile"
                />
                <span className={styles.caption}>Food section on mobile</span>
                </SwiperSlide>
              <SwiperSlide>
                 <Image
                  src='/images/jet-dds/jet-dds-contentfood.png'
                  height={419}
                  width={735}
                  alt="content.json file showing the food data"
                />
                <span className={styles.caption}>Content.json file showing the food data</span>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Taste the food<span>:</span></h4>
            <p>Section 5 of the Landing Page allows consumers to purchase the items of food featured in the video.<br /><br />
            On mobile the list only shows the first few items, with a 'See more' accordion allowing the consumers to see the full list.<br /><br />
            Within the code we input the Image, text and link to the food.</p>
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
                  src='/images/jet-dds/jet-dds-words.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="A word from those involved section"
                />
                <span className={styles.caption}>A word from those involved section</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/jet-dds/jet-dds-contentwords.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="content.json file showing the words data"
                />
                <span className={styles.caption}>Content.json file showing the words data</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Hear from the people involved<span>:</span></h4>
            <p>The final section of the landing page allows consumers to hear from the people invloved in the project, including Christina Aguilera and Latto, using a carousel.<br /><br />
            Within the code we call the content.json file and loop through the slides. This allows us to have different quotes per country.</p>
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
                  src='/images/jet-dds/jet-dds-footer.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="The footer on the landing page"
                />
                <span className={styles.caption}>The footer on the landing page</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/jet-dds/jet-dds-contentfooter.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="content.json file showing the footer data"
                />
                <span className={styles.caption}>Content.json file showing the footer data</span>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Corporate footer<span>:</span></h4>
            <p>One of the features of the landing page is the large footer that follows the same styling as the main footer on the <Link href="https://www.just-eat.co.uk/"><a target="_blank">Just Eat homepage</a></Link>.<br /><br />Within the content.json file I list the links and accordions, so I can easily edit the footer for multiple languages.</p>
          </div>
        </div>
      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}