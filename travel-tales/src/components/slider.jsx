import React from "react";



const Slider = () => {
  return (
    <section id="section-1">
    <div class="content-slider">
      <input type="radio" id="banner1" class="sec-1-input" name="banner" checked />
      <input type="radio" id="banner2" class="sec-1-input" name="banner" />
      <input type="radio" id="banner3" class="sec-1-input" name="banner"/>
      <input type="radio" id="banner4" class="sec-1-input" name="banner"/>
      <div class="slider">
        <div id="top-banner-1" class="banner">
          <div class="banner-inner-wrapper header-text">
            <div class="main-caption">
              <h2>Welcome to Travel Tales, your ultimate companion for capturing and sharing your adventures! Whether you're exploring bustling cities, serene landscapes, or hidden gems off the beaten path, Travel Tales makes it easy to document every moment of your journey. Our intuitive app lets you create personalized travel journals, complete with photos, notes, and maps, so you can relive your experiences and inspire others. Start your adventure today and let Travel Tales turn your travels into treasured stories.</h2>
             
              <div class="border-button"><a href="about.html">Go There</a></div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="more-info">
                    <div class="row">
                      <div class="col-lg-3 col-sm-6 col-6">
                        <i class="fa fa-user"></i>
                        <h4><span>Population:</span><br/>44.48 M</h4>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-6">
                        <i class="fa fa-globe"></i>
                        <h4><span>Territory:</span><br/>275.400 KM<em>2</em></h4>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-6">
                        <i class="fa fa-home"></i>
                        <h4><span>AVG Price:</span><br/>$946.000</h4>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-6">
                        <div class="main-button">
                          <a href="about.html">Explore More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  </section>
  );
};

export default Slider;