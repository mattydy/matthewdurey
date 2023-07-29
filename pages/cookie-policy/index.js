import Head from 'next/head';
import Footer from '../../components/footer';
import styles from '../../styles/utils.module.scss';
import Link from 'next/link';
import MenuToggle from '../../components/menuToggle';



export default function Home() {
    return (
        <div className='container'>
            <h1><span>C</span>ookie <span>P</span>olicy</h1>
            <MenuToggle></MenuToggle>
            <h2>This is the Cookie Policy<span>.</span></h2>
            <div className={styles.innerPage}>
                <div className={styles.innerPage__fulltext}>

                <h3 className="small">What Are Cookies<span>:</span></h3>
                <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’ certain elements of the sites functionality.</p>
                <p>For more general information on cookies, please read “What Are Cookies”.</p>
                
                <h3 className="small">How We Use Cookies<span>:</span></h3>
                <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

                <h3 className="small">Disabling Cookies<span>:</span></h3>
                <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>

                <h3 className="small">The Cookies We Set<span>:</span></h3>
                <p>Forms related cookies. When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
                
                <h3 className="small">Third Party Cookies<span>:</span></h3>
                <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
                <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                
                <h3 className="small">More Information<span>:</span></h3>
                <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
    </div>
    </div>
    </div>
    )
}