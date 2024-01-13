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
  const posts = props.portfolio[14].subProjects[6];
  const color = posts.color;
  const nextProject = props.portfolio[14].subProjects[7];

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
                  src='/images/jet-collection/taste/menu.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="menu.html file"
                />
                <span className={styles.caption}>menu.html file</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/taste/code.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="JavaScript to load menu.html"
                />
                <span className={styles.caption}>JavaScript to load menu.html</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/taste/language.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Language toggle"
                />
                <span className={styles.caption}>Language toggle</span>
                </SwiperSlide>
                </Swiper>
        </div>
          <div className={styles.content}>
            <h4>Language selection<span>:</span></h4>
            <p>The Taste the Summer campaign ran across most markets of which many have more than one language, for example the Swiss market has 3 available languages, German, French and English. Therefore we need to give the consumers the option to change their language.<br></br><br></br>I did this by creating a menu.html file with all the available options. Then using some JavaScript, we get the language and show the available options on the page.<br></br><br></br>You can see the other languages here: <Link href="https://www.just-eat.ie/deals/tastethesummer/"><a target="_blank">Ireland</a></Link>, <Link href="https://www.lieferando.at/deals/schmeckt-wie-sommer/"><a target="_blank">Austria</a></Link>, <Link href="https://www.just-eat.ch/deals/schmeckt-wie-sommer/"><a target="_blank">Switzerland</a></Link>, <Link href="https://www.takeaway.com/be/deals/proef-de-zomer/"><a target="_blank">Belgium</a></Link>, <Link href="https://www.lieferando.de/deals/schmeckt-wie-sommer/"><a target="_blank">Germany</a></Link>, <Link href="https://www.just-eat.fr/deals/saveurs-de-lete/"><a target="_blank">France</a></Link>, <Link href="https://www.thuisbezorgd.nl/deals/proef-de-zomer/"><a target="_blank">Netherlands</a></Link> and <Link href="https://www.pyszne.pl/deals/smak-lata/"><a target="_blank">Poland</a></Link>.</p>
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
                  src='/images/jet-collection/taste/tandcs.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Terms and conditions page"
                />
                <span className={styles.caption}>Terms and conditions page</span>
                </SwiperSlide>
                </Swiper>
            </div>
          <div className={styles.content}>
            <h4>Terms & Conditions<span>:</span></h4>
            <p>As mentioned previously, this project was split into two parts, the Informative Landing Page and the Terms & Conditions page.<br></br><br></br>The Terms & Conditions page is also built using static HTML and uses the same menu.html file that the Informative Landing Pages use.<br></br><br></br>You can see the Terms & Conditions pages here: <Link href="https://www.just-eat.co.uk/deals/tastethesummer-terms-and-conditions/"><a target="_blank">UK</a></Link>, <Link href="https://www.just-eat.ie/deals/tastethesummer-terms-and-conditions/"><a target="_blank">Ireland</a></Link>, <Link href="https://www.lieferando.at/deals/schmeckt-wie-sommer-agb//"><a target="_blank">Austria</a></Link>, <Link href="https://www.just-eat.ch/deals/schmeckt-wie-sommer-agb/"><a target="_blank">Switzerland</a></Link>, <Link href="https://www.takeaway.com/be/deals/proef-de-zomer-algemene-voorwaarden/"><a target="_blank">Belgium</a></Link>, <Link href="https://www.lieferando.de/deals/schmeckt-wie-sommer-agb/"><a target="_blank">Germany</a></Link>, <Link href="https://www.just-eat.fr/deals/saveurs-de-lete-conditions-generales/"><a target="_blank">France</a></Link>, <Link href="https://www.thuisbezorgd.nl/deals/proef-de-zomer-algemene-voorwaarden/"><a target="_blank">Netherlands</a></Link> and <Link href="https://www.pyszne.pl/deals/smak-lata-regulamin/"><a target="_blank">Poland</a></Link>.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}