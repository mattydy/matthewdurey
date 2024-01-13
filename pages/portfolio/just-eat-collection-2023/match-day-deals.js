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
  const posts = props.portfolio[14].subProjects[5];
  const color = posts.color;
  const nextProject = props.portfolio[14].subProjects[6];
  
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
                  src='/images/jet-collection/treatmas/menu.jpeg'
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
                  src='/images/jet-collection/treatmas/code.jpeg'
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
                  src='/images/jet-collection/mdd/menu.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Language menu when opened"
                />
                <span className={styles.caption}>Language menu when opened</span>
                </SwiperSlide>
                </Swiper>
        </div>
          <div className={styles.content}>
            <h4>Language selection<span>:</span></h4>
            <p>The Match Day Deals campaign ran across 7 markets of which many have more than one language, therefore we need to give the consumers the option to change their language.<br></br><br></br>I did this by creating a menu.html file with all the available options. Then using some JavaScript, we get the language and show the available options on the page.<br></br><br></br>You can see the all the languages here: <Link href="https://www.lieferando.at/deals/spieltag-deals/"><a target="_blank">Austria</a></Link>, <Link href="https://www.takeaway.com/bg/deals/otstupki-v-denia-na-macha/"><a target="_blank">Belgium</a></Link>, <Link href="https://www.lieferando.de/deals/deals-zum-spiel-deals/"><a target="_blank">Germany</a></Link>, <Link href="https://www.just-eat.es/deals/ofertas-de-campeonato/"><a target="_blank">Spain</a></Link>, <Link href="https://www.just-eat.fr/deals/les-promos-jours-de-match/"><a target="_blank">France</a></Link>, <Link href="https://www.thuisbezorgd.nl/deals/wedstrijd-deals/"><a target="_blank">Netherlands</a></Link> and <Link href="https://www.pyszne.pl/deals/pilkarskie-okazje/"><a target="_blank">Poland</a></Link>.</p>
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
                  src='/images/jet-collection/mdd/content.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Content.js file"
                />
                <span className={styles.caption}>Content.js file</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/mdd/austria-page.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Landing page showing Austrian content"
                />
                <span className={styles.caption}>Landing page showing Austrian content</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/mdd/germany-page.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Landing page showing German content"
                />
                <span className={styles.caption}>Landing page showing German content</span>
                </SwiperSlide>
                </Swiper>
        </div>
          <div className={styles.content}>
            <h4>One file for multiple languages<span>:</span></h4>
            <p>As this landing page is being used on variable markets I have used a js file to contain the relevant data and then pull it through whenever it is needed.</p>
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
                  src='/images/jet-collection/mdd/setting-variable.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="setting the variable"
                />
                <span className={styles.caption}>Setting the variable</span>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                  src='/images/jet-collection/mdd/entering.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="The Entering.vue component"
                />
                <span className={styles.caption}>The Entering.vue component</span>
                </SwiperSlide>
                </Swiper>
            </div>
          <div className={styles.content}>
            <h4>Additional step for Poland<span>:</span></h4>
            <p>One of the differences between the Polish campaign and the other campaigns was that Poland were giving away two prizes instead of one. The addition of the second prize meant that there was an extra step in the 'How to enter' section.<br></br><br></br>Within the Entering.vue component I set a variable to true, if the country code is equal to 'pl_en' or 'pl_pl' (as there are two languages). Then I set up two settings for the slider, one to display all four steps and the other to display the three.<br></br><br></br>Then above I have an if statement, and if the 'poland' variable is true I show the Polish settings, otherwise I show the normal settings.</p>
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
                  src='/images/jet-collection/mdd/poland-win.jpeg'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="The Win.vue component"
                />
                <span className={styles.caption}>The Win.vue component</span>
                </SwiperSlide>
                </Swiper>
            </div>
          <div className={styles.content}>
          <h4>Additional prize for Poland<span>:</span></h4>
            <p>The addition of the second prize also meant that there was another in the 'Prizes' section.<br></br><br></br>Within the Win.vue component I have replicated the variables from the Entering.vue component. Then above I loop through the list of prizes from the Content.js file. I also add a class if the variable is true, which makes the width of the prize boxes thinner, so I can fit two side by side.</p>
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
                  src='/images/jet-collection/mdd/t&c.png'
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
            <p>As well as the Informative Landing Page this project contains a Terms & Conditions page.<br></br><br></br>The Terms & Conditions page is built using static HTML and uses the same menu.html file that the Informative Landing Pages use.<br></br><br></br>You can see the Terms & Conditions pages here: <Link href="https://www.lieferando.at/deals/spieltag-deals-agb"><a target="_blank">Austria</a></Link>, <Link href="https://www.takeaway.com/bg/deals/otstupki-v-denia-na-macha-vaucheri-usloviq/"><a target="_blank">Bulgaria</a></Link>, <Link href="https://www.lieferando.de/deals/deals-zum-spiel-agb"><a target="_blank">Germany</a></Link>, <Link href="https://www.just-eat.es/deals/ofertas-de-campeonato-terminos-y-condiciones/"><a target="_blank">Spain</a></Link>, <Link href="https://www.just-eat.fr/deals/les-promos-jours-de-match-conditions-generales/"><a target="_blank">France</a></Link>, <Link href="https://www.thuisbezorgd.nl/deals/wedstrijd-deals-algemene-voorwaarden/"><a target="_blank">Netherlands</a></Link> and <Link href="https://www.pyszne.pl/deals/pilkarskie-okazje-regulamin/"><a target="_blank">Poland</a></Link>.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}