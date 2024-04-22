import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Privacy = () => {
    return (
        <>
            <Header />
            <div className='privacy'>
                <h2>Privacy Policy</h2>
                <p>Your privacy is critically important to us. At 10up, we have a few fundamental principles:</p>
                <div className="privacy-list">
                    <ul>
                        <li>We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you through the operation of our services.</li>
                        <li>We store personal information for only as long as we have a reason to keep it.</li>
                        <li>We aim to make it as simple as possible for you to control what information on your website is shared publicly (or kept private), indexed by search engines, and permanently deleted.</li>
                        <li>We help protect you from overreaching government demands for your personal information.</li>
                        <li>We aim for full transparency on how we gather, use, and share your personal information.</li>
                    </ul>
                </div>
                <h2>Who We Are and What This Policy Covers</h2>
                <p>Howdy! We are a team of folks around the world who make the web better by finely crafting websites & tools for content creators. We believe in powering the open Internet with code that is open source and are proud to say that the vast majority of our work is available under the GPL. Unlike most other services, because our GPL code is public, you can actually download and take a look at that code to see how it works. This Privacy Policy applies to information that we collect about you when you use:</p>
                <div className="privacy-list">
                    <ul>
                        <li>Our websites (including 10up.com);</li>
                        <li>Our other products and services that are available on or through our websites;</li>
                        <li> andOther users’ websites that use our Services, while you are logged in to your account with us.</li>
                    </ul>
                </div>
                <h2>Information We Collect</h2>
                <p>We only collect information about you if we have a reason to do so–for example, to provide our Services, to communicate with you, or to make our Services better. We collect information in three ways: if and when you provide information to us, automatically through operating our Services, and from outside sources. Let’s go over the information that we collect.</p>
                <h3>Information You Provide to Us</h3>
                <div className="privacy-list">
                    <ul>
                        <li>Basic Account Information: We ask for basic information from you in order to set up your account or process your request to us.</li>
                        <li>Communications With Us (Hi There!): You may also provide us information when you respond to surveys, apply to open jobs, comment on plugins or blog posts, and submit the inquiry form.</li>
                        <li>Log / Analytics Information: Like most online service providers, we collect information that web browsers, mobile devices, and servers typically make available, such as the browser type, IP address, unique device identifiers, language preference, referring site, the date and time of access, operating system, and mobile network information.</li>
                        <li>Location Information: We may determine the approximate location of your device from your IP address. We collect and use this information to, for example, calculate how many people visit our site from certain geographic regions.</li>
                        <li>Information from Cookies & Other Technologies: A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Pixel tags (also called web beacons) are small blocks of code placed on websites and emails. 10up uses cookies and other technologies like pixel tags to help us identify and track visitors as well as track and understand email campaign effectiveness and to deliver targeted ads.</li>
                    </ul>
                </div>
                <h2>Other Things You Should Know</h2>
                <h3>Transferring Information</h3>
                <p>Because 10up’s Services are offered worldwide, the information about you that we process when you use the Services in the EU may be used, stored, and/or accessed by individuals operating outside the European Economic Area (EEA) who work for us, other members of our group of companies, or third party data processors. This is required for the purposes listed in the How and Why We Use Information section above. When providing information about you to entities outside the EEA, we will take appropriate measures to ensure that the recipient protects your personal information adequately in accordance with this Privacy Policy as required by applicable law.</p>
                <h3>Privacy Policy Changes</h3>
                <p>Although most changes are likely to be minor, 10up may change its Privacy Policy from time to time. 10up encourages visitors to frequently check this page for any changes to its Privacy Policy. If we make changes, we will notify you by revising the changelog below, and, in some cases, we may provide additional notice (such as adding a statement to our homepage, or sending you a notification through email. Your further use of the Services after a change to our Privacy Policy will be subject to the updated policy. That’s it! Thanks for reading.Updated December 2018</p>
            </div>
            <Footer />
        </>
    );
}

export default Privacy;
