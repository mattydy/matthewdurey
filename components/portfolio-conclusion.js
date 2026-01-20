import styles from '../styles/utils.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer({data, nextProject }) {

    let nextProjectLink;

    if (nextProject !== undefined) {

        function styleNextLink() {
            useEffect(() => {
                const heading = document.getElementById('nextProject');
                const headingTxt = heading.innerText;
                const headingWords = headingTxt.split(/[ \t]+/); //regex matches any number of spaces
                heading.innerHTML = headingWords.map(word => {
                    const firstLetter = word.substring(0,1);
                    const restOfWord = word.substring(1,word.length);
                    return `<span style="color: ${nextProject.color}">${firstLetter}</span>${restOfWord}`
                }).join(' ');
            })
        }
        styleNextLink();
    }

    if (nextProject == undefined) {
        nextProjectLink = '';
    } else {
        nextProjectLink =
        <Link href={`/portfolio/${nextProject.slug}`}><a className={styles.next}>Next Project - <span id="nextProject">{nextProject.title}</span></a></Link>
    }

    return (
        <div>
            <style jsx>{`
                h3 span {
                    color: ${data.color};
                }
                
                .footer-get-in-touch a, .links {
                    color: ${data.color};
                }`}
            </style>
            <div className={styles.conclusion}>
                <h3>Conclusion<span>:</span></h3>
                <p>{data.conclusion}</p>
            </div>

            <p className='footer-get-in-touch'>{data.getInTouch} <Link href="/contact"><a>Get in touch</a></Link> and we can discuss.</p>
            <div className={styles.links}>
                <Link href='/portfolio'><a className={styles.back}>Back to <span>P</span>orfolio</a></Link>
                {nextProjectLink}
            </div>
      </div>
    )
}