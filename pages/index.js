import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import path from 'path';
import fsPromises from 'fs/promises';
import styles from '../styles/utils.module.scss';
import sortBy from 'sort-by';
import Footer from '../components/footer';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default function Home(props) {
  const posts = props.portfolio;
  posts.sort(sortBy('-id'))

  return (
    <div>
      <div className="container container-large">
      <div className='background-circles'>
        <span className='circle circle--blue circle--large blue-top'></span>
        <span className='circle circle--blue circle--large blue-bottom'></span>

        { posts.map((posts, i, row) => {
          let $class;
          let $effect;
          if (i < 5) {
            if (i == 0) {
              $class = 'circle--one';
              $effect = 'sonarEffectOne'; 
            } else if(i == 1) {
              $class = 'circle--two';
              $effect = 'sonarEffectTwo';
            } else if(i == 2) {
              $class = 'circle--three';
              $effect = 'sonarEffectThree'; 
            } else if(i == 3) {
              $class = 'circle--four';
              $effect = 'sonarEffectFour'; 
            } else if(i == 4) {
              $class = 'circle--five';
              $effect = 'sonarEffectFive'; 
            }

            return (
              <span key={posts.id}>

              <style jsx>{`
              .circle {
                background: ${posts.color} !important;
              }

              .circle::after {
                box-shadow: 0 0 0 2px ${posts.color};
              }

              @keyframes ${$effect} {
                0% {
                    opacity: 1;
                }
                40% {
                    opacity: 1;
                    box-shadow: 0 0 0 2px ${posts.color}, 0 0 10px 10px ${posts.color}, 0 0 0 10px ${posts.color};
                }
                100% {
                    box-shadow: 0 0 0 2px ${posts.color}, 0 0 10px 10px ${posts.color}, 0 0 0 10px ${posts.color};
                    transform: scale(1.5);
                    opacity: 1;
                }
              }
              `}</style>

              <Link href={`/portfolio/${posts.slug}/`}>
                <a className={`circle ${$class}`}></a>
              </Link>
            </span>
            )
          }
          i++;
        })}

      </div>
      <section className={styles.homePage}>
          <div className={styles.homeContent}>
            <h1 className='large'><span>M</span>atthew <span>D</span>urey</h1>
            <h2 className='large'><span>W</span>eb <span>D</span>eveloper <span>&</span> <span>C</span>onsultant</h2>
            <p className='large'>I'm a web developer and consultant currently travelling around Australia, helping businesses create powerful online experiences. I specialise in custom-built WordPress websites with additional experience in Shopify, React, and SEO.</p>
            <div className={styles.buttons}>
              <Link href="/about">
                <a className='white-button'>About</a>
              </Link>
              <Link href="/portfolio">
                <a className='white-button'>Portfolio</a>
              </Link>
              <Link href="/services">
                <a className='white-button'>Services</a>
              </Link>
              <Link href="/contact">
                <a className='white-button'>Contact</a>
              </Link>
            </div>
          </div>
      </section>
      <div className="footer__center">
      <Footer></Footer>
      </div>
      </div>
    </div>
  );
}