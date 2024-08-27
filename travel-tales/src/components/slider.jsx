import React from "react";



const Slider = () => {
  return (
    <section id="section-1">
    <div className="content-slider">
      <input type="radio" id="banner1" className="sec-1-input" name="banner" checked />
      <input type="radio" id="banner2" className="sec-1-input" name="banner" />
      <input type="radio" id="banner3" className="sec-1-input" name="banner"/>
      <input type="radio" id="banner4" className="sec-1-input" name="banner"/>
      <div className="slider">
        <div id="top-banner-1" className="banner">
          <div className="banner-inner-wrapper header-text">
            <div className="main-caption">
              <div>Welcome to Travel Tales,  Whether you're exploring bustling cities, serene landscapes, or hidden gems off the beaten path, Travel Tales makes it easy to document every moment of your journey. Our intuitive app lets you create personalized travel journals, complete with photos, notes, and maps, so you can relive your experiences and inspire others.</div>
             
              <div className="border-button"><a href="about.html">start your journey</a></div>
            </div>
            
          </div>
        </div>
        </div>
    </div>
  </section>
  );
};

export default Slider;