import fsPromises from 'fs/promises';
import path from 'path'
import Image from 'next/image';
import styles from '../../../styles/utils.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Link from 'next/link';
import PortfolioConclusion from '../../../components/portfolio-conclusion'
import MenuToggle from '../../../components/menuToggle';
import { useEffect } from 'react';

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
  const posts = props.portfolio[14];
  const color = posts.color;
  const nextProject = props.portfolio[13];

  function styleTitle() {
    useEffect(() => {
        const heading = document.getElementById('heading');
        const headingTxt = heading.innerText;
        const headingWords = headingTxt.split(/[ \t]+/); //regex matches any number of spaces
        heading.innerHTML = headingWords.map(word => {
            const firstLetter = word.substring(0,1);
            const restOfWord = word.substring(1,word.length);
            return `<span style="color: ${color}">${firstLetter}</span>${restOfWord}`
        }).join(' ');
        })
    }
    styleTitle();

  
  return (
    
    <div>
      <style jsx>{`
      h1::after, h3::after, h4:after {
        content: '';
        background: ${color};
      }
      
      a, h3 span, h4 span, h2 span {
        color: ${color};
      }
      
      a:hover p {
        color: var(--hover-color);
      }`}</style>

    <div className='container'>

      <div>
        <h1 id="heading">{posts.title}</h1>
        <MenuToggle></MenuToggle>
        <h2>{posts.subHeading}<span>.</span></h2>
        <div className={styles.portfolioIntro}>
        <div className={styles.details}>
        <Image
            src={posts.image}
            height={459}
            width={806}
            alt=""
        />
            </div>
            <div className={styles.intro}>
                <h3>Introduction<span>:</span></h3>
                <p>This is a collection of work completed during my employement at Just Eat Takeaway.com during 2023. The work includes Landing Pages for Campaigns and Internal Applications. Projects have been built using a mixture of React (Vue JS) and static HTML.<br></br><br></br>Click on each project to view more details.</p>
            </div>
        </div>
        </div>

        <div className={styles.portfolio}>
        { posts.subProjects.map((posts) => (


            <div key={posts.id}> 
            <Link href={{
                pathname: `/portfolio/${posts.slug}`,
                }}>
                <a className={styles.portfolio__link} data-service={posts.services}>
                <Image
                src={posts.image}
                height={460}
                width={806}
                alt=""
                />
                <div className={styles.details}>
                <span className={styles.services}>{posts.services}</span>
                <p style={{'--hover-color': posts.color}}>{posts.title}</p>
                <span className={styles.link}>See More</span>
                </div>
                </a>
            </Link>
            </div>

))}
        </div>

      <PortfolioConclusion data={posts} nextProject={nextProject}></PortfolioConclusion>
    </div>
    </div>
  );
}