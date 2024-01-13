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
  const posts = props.portfolio[14].subProjects[4];
  const color = posts.color;
  const nextProject = props.portfolio[14].subProjects[5];
  
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
                <span className={styles.caption}>menu.htlm file</span>
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
                  src='/images/jet-collection/treatmas/language.png'
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
            <p>The Treatmas campaign ran across all markets of which many have more than one language, for example the Swiss market has 3 available languages, German, French and English. Therefore we need to give the consumers the option to change their language.<br></br><br></br>I did this by creating a menu.html file with all the available options. Then using some JavaScript, we get the language and show the available options on the page.<br></br><br></br>You can see the other languages here: <Link href="https://www.just-eat.ie/deals/treatmas"><a target="_blank">Ireland</a></Link>, <Link href="https://www.lieferando.at/deals/wow-nachten/"><a target="_blank">Austria</a></Link>, <Link href="https://www.just-eat.ch/deals/wow-nachten/"><a target="_blank">Switzerland</a></Link>, <Link href="https://www.takeaway.com/be/deals/decembre-surprises/"><a target="_blank">Belgium</a></Link>, <Link href="https://www.takeaway.com/bg/deals/koledni-iznenadi/"><a target="_blank">Bulgaria</a></Link>, <Link href="https://www.lieferando.de/deals/wow-nachten/"><a target="_blank">Germany</a></Link>, <Link href="https://www.just-eat.dk/deals/juleoverraskelser/"><a target="_blank">Denmark</a></Link>, <Link href="https://www.just-eat.es/deals/navimas/"><a target="_blank">Spain</a></Link>, <Link href="https://www.just-eat.fr/deals/noel-extraordinaire/"><a target="_blank">France</a></Link>, <Link href="https://www.justeat.it/deals/le-sorprese-di-natale/"><a target="_blank">Italy</a></Link>, <Link href="https://www.thuisbezorgd.nl/deals/december-cadeautjes/"><a target="_blank">Netherlands</a></Link> and <Link href="https://www.pyszne.pl/deals/pyszne-prezenty/"><a target="_blank">Poland</a></Link>.</p>
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
                  src='/images/jet-collection/treatmas/background.png'
                  // height={400}
                  // width={212}
                  height={419}
                  width={735}
                  alt="Tear background on page"
                />
                <span className={styles.caption}>Tear background on page</span>
                </SwiperSlide>
                </Swiper>
            </div>
          <div className={styles.content}>
            <h4>Different backgrounds<span>:</span></h4>
            <p>One of the harder parts to design on this landing page was the tear across the middle of the page. I needed to split the sections up and provide a different background for the middle section.<br></br><br></br>As the background needed to have the right amount of spacing I needed to apply a set height depending on the width of the page (50vw) and a minimum height (700px). This mean it could be viewed on large and small screens and would always stay in place.</p>
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
                  src='/images/jet-collection/treatmas/tandcs.png'
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
            <p>As mentioned previously, this project was split into two parts, the Informative Landing Page and the Terms & Conditions page.<br></br><br></br>The Terms & Conditions page is also built using static HTML and uses the same menu.html file that the Informative Landing Pages use.<br></br><br></br>You can see the Terms & Conditions pages here: <Link href="https://www.just-eat.co.uk/deals/treatmas-terms-and-conditions/"><a target="_blank">UK</a></Link>, <Link href="https://www.just-eat.ie/deals/treatmas-terms-and-conditions/"><a target="_blank">Ireland</a></Link>, <Link href="https://www.lieferando.at/deals/wow-nachten-agb/"><a target="_blank">Austria</a></Link>, <Link href="https://www.just-eat.ch/deals/wow-nachten-agb/"><a target="_blank">Switzerland</a></Link>, <Link href="https://www.takeaway.com/be/deals/decembre-surprises-algemene-voorwaarden/"><a target="_blank">Belgium</a></Link>, <Link href="https://www.takeaway.com/bg/deals/koledni-iznenadi-obshti-usloviya/"><a target="_blank">Bulgaria</a></Link>, <Link href="https://www.lieferando.de/deals/wow-nachten-agb/"><a target="_blank">Germany</a></Link>, <Link href="https://www.just-eat.dk/deals/juleoverraskelser-vilkar-og-betingelser/"><a target="_blank">Denmark</a></Link>, <Link href="https://www.just-eat.es/deals/navimas-terminos-y-condiciones/"><a target="_blank">Spain</a></Link>, <Link href="https://www.just-eat.fr/deals/noel-extraordinaire-conditions-generales/"><a target="_blank">France</a></Link>, <Link href="https://www.justeat.it/deals/le-sorprese-di-natale-termini-e-condizioni/"><a target="_blank">Italy</a></Link>, <Link href="https://www.thuisbezorgd.nl/deals/december-cadeautjes-algemene-voorwaarden/"><a target="_blank">Netherlands</a></Link> and <Link href="https://www.pyszne.pl/deals/pyszne-prezenty-regulamin/"><a target="_blank">Poland</a></Link>.</p>
          </div>
        </div>

      </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}