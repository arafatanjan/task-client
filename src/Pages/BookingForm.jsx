import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/home/Header";

const BookingForm = () => {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center bg-#f2f2f2 py-5" style={{ backgroundColor: '#f2f2f2' }}>
      
        <div
          style={{
            backgroundColor: "#EAF6FF",
            padding: "20px",
            textAlign: "center",
            minHeight: "446px",
            width: "80%",
            marginBottom: '200px'
          }}
        >
          <label
            htmlFor="bookingCode"
            style={{ fontSize: "18px", marginRight: "10px", marginBottom: '20px' }}
          >
            বুকিং কোড:
          </label>
          <input
            type="text"
            id="bookingCode"
            style={{
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              marginLeft: "10px",
              backgroundColor: "#F05A28",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <i className="fa fa-search"></i>
          </button>
          <div
            style={{
              backgroundColor: "white",
              display: 'flex', 
              textAlign: "center",
              minHeight: "100px",
              width: "96%%",
              paddingTop: "0px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                margin: "10px 2% 30px 2%",
                fontSize: "16px",
                color: "#888",
              }}
            >
              প্রোডাক্টের ডেলিভারি আপডেট পেতে আপনার বুকিং কোড নাম্বার দিয়ে
              অর্ডার ট্র্যাক করুন।
            </p>
          </div>
        </div>
      </div>

      

{/* <div className="show" style={{ marginTop: '8px' }}>
  <span style={{ color: 'black', fontSize: '18px' }}>ক্যাটাগরি</span>
  
  <span>
    <img
      src="https://static.ajkerdeal.com/images/icon/arrow.svg"
      alt="filter down arrow"
      style={{ transform: 'rotate(0deg)', height: '12px', paddingLeft: '5px' }}
    />
  </span> 
 
  <div className="all-category hideme" id="menu">
    <ul className="main-category d-lg-block d-md-block d-none" style={{ marginTop: '5px', paddingTop: '7px' }}>
      <li className="main-mega">
        <a target="_blank" href="https://ajkerdeal.com/category/winter-collection" rel="noopener noreferrer">
          উইন্টার কালেকশন <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <ul className="sub-category" style={{ backgroundColor: '#302b2b' }}>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/winter-collection-hoodie" rel="noopener noreferrer">
              হুডি <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <ul className="sub-sub-category">
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-hoodie-mens-hoodie" rel="noopener noreferrer">জেন্টস হুডি</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-hoodie-ladies-hoodie" rel="noopener noreferrer">লেডিজ হুডি</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-hoodie-half-sleeve" rel="noopener noreferrer">হাফ স্লিভ</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-hoodie-kids-hoodie" rel="noopener noreferrer">কিডস হুডি</a></li>
            </ul>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/winter-collection-jacket" rel="noopener noreferrer">
              জ্যাকেট <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <ul className="sub-sub-category">
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-jacket-mens" rel="noopener noreferrer">মেনজ</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-jacket-ladies" rel="noopener noreferrer">লেডিজ</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-jacket-leather-jacket" rel="noopener noreferrer">লেদার</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-jacket-pu-leather" rel="noopener noreferrer">PU লেদার</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-jacket-denim" rel="noopener noreferrer">ডেনিম</a></li>
            </ul>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/winter-collection-sweater" rel="noopener noreferrer">
              সোয়েটার <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <ul className="sub-sub-category">
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-sweater-full-sleeve" rel="noopener noreferrer">জেন্টস ফুল-স্লিভ</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-sweater-half-sleeve" rel="noopener noreferrer">জেন্টস হাফ-স্লিভ</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-sweater-ladies-sweater" rel="noopener noreferrer">লেডিজ সোয়েটার</a></li>
            </ul>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/winter-collection-ladies-winter-fashion" rel="noopener noreferrer">
              লেডিজ উইন্টার ফ্যাশন <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <ul className="sub-sub-category">
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-sweater-ladies-sweater" rel="noopener noreferrer">সোয়েটার ও কার্ডিগান</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-shawl-wrappers" rel="noopener noreferrer">শাল</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/womens-fashion-western-collection-cape" rel="noopener noreferrer">শ্রাগ</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-hoodie-ladies-hoodie" rel="noopener noreferrer">হুডি</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-jacket-ladies" rel="noopener noreferrer">জ্যাকেট</a></li>
            </ul>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/winter-collection-winter-gadgets" rel="noopener noreferrer">
              উইন্টার গ্যাজেটস <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <ul className="sub-sub-category">
              <li><a target="_blank" href="https://ajkerdeal.com/category/household-toilet-accessories-electric-hot-shower" rel="noopener noreferrer">হট শাওয়ার</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/kitchen-dining-kettle-water-heater" rel="noopener noreferrer">কেটলি/ ওয়াটার হিটার</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/winter-collection-winter-gadgets-flask" rel="noopener noreferrer">ফ্লাস্ক</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/household-home-appliances-room-heater" rel="noopener noreferrer">রুম হিটার</a></li>
            </ul>
          </li>
        </ul>
      </li>

      <li style={{ display: 'none' }}>
        <a target="_blank" href="https://ajkerdeal.com/category/eid-collection" rel="noopener noreferrer">
          ঈদ পসরা <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <ul className="sub-category" style={{ backgroundColor: '#302b2b' }}>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/eid-collection-exclusive-design" rel="noopener noreferrer">
              এক্সক্লুসিভ ডিজাইন <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <ul className="sub-sub-category">
              <li><a target="_blank" href="https://ajkerdeal.com/category/eid-collection-exclusive-design-panjabi" rel="noopener noreferrer">পাঞ্জাবী</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/eid-collection-exclusive-design-saree" rel="noopener noreferrer">শাড়ি</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/eid-collection-exclusive-design-salwar-kamiz" rel="noopener noreferrer">থ্রি-পিস</a></li>
            </ul>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/eid-collection-family-eid-fashion" rel="noopener noreferrer">
              ফ্যামিলি ঈদ ফ্যাশন <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <ul className="sub-sub-category">
              <li><a target="_blank" href="https://ajkerdeal.com/category/eid-collection-family-eid-fashion-couple-saree-panjabi" rel="noopener noreferrer">কাপল অফার</a></li>
              <li><a target="_blank" href="https://ajkerdeal.com/category/eid-collection-family-eid-fashion-father-son-eid-panjabi" rel="noopener noreferrer">বাবা-ছেলে</a></li>
            </ul>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/womens-fashion-salwar-kameez" rel="noopener noreferrer">
              সালোয়ার কামিজ
            </a>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/womens-fashion-kurti" rel="noopener noreferrer">
              কূর্তী
            </a>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/mens-shopping-t-shirts" rel="noopener noreferrer">
              টি - শার্ট
            </a>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/eid-poshra-tupi-tasbeeh-ittar" rel="noopener noreferrer">
              টুপি, তসবি, আতর
            </a>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/mens-shopping-toiletries-shaver-trimmer" rel="noopener noreferrer">
              শেভার অ্যান্ড ট্রিমার
            </a>
          </li>
          <li>
            <a target="_blank" href="https://ajkerdeal.com/category/shoes-sandals" rel="noopener noreferrer">
              জুতা ও স্যান্ডেল
            </a>
          </li>
        </ul>
      </li>

     
    </ul>
  </div>
</div> */}



             
        
    </>
  );
};

export default BookingForm;
