import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/artist_responsive.css';
import './styles/artist.css';
import './styles/blog_responsive.css';
import './styles/blog.css';
import './styles/contact_responsive.css';
import './styles/contact.css';
import './styles/elements_responsive.css';
import './styles/elements.css';
import './styles/main_styles.css';
import './styles/responsive.css';

function App() {
  return (
    <div className="super_container">
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-center">
                  {/* Logo */}
                  <div className="logo">
                    <a className="d-flex flex-row align-items-end justify-content-start">
                      <span className="logo_bars d-flex flex-row align-items-end justify-content-between"><span /><span /><span /><span /><span /></span>
                      <span className="logo_text">TrendMusic</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Home */}
        <div className="home">
          {/* Home Slider */}
          <div className="home_slider_container">
            <div className="owl-carousel owl-theme home_slider">
              {/* Slide */}
              <div className="slide">
                <div className="background_image" style={{backgroundImage: 'url(images/index.jpg)'}} />
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content">
                          <div className="home_title_container text-center">
                            <div className="home_title islive text-center">
                              <h1>Trend <span>Music.</span></h1>
                            </div>
                          </div>
                          <div className="music_form_container">
                            <form action="#" className="music_form">
                              <div className="d-flex flex-md-row flex-column align-items-start justify-content-md-between justify-content-start">
                                <div className="music_form_inputs d-flex flex-row align-items-start justify-content-between">
                                  <input type="text" className="music_form_input" placeholder="Search artist, music and genre" required="required" />
                                </div>
                                <button className="music_form_button button"><span>Search</span></button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide */}
              <div className="slide">
                <div className="background_image" style={{backgroundImage: 'url(images/index.jpg)'}} />
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content">
                          <div className="home_title_container text-center">
                            <div className="home_title islive text-center">
                              <h1>your <span>music.</span></h1>
                            </div>
                          </div>
                          <div className="music_form_container">
                            <form action="#" className="music_form">
                              <div className="d-flex flex-md-row flex-column align-items-start justify-content-md-between justify-content-start">
                                <div className="music_form_inputs d-flex flex-row align-items-start justify-content-between">
                                  <div className="custom_dropdown music_form_input cdd">
                                    <div className="custom_dropdown_selected cdd">Event</div>
                                    <ul className="cdd">
                                      <li>Event 1</li>
                                      <li>Event 2</li>
                                      <li>Event 3</li>
                                    </ul>
                                  </div>
                                  <input type="text" className="music_form_input" placeholder="music" required="required" />
                                </div>
                                <button className="music_form_button button"><span>get your music</span></button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide */}
              <div className="slide">
                <div className="background_image" style={{backgroundImage: 'url(images/index.jpg)'}} />
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content">
                          <div className="home_title_container text-center">
                            <div className="home_title islive text-center">
                              <h1>your <span>music.</span></h1>
                            </div>
                          </div>
                          <div className="music_form_container">
                            <form action="#" className="music_form">
                              <div className="d-flex flex-md-row flex-column align-items-start justify-content-md-between justify-content-start">
                                <div className="music_form_inputs d-flex flex-row align-items-start justify-content-between">
                                  <div className="custom_dropdown music_form_input cdd">
                                    <div className="custom_dropdown_selected cdd">Event</div>
                                    <ul className="cdd">
                                      <li>Event 1</li>
                                      <li>Event 2</li>
                                      <li>Event 3</li>
                                    </ul>
                                  </div>
                                  <input type="text" className="music_form_input" placeholder="music" required="required" />
                                </div>
                                <button className="music_form_button button"><span>get your music</span></button>
                              </div>
                            </form>
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
        {/* Tours */}
        <div className="tours">
          <div className="container">
            <div className="row row-lg-eq-height">
              {/* Add */}
              <div className="col-lg-4 order-lg-1 order-2 tours_col">
                <div className="extra d-flex flex-column align-items-center justify-content-between">
                  <div className="background_image" style={{backgroundImage: 'url(images/extra_1.jpg)'}} />
                  <div className="extra_frame" />
                  <div className="extra_text">it's awesome</div>
                  <div className="extra_title_container">
                    <div className="extra_year">2020</div>
                    <div className="extra_title">TOP MUSIC</div>
                    <div className="extra_subtitle">june 2020</div>
                  </div>
                </div>
              </div>
              {/* Tours Content */}
              <div className="col-lg-8 order-lg-2 order-1">
                <div className="tours_content">
                  <div className="section_title">
                    <h1>Trending</h1>
                  </div>
                  <div className="tours_list_container">
                    <ul className="tours_list">
                      {/* Tour */}
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div className="tour_info">
                          <div className="tour_date">Sun, 21 Oct 2018</div>
                          <div className="tour_name"><a href="#">Judul Lagu</a></div>
                          <div className="tour_location">Penyanyi</div>
                        </div>
                      </li>
                      {/* Tour */}
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div className="tour_info">
                          <div className="tour_date">Mon, 22 Oct 2018</div>
                          <div className="tour_name"><a href="#">Judul Lagu</a></div>
                          <div className="tour_location">Penyanyi</div>
                        </div>
                      </li>
                      {/* Tour */}
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div className="tour_info">
                          <div className="tour_date">Tue, 23 Oct 2018</div>
                          <div className="tour_name"><a href="#">Judul Lagu</a></div>
                          <div className="tour_location">Penyanyi</div>
                        </div>
                      </li>
                      {/* Tour */}
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div className="tour_info">
                          <div className="tour_date">Wed, 24 Oct 2018</div>
                          <div className="tour_name"><a href="#">Judul Lagu</a></div>
                          <div className="tour_location">Penyanyi</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* App */}
        {/* News */}
        <div className="news">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title">
                  <h1>Latest News</h1>
                </div>
              </div>
            </div>
            <div className="row news_row">
              {/* News Post */}
              <div className="col-xl-4 col-md-6">
                <div className="news_post image_top">
                  <div className="news_post_image"><img src="images/news_1.jpg" alt="" /></div>
                  <div className="news_post_content">
                    <div className="news_post_title"><a>Music Seminary at Festival</a></div>
                    <div className="news_post_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, neque ac porttitor scelerisque, nisi nisl tincidunt enim, non aliquet diam neque sed urna.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* News Post */}
              <div className="col-xl-4 col-md-6">
                <div className="news_post image_bottom d-flex flex-column align-items-start justify-content-start">
                  <div className="news_post_content order-md-1 order-2">
                    <div className="news_post_title"><a>Festival list for 2019</a></div>
                    <div className="news_post_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, neque ac porttitor scelerisque, nisi nisl tincidunt enim, non aliquet diam neque sed urna.</p>
                    </div>
                  </div>
                  <div className="news_post_image order-md-2 order-1"><img src="images/news_2.jpg" alt="" /></div>
                </div>
              </div>
              {/* News Post */}
              <div className="col-xl-4 col-md-6">
                <div className="news_post image_top">
                  <div className="news_post_image"><img src="images/news_3.jpg" alt="" /></div>
                  <div className="news_post_content">
                    <div className="news_post_title"><a>New album release in 2019</a></div>
                    <div className="news_post_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, neque ac porttitor scelerisque, nisi nisl tincidunt enim, non aliquet diam neque sed urna.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">
          <div className="background_image" style={{backgroundImage: 'url(images/footer.jpg)'}} />
          <div className="footer_content">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  {/* Logo */}
                  <div className="logo">
                    <a href="#" className="d-flex flex-row align-items-end justify-content-start">
                      <span className="logo_bars d-flex flex-row align-items-end justify-content-between"><span /><span /><span /><span /><span /></span>
                      <span className="logo_text">TrendMusic</span>
                    </a>
                  </div>
                  {/* Footer Social */}
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bar">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="copyright text-center">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;