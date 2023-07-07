import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/utils.module.scss';
import fsPromises from 'fs/promises';
import path from 'path'
import { useEffect, useState } from 'react';
import sortBy from 'sort-by';
import MenuToggle from '../../components/menuToggle';

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

  const [selectedSortByState, setSelectedSortByState] = useState('-id');
  posts.sort(sortBy(selectedSortByState));

  return (
    <div className='container'>
        <h1><span>P</span>ortfolio</h1>
        <MenuToggle></MenuToggle>

        <h2>See my collection of works<span>.</span></h2>

        <select id="sortBySelect" name="sortBySelect" defaultValue='-id' onChange={(e) => {setSelectedSortByState(e.target.value)}}>
          <option value="-id">Latest First</option>
          <option value="id">Oldest First</option>
          <option value="title">Title Asc</option>
          <option value="-title">Title Des</option>
        </select>

        <div className={styles.portfolio}>

          {

          posts.map((posts) => (

            <div>
              <style jsx>{`
              a:hover p {
                color: ${posts.color} !important;
              }
              `}</style>

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
                <p>{posts.title}</p>
                <span className={styles.link}>See More</span>
              </div>
              </a>
            </Link>
            </div>

          ))}
        </div>

        <p>Like what you see? Get in touch and work out how I can help you!</p>
        <div className={styles.portfolioButtons}>
          <Link href="/about">
            <a className='white-button'>About</a>
          </Link>
          <Link href="/services">
            <a className='white-button'>Services</a>
          </Link>
          <Link href="/contact">
            <a className='white-button'>Contact</a>
          </Link>
        </div>
    </div>
  );
}