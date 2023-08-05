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
  const posts = props.portfolio[6];
  const color = posts.color;
  const nextProject = props.portfolio[5];
  
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
                  src='/images/nodishrespect/nodishrespect.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="nodishrespect homepage"
                />
                <span className={styles.caption}>Homepage showing Masonry layout</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/nodishrespect/masonry-layout-cms.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Masonry layout CMS"
                />
                <span className={styles.caption}>Masonry Layout selection in the CMS</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/nodishrespect/recipe-upload.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Recipe Upload"
                />
                <span className={styles.caption}>Recipe Upload within the CMS</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/nodishrespect/upload-image.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Upload Images for Recipes"
                />
                <span className={styles.caption}>Image Upload for the Recipes</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/nodishrespect/main-courses.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Main Courses"
                />
                <span className={styles.caption}>Main Courses showing on home page</span>
                </SwiperSlide>
                </Swiper>
                </div>
          <div className={styles.content}>
            <h4>Easy to create Recipes<span>:</span></h4>
            <p>As NoDishrespect is a food blogging website it was important to make sure that not only did the recipes have high quality images, but that they were also easy to upload and follow.<br></br><br></br>Within the CMS I created a post type called 'Recipes' where the client could add a new Recipe. Then, in conjunction with the WP Recipe Maker plugin, the Client could add additional high quality images. Within the CMS the client could then select which recipes they wanted to show on the front page, as well as automatically pulling through recipes from set categories.</p>
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
                  src='/images/nodishrespect/blog-cms.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="blog cms"
                />
                <span className={styles.caption}>Blogs in the CMS</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/nodishrespect/blog-page.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Blog page"
                />
                <span className={styles.caption}>Blog Page</span>
                </SwiperSlide>
                </Swiper>
                </div>
          <div className={styles.content}>
            <h4>Blog<span>:</span></h4>
            <p>The client also wanted to create a blog for their website, allowing them the ability to give users tips on cooking and guides to the best types of food.<br></br><br></br>I used the default 'Post' post type within the CMS to allow the client to create the post types, then on the Blog page I pulled the blog posts through automatically.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}