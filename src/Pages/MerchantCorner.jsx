import React, { useState, useEffect } from "react";
import "./MerchantCorner.css";
import adLogo from "../../src/assets/ad-logo.png";
import GoogleLogin from "../Components/Login-Registration/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MerchantCorner = () => {
  const [passMatch, setPassMatch] = useState(true);
  const [isRegister, setIsRegister] = useState(true);
  const { createUser, signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirm_password = form.confirm_password.value;

    // if (password !== confirm_password) {
    //   setPassMatch(false);
    // }

    console.log(email, password);

    createUser(email, password).then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: name,
        };
        fetch("https://task-server-fawn.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        // .then((data) => localStorage.setItem("token", data?.token));
      }
    });
    if (user) {
      navigate(from);
    }
  };

  function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={toggleAccordion}>
          <span>{title}</span>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  }

  const handleToggleForm = () => {
    setIsRegister(!isRegister); // Toggle between register and login
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //console.log(email, password);

    try {
      const res = await signIn(email, password); // Assuming signIn is a function that returns a promise
      console.log(res);
      if (res && res.user) {
       
        navigate('/dashboard');
      } else {
        
        console.log('Login failed');
      }
    } catch (error) {
    
      console.error('Error during sign in', error);
    };
  


    // await signIn(email, password)
    // .then(result=>{
    //    const loggedinuser= result.user;
    //    console.log(loggedinuser)
    //    const user= {email};

    //   axios.post('https://task-server-fawn.vercel.app/jwt', user, {withCredentials: true})
    //   .then(res=> {
    //     console.log(res.data)
        //  if (res.data.success){
        //    navigate('/dashboard')
        //  }

    //   })
    // })
  };

  return (
    <div className="container-MerchantCorner">
      <div className="background-image">
        <div className="header-MerchantCorner">
          <div className="merchantCornerlogo ">
            <img
              src="https://static.ajkerdeal.com/images/login_files/ad_logo.png"
              alt="AjkerDeal Logo"
            />
          </div>
          <div className="contact-number">+88-01850000999</div>
        </div>

        <div className="registration-form">
          <div className="login-title-wrap-merchant">
            {isRegister ? "রেজিস্ট্রেশন" : "লগইন"}
          </div>
          {isRegister ? (
            <form onSubmit={handleSubmit}>
              <div className="merchantCornerform">
                <input
                  style={{ margin: "1rem 0" }}
                  type="name"
                  placeholder="আপনার নাম"
                  name="name"
                  required
                />
                <input
                  style={{ margin: "1rem 0" }}
                  type="email"
                  placeholder="আপনার ইমেইল এড্রেস লিখুন"
                  name="email"
                  required
                />
                <input
                  style={{ margin: "1rem 0" }}
                  type="password"
                  placeholder="আপনার পাসওয়ার্ড দিন"
                  name="password"
                  required
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <button
                    style={{ backgroundColor: "#599CD3", color: "white" }}
                    type="submit"
                  >
                    রেজিস্ট্রেশন করুন
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleForm}
                    style={{ color: "#599CD3" }}
                  >
                    {isRegister ? "লগইন করুন" : "রেজিস্ট্রেশন করুন"}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="merchantCornerform">
              <input
                style={{ margin: "1rem 0" }}
                type="email"
                placeholder="আপনার ইমেইল এড্রেস লিখুন"
                name="email"
                required
              />
              <input
                style={{ margin: "1rem 0" }}
                type="password"
                placeholder="আপনার পাসওয়ার্ড দিন"
                 name="password"
                required
              />
              <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
              <button
                style={{ backgroundColor: "#599CD3", color: "white" }}
                type="submit"
              >
                লগইন করুন
              </button>
              <button
                type="button"
                onClick={handleToggleForm}
                style={{ color: "#599CD3" }}
              >
                {isRegister ? "লগইন করুন" : "রেজিস্ট্রেশন করুন"}
              </button>
              </div>
              </div>
            </form>
          )}
        </div>

        <div className="">
          <div className="footer">
            <img
              src="https://static.ajkerdeal.com/images/login_files/merchant-flow.svg"
              alt="Icon 1"
            />
          </div>
        </div>
      </div>

      <div className="faq-container">
        <h1>আপনার জিজ্ঞাসা, আমাদের উত্তর</h1>
        <Accordion title="১. আজকেরডিল টউ করণ">
          <p>
            দেশের সবচেয়ে বড় অনলাইন শপিং মল এবং বাংলা ভাষায় দেশের পূর্ণ
            ই-কমার্স ওয়েবসাইট। এখানে সব ধরনের নির্ভরযোগ্য প্রয়োজনীয় প্রতিটি
            পণ্যসামগ্রী যেমন, গ্যাজেটস, ইলেকট্রনিক্স, গৃহস্থালী সামগ্রী, কসমেটিক
            পণ্য, পোশাক, বাচ্চাদের বিভিন্ন সামগ্রী, প্রবাসী সামগ্রী ও লাইফস্টাইল
            পণ্য থেকে শুরু করে সবধরনের অত্যন্ত মূল্যবান এবং জনপ্রিয় পণ্য পাওয়া
            যায়।
          </p>
          <p>
            বাংলাদেশের যেকোনো স্থান থেকে যেকোনো সময়ে ইন্টারনেট সংযোগের মাধ্যমে
            অনলাইনে ক্রেতারা পছন্দসই পণ্যের অর্ডার করতে এবং আজকেরডিল তার
            নির্দিষ্ট ব্যবস্থাপনায় সারা বাংলাদেশের ক্রেতাদের ডেলিভারি দিয়ে
            থাকে।
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
