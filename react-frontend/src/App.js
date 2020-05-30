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
                    <a href="#" className="d-flex flex-row align-items-end justify-content-start">
                      <span className="logo_bars d-flex flex-row align-items-end justify-content-between"><span /><span /><span /><span /><span /></span>
                      <span className="logo_text">TrendMusic</span>
                    </a>
                  </div>
                  {/* Main Navigation */}
                  <nav className="main_nav">
                    <ul className="d-flex flex-row align-items-center justify-content-start">
                      <li className="active"><a href="index.html">Home</a></li>
                      <li><a href="artists.html">Artists</a></li>
                      <li><a href="blog.html">News</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                  {/* User area */}
                  <div className="log_reg d-flex flex-row align-items-center justify-content-start">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Register</a></li>
                    </ul>
                    {/* Hamburger */}
                    <div className="hamburger d-flex flex-column align-items-end justify-content-between">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Menu */}
        <div className="menu">
          <div className="menu_container">
            <div className="menu_background" />
            <div className="menu_close"><i className="fa fa-times" aria-hidden="true" /></div>
            <div className="menu_content d-flex flex-column align-items-center justify-content-start">
              <nav className="menu_nav">
                <ul className="d-flex flex-column align-items-center justify-content-start">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="artists.html">Artists</a></li>
                  <li><a href="#">Download Music</a></li>
                  <li><a href="blog.html">News</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
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
                          <div className="tickets_form_container">
                            <form action="#" className="tickets_form">
                              <div className="d-flex flex-md-row flex-column align-items-start justify-content-md-between justify-content-start">
                                <div className="tickets_form_inputs d-flex flex-row align-items-start justify-content-between">
                                  <div className="custom_dropdown tickets_form_input cdd">
                                    <div className="custom_dropdown_selected cdd">Genre</div>
                                    <ul className="cdd">
                                      <li>Genre 1</li>
                                      <li>Genre 2</li>
                                      <li>Genre 3</li>
                                    </ul>
                                  </div>
                                  <input type="text" className="tickets_form_input" placeholder="Music" required="required" />
                                </div>
                                <button className="tickets_form_button button"><span>Search</span></button>
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
                          <div className="tickets_form_container">
                            <form action="#" className="tickets_form">
                              <div className="d-flex flex-md-row flex-column align-items-start justify-content-md-between justify-content-start">
                                <div className="tickets_form_inputs d-flex flex-row align-items-start justify-content-between">
                                  <div className="custom_dropdown tickets_form_input cdd">
                                    <div className="custom_dropdown_selected cdd">Event</div>
                                    <ul className="cdd">
                                      <li>Event 1</li>
                                      <li>Event 2</li>
                                      <li>Event 3</li>
                                    </ul>
                                  </div>
                                  <input type="text" className="tickets_form_input" placeholder="Tickets" required="required" />
                                </div>
                                <button className="tickets_form_button button"><span>get your tickets</span></button>
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
                          <div className="tickets_form_container">
                            <form action="#" className="tickets_form">
                              <div className="d-flex flex-md-row flex-column align-items-start justify-content-md-between justify-content-start">
                                <div className="tickets_form_inputs d-flex flex-row align-items-start justify-content-between">
                                  <div className="custom_dropdown tickets_form_input cdd">
                                    <div className="custom_dropdown_selected cdd">Event</div>
                                    <ul className="cdd">
                                      <li>Event 1</li>
                                      <li>Event 2</li>
                                      <li>Event 3</li>
                                    </ul>
                                  </div>
                                  <input type="text" className="tickets_form_input" placeholder="Tickets" required="required" />
                                </div>
                                <button className="tickets_form_button button"><span>get your tickets</span></button>
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
            {/* Home Slider Navigation */}
            <div className="home_slider_nav"><i className="fa fa-angle-right" aria-hidden="true" /></div>
            {/* Home Social */}
            <div className="home_social">
              <div className="d-flex flex-row align-items-center justify-content-start">
                <div className="home_social_text">follow</div>
                <div className="home_social_list">
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                    <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                    <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Scroll Down */}
            <div className="scroll_down scroll_down_link" data-scroll-to=".tours">
              <a href="#" />
              <div className="d-flex flex-row align-items-center justify-content-start">
                <div>scroll down</div>
                <div className="scroll_arrows d-flex flex-column align-items-start justify-content-start">
                  <img src="images/arrow_down.png" alt="" />
                  <img src="images/arrow_down.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Song */}
        <div className="song">
          <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="images/song.jpg" data-speed="0.8" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="song_content">
                  {/* Player */}
                  <div className="single_player_container">
                    <div className="single_player d-flex flex-row align-items-center justify-content-start">
                      <div id="jplayer_1" className="jp-jplayer" />
                      <div id="jp_container_1" className="jp-audio" role="application" aria-label="media player">
                        <div className="jp-gui jp-interface d-flex flex-lg-row flex-column align-items-start justify-content-start">
                          {/* Player Controls */}
                          <div className="player_controls_box d-flex flex-row align-items-start justify-content-start">
                            <div className="order-lg-1 order-2">
                              <div className="player_title">song of the week</div>
                              <div className="jp-controls-holder player_controls ml-auto d-flex flex-row align-items-start justify-content-start">
                                <button className="jp-play player_button" tabIndex={0} />
                                <button className="jp-stop player_button" tabIndex={0} />
                              </div>
                            </div>
                            <div className="song_image ml-lg-auto order-lg-2 order-1"><img src="images/song_1.jpg" alt="" /></div>
                          </div>
                          {/* Progress Bar */}
                          <div className="player_bars d-flex flex-row align-items-start justify-content-start">
                            <div className="player_progress_box">
                              <div className="jp-current-time" role="timer" aria-label="time">00:00</div>
                              <div className="song_info">
                                <div className="jp-artist" aria-label="title">Michael Smith</div>
                                <div className="jp-title" aria-label="title" />
                              </div>
                              <div className="jp-progress">
                                <div className="jp-seek-bar">
                                  <div>
                                    <div className="jp-play-bar"><span /></div>
                                  </div>
                                </div>
                              </div>
                              <div className="jp-duration ml-auto" role="timer" aria-label="duration">02:33</div>
                            </div>
                            {/* Volume Controls */}
                            <div className="jp-volume-controls ml-lg-auto">
                              <div className="mute_button">
                                <button className="jp-mute" tabIndex={0} />
                              </div>
                              <div className="d-flex flex-row align-items-center justify-content-start">
                                <div className="jp-volume-bar">
                                  <div>
                                    <div className="jp-volume-bar-value" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jp-no-solution">
                          <span>Update Required</span>
                          To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>
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
                    <div className="extra_year">2019</div>
                    <div className="extra_title">TOP MUSIC</div>
                    <div className="extra_subtitle">november 2018</div>
                  </div>
                  <div className="button extra_button"><a href="#">Check</a></div>
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
                        <div className="button tour_button ml-auto"><a href="#">Check</a></div>
                      </li>
                      {/* Tour */}
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div className="tour_info">
                          <div className="tour_date">Mon, 22 Oct 2018</div>
                          <div className="tour_name"><a href="#">Judul Lagu</a></div>
                          <div className="tour_location">Penyanyi</div>
                        </div>
                        <div className="button tour_button ml-auto"><a href="#">Check</a></div>
                      </li>
                      {/* Tour */}
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div className="tour_info">
                          <div className="tour_date">Tue, 23 Oct 2018</div>
                          <div className="tour_name"><a href="#">Judul Lagu</a></div>
                          <div className="tour_location">Penyanyi</div>
                        </div>
                        <div className="button tour_button ml-auto"><a href="#">Check</a></div>
                      </li>
                      {/* Tour */}
                      <li className="d-flex flex-row align-items-start justify-content-start">
                        <div className="tour_info">
                          <div className="tour_date">Wed, 24 Oct 2018</div>
                          <div className="tour_name"><a href="#">Judul Lagu</a></div>
                          <div className="tour_location">Penyanyi</div>
                        </div>
                        <div className="button tour_button ml-auto"><a href="#">Check</a></div>
                      </li>
                    </ul>
                  </div>
                  <div className="tours_link"><a href="#">See All Trending</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* App */}
        {/* Featured */}
        <div className="featured">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title text-center">
                  <h1>Featured Albums</h1>
                </div>
                <div className="featured_list">
                  <div id="jplayer_2" className="jp-jplayer" />
                  <div id="jp_container_2" className="jp-audio" role="application" aria-label="media player">
                    <div className="jp-type-playlist">
                      <div className="jp-playlist">
                        <ul className="d-flex flex-row align-items-start justify-content-start flex-wrap">
                          <li />
                        </ul>
                      </div>
                      <div className="jp-no-solution">
                        <span>Update Required</span>
                        To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <div className="news_post_date"><a href="#">Oct 19, 2018</a></div>
                    <div className="news_post_title"><a href="#">Music Seminary at Festival</a></div>
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
                    <div className="news_post_date"><a href="#">Oct 19, 2018</a></div>
                    <div className="news_post_title"><a href="#">Festival list for 2019</a></div>
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
                    <div className="news_post_date"><a href="#">Oct 19, 2018</a></div>
                    <div className="news_post_title"><a href="#">New album release in 2019</a></div>
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
                      <span className="logo_text">music</span>
                    </a>
                  </div>
                  {/* Footer Social */}
                  <div className="footer_social">
                    <ul className="d-flex flex-row align-items-center justify-content-center">
                      <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
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
