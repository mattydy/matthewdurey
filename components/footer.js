import styles from '../styles/utils.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

    return (
        <footer className='footer'>
            <Link href="https://www.linkedin.com/in/matthew-durey-2511a6142/"><a target="_blank">LinkedIn</a></Link><span>|</span><Link href="/privacy-policy"><a target="_blank">Privacy Policy</a></Link><span>|</span><Link href="/cookie-policy"><a target="_blank">Cookie Policy</a></Link>
        </footer>
    )
}
