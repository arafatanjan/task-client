import React, { useState } from 'react';
import './MerchantCorner.css'
import adLogo from '../assets/ad-logo.png';

const MerchantCorner = () => {

    function Accordion({ title, children }) {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleAccordion = () => {
          setIsOpen(!isOpen);
        };
      
        return (
          <div className="accordion-item">
            <div className="accordion-title" onClick={toggleAccordion}>
              <span>{title}</span>
              <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
          </div>
        );
      }

    return (
        
      <div className="container-MerchantCorner">
      <div className="background-image">
        <div className="header-MerchantCorner">
          <img src="adLogo" alt="AjkerDeal Logo" className="logo" />
          <div className="contact-number">+88-01850000999</div>
        </div>
        <div className="registration-form">
          <div className='login-title-wrap-merchant'>
          রেজিস্ট্রেশন
          </div>
          <form>
            <input style={{ margin:'1rem 0'}} type="text" placeholder="আপনার ব্যবসার নাম লিখুন..." />
            <input style={{margin:'1rem 0'}} type="text" placeholder="আপনার মোবাইল নাম্বার লিখুন" />
            <input style={{margin:'1rem 0'}} type="text" placeholder="আপনার ফেসবুক পাতা/ওয়েবসাইটের লিঙ্ক দিন..." />
            <button style={{padding:'1rem', margin:'1rem'}} type="submit">রেজিস্ট্রেশন করুন</button>
            <button style={{padding:'1rem', margin:'1rem'}} type="submit">লগইন করুন</button>
          </form>
          <div>
          <a href="#" className="login-link">লগইন করুন</a>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
        <div className="footer">       
            <img src="https://static.ajkerdeal.com/images/login_files/merchant-flow.svg" alt="Icon 1" />  
        </div>
        </div>
      </div>


      <div className="faq-container">
      <h1>আপনার জিজ্ঞাসা, আমাদের উত্তর</h1>
      <Accordion title="১. আজকেরডিল টউ করণ">
        <p>
          দেশের সবচেয়ে বড় অনলাইন শপিং মল এবং বাংলা ভাষায় দেশের পূর্ণ ই-কমার্স ওয়েবসাইট। এখানে সব ধরনের নির্ভরযোগ্য প্রয়োজনীয় প্রতিটি পণ্যসামগ্রী যেমন, গ্যাজেটস, ইলেকট্রনিক্স, গৃহস্থালী সামগ্রী, কসমেটিক পণ্য, পোশাক, বাচ্চাদের বিভিন্ন সামগ্রী, প্রবাসী সামগ্রী ও লাইফস্টাইল পণ্য থেকে শুরু করে সবধরনের অত্যন্ত মূল্যবান এবং জনপ্রিয় পণ্য পাওয়া যায়।
        </p>
        <p>
          বাংলাদেশের যেকোনো স্থান থেকে যেকোনো সময়ে ইন্টারনেট সংযোগের মাধ্যমে অনলাইনে ক্রেতারা পছন্দসই পণ্যের অর্ডার করতে এবং আজকেরডিল তার নির্দিষ্ট ব্যবস্থাপনায় সারা বাংলাদেশের ক্রেতাদের ডেলিভারি দিয়ে থাকে।
        </p>
      </Accordion>
      <Accordion title="২. আপনার ব্যবসার প্রসারের আজকেরডিল এর ভূমিকা" />
      <Accordion title="৩. আপনার পণ্যর প্রচার ও প্রসার" />
      <Accordion title="৪. কাস্টমার সাপোর্ট বিভাগ" />
      <Accordion title="৫. হোম ডেলিভারী" />
      <Accordion title="৬. পণ্যর ফটোগ্রাফি, ডিজাইন ও লিস্টিং" />
      <Accordion title="৭. অনলাইন পেমেন্ট গেটওয়ে" />
      <Accordion title="৮. মার্কেট ম্যানেজার প্রচারাভিযান" />
    </div>
    </div>
        
    );
};

export default MerchantCorner;