import styles from '../styles/utils.module.scss';
import Link from 'next/link';

export default function Footer({data, nextProject }) {

    let nextProjectLink;

    if (nextProject == undefined) {
        nextProjectLink = '';
    } else {
        nextProjectLink =
        <Link href={`/portfolio/${nextProject.slug}`}><a className={styles.next}>Next Project - {nextProject.title}</a></Link>
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
                <Link href='/portfolio'><a className={styles.back}>Back to Porfolio</a></Link>
                {nextProjectLink}
            </div>
      </div>
    )
}