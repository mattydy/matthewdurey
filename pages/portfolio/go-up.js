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
  const posts = props.portfolio[12];
  const color = posts.color;
  const nextProject = props.portfolio[11];
  
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
                  src='/images/goup/menu-main.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Main menu on page"
                />
                <span className={styles.caption}>Main menu on page</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/goup/menu-slide-out.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Menu on Slide out"
                />
                <span className={styles.caption}>Menu on the slide out</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/contact-slide-out.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Contact form on slide out"
                />
                <span className={styles.caption}>Contact form on slide out</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/woosh.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Slide out showing thank you content"
                />
                <span className={styles.caption}>Slide out showing thank you content</span>
                </SwiperSlide>
                </Swiper>
                </div>
          <div className={styles.content}>
            <h4>Slide out<span>:</span></h4>
            <p>One of the key features of the website is the slide out section. This section holds the menu as well as the contact form. When the hamburger menu is clicked the slide out shows the Main menu and when any of the 'Let's talk' buttons/links are clicked it shows the contact form. When the contact form is submitted, the content changes to let the user know the form has been sent.</p>
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
                  src='/images/goup/our-team-overview.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Overview of the 'Our Team' section"
                />
                <span className={styles.caption}>Overview of the 'Our Team' section</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/goup/our-team-post-type.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="User Custom fields"
                />
                <span className={styles.caption}>User custom fields</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/our-team-slider.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Our team sliders pulling through the select teams"
                />
                <span className={styles.caption}>Our team sliders pulling through the select teams</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/our-team-blog.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Our blog showing the authors"
                />
                <span className={styles.caption}>The users also showed as authors in the blog section</span>
                </SwiperSlide>
                </Swiper>
          </div>
          <div className={styles.content}>
            <h4>Team Profiles<span>:</span></h4>
            <p>Throughout the website one recurring theme is the staff profiles. On the old website all staff images and references were individual, meaning that if a staff member left their profile would need to be removed from each page. This was hard to manage and usually meant pages were skipped.<br></br><br></br>To overcome this on the new website I decided to create custom fields within the Users section. This meant I could add a field where the users 'Status' could be enabled or disabled. I also added a 'Teams' selector which when used with the 'Team' slider block pulled through the correct people.</p>
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
                src='/images/goup/testimonial-list.png'
                // height={400}
                // width={212}
                height={419}
                width={735}
                alt="List of testimonials in the CMS"
              />
              <span className={styles.caption}>List of testimonials in the CMS</span>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                  src='/images/goup/testimonial-single.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="A single testimonial in the CMS"
                />
                <span className={styles.caption}>A single testimonial in the CMS</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/testimonial-block.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="The testimonial block"
                />
                <span className={styles.caption}>The testimonial block</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/testimonial-user.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Testimonial showing user quote"
                />
                <span className={styles.caption}>Testimonial showing user quote</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/testimonial-slider.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Testimoinal showing company quote"
                />
                <span className={styles.caption}>Testimonial showing company quote</span>
                </SwiperSlide>
                </Swiper>
                </div>
          <div className={styles.content}>
            <h4>Testimonials<span>:</span></h4>
            <p>Another feature of the website was the testimonial slider. Testimonials are used throughout the website, on the homepage, case studies page and about us page to name a few. On the old website these testimonials were manually added, meaning they needed to be copy and pasted across numerous pages.<br></br><br></br>To overcome this I decided to create a Testimonial post type, allowing testimonials to be created once and pulled though wherever they were needed.</p>
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
                  src='/images/goup/menu-theme-options.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Menu set within theme options"
                />
                <span className={styles.caption}>Menu set within theme options</span>
                </SwiperSlide>
            <SwiperSlide>
              <Image
                  src='/images/goup/benefits-theme-options.png'
                  // height={918}
                  // width={1612}
                  height={419}
                  width={735}
                  alt="Benefits & Perks set within theme options"
                />
                <span className={styles.caption}>Benefits & Perks set within theme options</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/benefits-results.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Benefits results on page"
                />
                <span className={styles.caption}>Benefits & Perks showing on the page</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/404-theme-options.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="404 settings in theme options"
                />
                <span className={styles.caption}>404 settings in theme options</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/goup/404-result.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="404 showing on page"
                />
                <span className={styles.caption}>404 page showing the data</span>
                </SwiperSlide>
                </Swiper>
                </div>
          <div className={styles.content}>
            <h4>Theme options<span>:</span></h4>
            <p>Lots of the content on the site is set within the Theme Options section, meaning that content doesn't need to be duplicated on certain pages. Some examples include the Main Menu, the Benefits & Perks section, the 404 page and Social media links.</p>
          </div>
        </div>
      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}