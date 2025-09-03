import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/utils.module.scss';
import MenuToggle from '../../components/menuToggle';
import Footer from '../../components/footer';

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
        <h2>Professional<span>,</span> personalised <span>&</span> easy to use websites<span>.</span></h2>

          <div className={styles.innerPage}>
            <div className={styles.innerPage__text}>
              <p>I offer a wide range of services, all operating together to give you the best online presence possible. All websites are mobile responsive and are compatible with all major web browsers, as well as iOS and Android Devices. All sites are built with the user in mind, meaning simple and quick ways to update your website, without the need to reach out to a developer. All sites also use SEO best practices, allowing for higher ranking on Google.</p>
            </div>
            <div className={styles.innerPage__fullText}>
              <div className={styles.innerPage__half}>
                <h3>WordPress<span>:</span></h3>
                <p>Are you looking for an in-depth bespoke site to promote your business, or perhaps you want to create a blog of some kind? If so WordPress is the solution for you.<br></br><br></br>Using custom fields and the Gutenburg Editor, you can create and manage content for your site really easily. All Wordpress websites also come with a customised 'How To' document to show you the best way of working and how to get the most out of your website.</p>
                <h3>Static Build Sites<span>:</span></h3>
                <p>Are you a small business looking for an online presence but not wanting a full blown website? Then static websites are perfect for you.<br></br><br></br>These sites are typically quick, cheap and easy to build. The content rarely changes and they can be perfect to give customers some simple info that they might require before visiting the business in person.</p>
                <h3>Web Consultancy<span>:</span></h3>
                <p>Need expert guidance on how to improve your website's performance, SEO, or user experience? I offer web consultancy services to help you make informed decisions about your online presence. I can assist with:
                <ul>
                  <li>Website Audits & Optimization - Identify issues and enhance performance.</li>
                  <li>SEO Strategy - Improve search rankings and increase visibility.</li>
                  <li>Technical Recommendations – Choose the right platforms and tools for your business.</li>
                  <li>User Experience (UX) Consulting – Ensure your site is easy to navigate and conversion-friendly.</li>
                </ul>
                </p>
              </div>
              <div className={styles.innerPage__half}>
                <h3>Shopify<span>:</span></h3>
                <p>Are you looking to create an online shop, whether that is for your business or side hobby? I can provide Shopify sites suited to your needs.<br></br><br></br>Shopify is an eCommerce platform allowing you to sell items online to customers all over the world.</p>
                <h3>Website Design<span>:</span></h3>
                <p>Not sure what you want your website to look like? I also offer design services. We can scour the market and once we have a list of websites/functionalities I can create high fidelity designs based on these ideas. Together we can edit these before moving on to the build stage.</p>
                <h3>Other services<span>:</span></h3>
                <p>Looking for something in particular but don't see it here? Reach out via the <Link href="/contact"><a>Contact</a></Link> page and if it's something I'm unable to provide myself, I'll use my vast network to put you in touch with people who can help.</p>
              </div>
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
          </div>
      </section>

      <div className="footer__right">
          <Footer></Footer>
        </div>
    </div>
  );
}