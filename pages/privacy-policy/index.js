import Head from 'next/head';
import Footer from '../../components/footer';
import styles from '../../styles/utils.module.scss';
import Link from 'next/link';
import MenuToggle from '../../components/menuToggle';



export default function Home() {
    return (
        <div className='container'>
            <h1><span>P</span>rivacy <span>P</span>olicy</h1>
      <MenuToggle></MenuToggle>

            <h2>This is the Privacy Policy<span>.</span></h2>
            <div className={styles.innerPage}>
                <div className={styles.innerPage__text}>
                    <p>It is my policy to respect your privacy regarding any information I may collect while operating my website. This Privacy Policy applies to <Link href="https://www.matthewdurey.com"><a>https://www.matthewdurey.com</a></Link> (hereinafter, “I”, “my”, or “https://www.matthewdurey.com”). I respect your privacy and am committed to protecting personally identifiable information you may provide me through the Website. I have adopted this privacy policy (“Privacy Policy”)to explain what information may be collected on my Website, how I use this information, and under what circumstances I may disclose the information to third parties. This Privacy Policy applies only to information I collect through the Website and does not apply to my collection of information from other sources.</p>
                    <p>This Privacy Policy, together with the Terms and conditions posted on my Website, set forth the general rules and policies governing your use of my Website. Depending on your activities when visiting my Website, you may be required to agree to additional terms and conditions.</p>
                </div>
                <div className={styles.innerPage__fulltext}>

                <h3 className="small">Website Visitors<span>:</span></h3>
                <p>Like most website operators, I collect non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. My purpose in collecting non-personally identifying information is to better understand how my visitors use my website. From time to time, I may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of my website.</p>
                
                <h3 className="small">Gathering of Personally-Identifying Information<span>:</span></h3>
                <p>Certain visitors to my website choose to interact in ways that require me to gather personally-identifying information. The amount and type of information that I gather depends on the nature of the interaction. For example, we ask visitors who fill out the contact form at https://www.matthewdurey.com/contact to provide their name and email address.</p>

                <h3 className="small">Security<span>:</span></h3>
                <p>The security of your Personal Information is important to me, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While I strive to use commercially acceptable means to protect your Personal Information, I cannot guarantee its absolute security.</p>
                <h3 className="small">Links To External Sites<span>:</span></h3>
                <p>My Service may contain links to external sites that are not operated by me. If you click on a third party link, you will be directed to that third party’s site. I strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>
                <p>I have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
                <h3 className="small">Cookies<span>:</span></h3>
                <p>To enrich and perfect your online experience, I use “Cookies”, similar technologies and services provided by others to display personalised content, appropriate advertising and store your preferences on your computer.</p>
                <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. I use cookies to help me identify and track visitors, their usage of https://www.matthewdurey.com, and their website access preferences. Visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using my website, with the drawback that certain features of my website may not function properly without the aid of cookies.</p>
                <p>By continuing to navigate my website without changing your cookie settings, you hereby acknowledge and agree to my use of cookies.</p>
                <h3 className="small">E-commerce<span>:</span></h3>
                <p>Those who engage in transactions with me – by purchasing my services or products – are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, I collect such information only insofar as is necessary or appropriate to fulfil the purpose of the visitor’s interaction. I do not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.</p>
                <h3 className="small">Privacy Policy Changes<span>:</span></h3>
                <p>Although most changes are likely to be minor, I may change the Privacy Policy from time to time, and at my sole discretion. I encourage visitors to frequently check this page for any changes to the Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
                <h3 className="small">Credit <span>&</span> Contact Information<span>:</span></h3>
                <p>If you have any questions about this Privacy Policy, please contact me via <Link href="mailto:me@matthewdurey.com"><a>email</a></Link>.</p>
    </div>
    </div>
    </div>
    )
}