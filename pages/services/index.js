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

      <h1><span>S</span>ervices</h1>
      <MenuToggle></MenuToggle>
        <h2>Professional, personalised and easy to use websites</h2>

          <div className={styles.innerPage}>
            <div className={styles.innerPage__text}>
            <p>I offer a wide range of services, all operating together to give you the best online presence possible. All Websites are mobile responsive and are compatible with all major web browsers, as well as iOS and Android Devices. All sites are built with the user in mind, meaning simple and quick ways to update your website, without the need to reach out to a developer. All sites also use SEO best practices, allowing for higher rnaking on Google.</p>
            <h3>WordPress<span>:</span></h3>
            <p>I specialise in WordPress websites as it is my preferred content management system (CMS) of choice. Whether you are looking for a simple blog or a bespoke site to promote your business, I can develop a custom theme to help you get the most out of your website. Using custom fields and the Gutenburg Editor, you can create and manage content for your site really easily. <br></br><br></br>All Wordpress websites also come with a customised 'How To' document to show you the best way of working and how to get the most out of your website.</p>
            <br></br>
            <h3>Shopify & WooCommerce<span>:</span></h3>
            <p>If you are looking to create an online shop, wether that is for your business or side hobby, I can provide Shopify and WooCommerce sites suited to your needs.</p>
            <br></br>
            <h3>Website Design<span>:</span></h3>
            <p>Not sure what you want your website to look like? I also offer design services. We can scour the market and once we have a list of websites/functionality I can create High Fitelity designs based on these ideas. Together we can edit these before moving on to the build stage.</p>
            <h3>Other services<span>:</span></h3>
            <p>Looking for something inparticular but don't see it here? Reach out using the links below and if it's something I'm unable to provide myself, I'll use my vast network to put you in touch with people who can help.</p>
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