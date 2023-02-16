import styles from '../styles/utils.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({data }) {
    return (
        <div>
            <style jsx>{`
                h1::after, h3::after {
                content: '';
                background: ${data.color};
                }
                
                a {
                color: ${data.color};
                }`}
            </style>
            <h1>{data.title}</h1>
            <h2>{data.subHeading}</h2>
            <div className={styles.portfolioIntro}>
            <div className={styles.details}>
            <Image
                src={data.image}
                height={459}
                width={806}
                alt=""
            />
            <p><strong>Services:</strong> {data.services}</p>
            {if(data.id == 4) {
            return (
                <p><strong>This site is no longer active</strong></p>
                )
                } else {
                return (
                <p><strong>URL:</strong> <Link href={data.url}><a target="_blank">{data.url}</a></Link></p>
            )}}
            </div>
            <div className={styles.intro}>
            <h3>Introduction:</h3>
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
