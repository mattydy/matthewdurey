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
  const posts = props.portfolio[17];
  const color = posts.color;
  const nextProject = props.portfolio[16];
  
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
          <p>Below I have listed some key features in the project, including functionality, code and design.</p>
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
                  src='/images/gc-group-booking/baileys.png'
                  height={419}
                  width={735}
                  alt="Baileys Blind Booking Page"
                />
                <span className={styles.caption}>Booking Page for Baileys Blinds</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/gc-group-booking/grampian.png'
                  height={419}
                  width={735}
                  alt="Booking Page for Grampian Blinds"
                />
                <span className={styles.caption}>Booking Page for Grampian Blinds</span>
            </SwiperSlide>

            <SwiperSlide>
                <Image
                  src='/images/gc-group-booking/aberdeen.png'
                  height={419}
                  width={735}
                  alt="Booking Page for Aberdeen Blind Company"
                />
                <span className={styles.caption}>Booking Page for Aberdeen Blind Company</span>
            </SwiperSlide>

            <SwiperSlide>
                <Image
                  src='/images/gc-group-booking/storeConfig.png'
                  height={419}
                  width={735}
                  alt="storeConfig File showing the different sites"
                />
                <span className={styles.caption}>StoreConfig file showing different websites</span>
            </SwiperSlide>
            </Swiper>

          </div>
          <div className={styles.content}>
            <h4>One codebase, multiple brands<span>:</span></h4>
            <p>The Goldcrest Group consists of seven companies under one umbrella. The application detects the current domain and dynamically loads the correct brand content from a centeral storeConfig.js file. To ensure a smooth user experience, a loading screen is displayed while content is being selected. This allows for one scalable codebase to power multiple websites efficiently.<br></br><br></br>
            The full list of sites is: <Link href="https://book.goldcrest-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://book.goldcrest-blinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://book.baileys-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://book.baileys-blinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://book.grampian-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://book.grampian-blinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://book.aberdeen-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://book.aberdeen-blinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://book.sunrite.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://book.sunrite.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://book.rainbow-blinds-and-interiors.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://book.rainbow-blinds-and-interiors.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://book.cruickshank-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://book.cruickshank-blinds.co.uk
      </a>
    </Link>,{" "}
    <Link href="https://book.scot-blinds.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://book.scot-blinds.co.uk
      </a>
    </Link> &{" "}
    <Link href="https://book.crestselfstorage.co.uk">
      <a target="_blank" rel="noopener noreferrer">
        https://book.crestselfstorage.co.uk
      </a>
    </Link>.</p>
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
                  src='/images/gc-group-booking/aberdeen.png'
                  height={419}
                  width={735}
                  alt="Aberdeen Blind Company missing the Google Reviews"
                />
                <span className={styles.caption}>Aberdeen Blind Company not showing the Google Reviews</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/gc-group-booking/grampian.png'
                  height={419}
                  width={735}
                  alt="Grampian Blinds not showing the Trustpilot Reviews"
                />
                <span className={styles.caption}>Grampian Blinds not showing the Trustpilot Reviews</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Optional Content<span>:</span></h4>
            <p>As each company has slightly different requirements, the form conditionally renders content depending on the configuration. For example, Trustpilot and Google Reviews only appear for the relevant brands, and if content fields are empty, these sections are automatically omitted from the page.</p>
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
                  src='/images/gc-group-booking/css.png'
                  height={419}
                  width={735}
                  alt="Crest Self Storage Page"
                />
                <span className={styles.caption}>Crest Self Storage Page</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                  src='/images/gc-group-booking/css-price.png'
                  height={419}
                  width={735}
                  alt="Crest Self Storage Pricing Table"
                />
                <span className={styles.caption}>Crest Self Storage pricing table</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Crest Self Storage<span>:</span></h4>
            <p>One of the groups companies, Crest Self Storage, required a modified version of the form as it contains animated gifs (to display storage unit sizes), a pricing table instead of a standard thank you page, and integration with MailChimp for marketing subscriptions.<br></br><br></br>Once the form is submitted user data is sent to MailChimp (if marketing consent is given) and 2 automated follow-up emails are triggered (after 2 days and 5 days).</p>
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
                src='/images/gc-group-booking/email-confirmation.png'
                height={419}
                width={735}
                alt="Email Confirmation that the cutomer recieves"
              />
              <span className={styles.caption}>Email Confirmation that the cutomer recieves</span>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/gc-group-booking/email-notification.png'
                height={419}
                width={735}
                alt="Email notification that staff recieve"
              />
              <span className={styles.caption}>Email notification that staff recieve</span>
            </SwiperSlide>
          </Swiper>

          </div>
          <div className={styles.content}>
            <h4>Integrations with Email and Google Sheets<span>:</span></h4>
            <p>One of the main features of this project was automating post submission workflows. After submitting the form, a confirmation email is sent to the customer, a notification email is sent to staff and an API call is made to write the booking information to the Google Sheet. This means that appointments are tracked in real time and reduces administration work.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}