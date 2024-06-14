import React from 'react';
import bannerphoto from '../../assets/golden-field-gf-mk800-keyboard.jpg'

const Banner = () => {
return (
 <div className="hero" style={{
  backgroundImage: `url(${bannerphoto})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  position: 'relative'
}}>

<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-md">
<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
<p className="mb-5">Our expert instructors will sell exciting products  </p>
<button className="btn btn-primary">Get Started</button>
 </div>
 </div>
</div>
  );
};

export default Banner;