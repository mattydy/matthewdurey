import styles from '../styles/utils.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import MenuToggle from './menuToggle';
import { useEffect, useState } from 'react';
import { isAbsoluteUrl } from 'next/dist/shared/lib/utils';

export default function Footer({ data }) {

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

    let [isURL, setIsURL] = useState(functionURLSet());

    function functionURLSet() {
        if (data.url == 'This website is no longer online') {
            return false;
        } else {
            return true;
        }
    }

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
            <p><strong>URL:</strong> {isURL ? <Link href={data.url}><a target="_blank">{data.url}</a></Link> : data.url}</p>
            </div>
            </div>
        </div>
        </div>
    )
}
