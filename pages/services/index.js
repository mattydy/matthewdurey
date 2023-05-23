import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/utils.module.scss';
import MenuToggle from '../../components/menuToggle';

export default function Home() {

  return (
    <div>
      <style jsx>{`
      h3::after {
        content: '';
        background: #8ed8f8;
        width: 100%;
      }`}</style>
      <section className="container">

      <h1>Services</h1>
      <MenuToggle></MenuToggle>
            <h2>Personalised, Professional, Easy to use websites</h2>

          <div className={styles.innerPage}>
            <div className={styles.innerPage__text}>
            <p>I offer a wide range of services, all operating together to give you the best online presence possible.</p>
            <h3>WordPress</h3>
            <p>I specialise in WordPress websites as it is my preferred content management system (CMS) of choice. Whether you are looking for a simple blog or a bespoke site to promote your business, I can develop a custom theme to help you get the most out of your website. Using custom fields and the Gutenburg Editor, you can create and manage content for your site really easily!</p>
            <br></br>
            <h3>Shopify & WooCommerce</h3>
            <p>If you are looking to create an online shop, I can use WordPress in conjunction with the WooCommerce extension, or Shopify, to create a fully functioning online shop, including the maintenance of products lists as well as order and payment processing.</p>
            <br></br>
            <h3>Website Design</h3>
            <p>Not sure what you want your site to look like? I also offer design services, working together to get an idea of what you want the site to look like and incorporating my UX skills to make sure you are giving your users teh best experience possible.</p>
            <h3>SEO, Mobie Responsive, Cross Broswer</h3>
            <p>All Websites are mobile responsive and are compatible with all major web browsers, as well as iOS and Android Devices. All sites are built using SEO best practices, aiming to give you teh best lightscore speed possible.</p>
            <div className={styles.innerPage__buttons}>
              <Link href="/about">
                <a className='white-button'>About</a>
              </Link>
              <Link href="/portfolio">
                <a className='white-button'>Portfolio</a>
              </Link>
              <Link href="/contact">
                <a className='white-button'>Contact</a>
              </Link>
            </div>
            </div>

            <div className={`${styles.innerPage__image} ${styles.innerPage__image__multi}`}>
            <Image
              priority
              src="/images/services/wordpress-logo.png"
              height={135}
              width={250}
              alt=""
            />
                        <Image
              priority
              src="/images/services/shopify_logo_white.png"
              height={71.5}
              width={250}
              alt=""
            />
                        <Image
              priority
              src="/images/services/woocommerce-logo-color-white@2x.png"
              height={60}
              width={260}
              alt=""
            />
          </div>
          </div>
      </section>
    </div>
  );
}