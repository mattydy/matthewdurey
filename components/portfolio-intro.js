import styles from '../styles/utils.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import MenuToggle from './menuToggle';
import { useEffect } from 'react';

export default function Footer({data }) {

    function styleTitle() {
        useEffect(() => {
            const heading = document.getElementById('heading');
            const headingTxt = heading.innerText;
            const headingWords = headingTxt.split(/[ \t]+/); //regex matches any number of spaces
            heading.innerHTML = headingWords.map(word => {
                const firstLetter = word.substring(0,1);
                const restOfWord = word.substring(1,word.length);
                return `<span style="color: ${data.color}">${firstLetter}</span>${restOfWord}`
            }).join(' ');
        })
    }
    styleTitle();
    return (
        <div>
            <style jsx>{`
                h2 span, h3 span {
                    color: ${data.color};
                }
                
                a {
                color: ${data.color};
                }`}
            </style>
            <h1 id="heading">{data.title}</h1>
            <MenuToggle></MenuToggle>
            <h2>{data.subHeading}<span>.</span></h2>
            <div className={styles.portfolioIntro}>
            <div className={styles.details}>
            <Image
                src={data.image}
                height={459}
                width={806}
                alt=""
            />
            <p><strong>Services:</strong> {data.services}</p>
            <p><strong>URL:</strong> <Link href={data.url}><a target="_blank">{data.url}</a></Link></p>
            </div>
            <div className={styles.intro}>
            <h3>Introduction<span>:</span></h3>
            <p>{data.intro}</p>
            <div className={styles.stats}>
            <p><strong>Services:</strong> {data.services}</p>
            <p><strong>URL:</strong> <Link href={data.url}><a target="_blank">{data.url}</a></Link></p>
            </div>
            </div>
        </div>
        </div>
    )
}
