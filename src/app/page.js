"use client"
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/pagination';
import Link from 'next/link';


const page = () => {
  return (
    <div>

      <div className='section1_main'>
        <div className='container_haider'>
          <div className='section1_wrapper'>



            <div className='haider_top'>
              <div className='haider_top_left'>
                <div className='img_1flx'>
                  <label>
                    <Image
                      className="logo"
                      src="/image/watch.png"
                      width={16}
                      height={16}
                      priority
                    />
                  </label>
                  Mon - Fri: 9:00 - 19:00 / Closed on Weekends

                </div>
                <div className='img_1flx'>
                  <label>
                    <Image
                      className="logo"
                      src="/image/watch.png"
                      width={16}
                      height={16}
                      priority
                    /></label>
                  Phone +123 456 7890
                </div>
                <div className='img_1flx'>
                  <label>   <Image
                    className="logo"
                    src="/image/mail.png"
                    width={20}
                    height={15}
                    priority
                  /></label>
                  Email : itinfo@example.com

                </div>

              </div>
              <div className='img_1flx'>
                <label>   <Image
                  className="logo"
                  src="/image/location.png"
                  width={12}
                  height={16}
                  priority
                /></label>

                Location : Thornridge Cir. Shiloh, Hawaii
              </div>


            </div>

          </div>
        </div>
      </div>


      {/* section2 */}
      <div className='section2_main'>
        <div className='container'>
          <div className='section2_wrapper'>


            <div className='logo_img'>
              <Image
                className="logo"
                src="/image/logo.png"
                width={47}
                height={44}
                priority
              />
              <label className='logo_label'>IT Solution</label>
            </div>
            <div className='nav_menu'>
              <ul className='nav_ul'>
                <li className='nav_li'>
                  <Link href="/home">Home</Link>
                </li>
                <li className='nav_li'>
                  <Link href="/about">About</Link>
                </li>
                <li className='nav_li'>
                  <Link href="/service">Service</Link>
                </li>
                <li className='nav_li'>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className='nav_li'>
                  <Link href="/blog">Blog</Link>
                </li>
                <li className='nav_li'>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className='get_btn'>
              <a href='#'> Get a Quote</a>
            </div>




          </div>
        </div>
      </div>

      {/* section3 */}
      <div className='section3_main'>
        <div className='container_1'>
          <div className='section3_wrapper'>


            <div className='section3_left'>
              <h1 className='section3_h1'>Safe & Secure IT Solution</h1>
              <p className='paragraph_1'>Modern IT & Tech Services Solutions</p>
              <p className='paragraph_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className='section3_btn'>
                <a href='#'> Get A Quote</a>
              </div>

            </div>
            <div className='section3_right'>
              <div className='section3_imgs'>
                <Image
                  className="logo1"
                  src="/image/img1.png"
                  width={349}
                  height={447}
                  priority
                />
                <div className='revenue_box'>
                  <label className='label2_flx'>
                    <Image
                      className=""
                      src="/image/green.png"
                      width={10}
                      height={10}
                      priority
                    />
                    <h1 className='revenue_heading'>Revenue</h1>
                  </label>
                  <label className='label1_flx'>
                    <h1 className='money_heading'>$35,425</h1>
                    <h1 className='percentage_heading'>+50%</h1>
                  </label>
                  <label>
                    <p className='last_year_revenue_paragraph'>Last Year Revenue $68,2154</p>
                  </label>
                </div>
              </div>
              <div className='section3_img1'>
                <Image
                  className="logo2"
                  src="/image/img3.png"
                  width={171}
                  height={205}
                  priority
                />
                <div className='inner_text'>
                  <h1 className='inner_title1'>20+ Year Of Experience</h1>
                  <p className='inner_text2'>Lorem text is here lorem put isum</p>
                </div>
              </div>

              <div className='section3_img2'>
                <Image
                  className="logo3"
                  src="/image/img2.png"
                  width={357}
                  height={456}
                  priority
                />
                <div className='brand_logo'>
                  <Image
                    className="logo4"
                    src="/image/img4.png"
                    width={50}
                    height={50}
                    priority
                  />
                  <Image
                    className="logo4"
                    src="/image/img5.png"
                    width={50}
                    height={50}
                    priority
                  />
                  <Image
                    className="logo4"
                    src="/image/img6.png"
                    width={50}
                    height={50}
                    priority
                  />
                  <div>
                    <h1 className='happy_customer_heading'>Our Happy Customer</h1>
                    <p className='happy_customer_rating'>5.0 (245 review)</p>
                  </div>
                </div>
              </div>





            </div>






          </div>
        </div>
      </div>



      {/* section4 */}

      <div className='section4_main'>
        <div className='container_1'>
          <div className='section4_wrapper'>


            <div className='section4_top'>
              <h1 className='section4_h1'>Trusted By World’s Best Companies</h1>
            </div>

            <div className='section4_bottom'>
              <div className='logo_div'>
                <Image
                  className="logo5"
                  src="/image/img7.png"
                  width={115}
                  height={100}
                  priority
                />
              </div>
              <div className='logo_div'>
                <Image
                  className="logo5"
                  src="/image/img8.png"
                  width={115}
                  height={100}
                  priority
                />
              </div>
              <div className='logo_div'>
                <Image
                  className="logo5"
                  src="/image/img9.png"
                  width={115}
                  height={100}
                  priority
                />
              </div>
              <div className='logo_div'>
                <Image
                  className="logo5"
                  src="/image/img10.png"
                  width={115}
                  height={100}
                  priority
                />
              </div>
              <div className='logo_div'>
                <Image
                  className="logo5"
                  src="/image/img11.png"
                  width={115}
                  height={100}
                  priority
                />
              </div>
              <div className='logo_div'>
                <Image
                  className="logo5"
                  src="/image/img12.png"
                  width={115}
                  height={100}
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* section5 */}

      <div className='section5_main'>
        <div className='container_2'>

          <div className='section5_wr'>


            <div className='section5_left'>
              <div>
                <Image
                  className="logo6"
                  src="/image/building.png"
                  width={400}
                  height={501}
                  priority
                />
              </div>
              <div className='boy_img'>
                <Image
                  className="logo6"
                  src="/image/boy.png"
                  width={300}
                  height={406}
                  priority
                />
              </div>
              <div className='section5_circle'>
                <Image
                  className="logo6"
                  src="/image/girl.png"
                  width={60}
                  height={60}
                  priority
                />
                <div className='inner_text3'>
                  <h1 className='inner_head1'>Brooklyn Simmons</h1>
                  <p className='inner_para1'>Founder CEO</p>
                </div>
              </div>

            </div>
            <div className='section5_right'>

              <div className='about_us'>
                <a href="">About Us</a>
              </div>
              <div>
                <h1 className='section5_h2'>We Build Innovative <br></br> Solutions Through Technology</h1>
                <p className='paragraph_section5'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Creature dominion was the Shall under In yielding saying given dominion don't of two god which said. Creature dominion was the good creepeth to give bring doesn't first shall two signs is a gathered set of people. good creepeth to give bring doesn't first shall two signs is a gathered set of people.</p>
              </div>
              <div>
                <label className='right_img'>
                  <Image
                    className="logo7"
                    src="/image/right.png"
                    width={25}
                    height={25}
                    priority
                  />
                  Experienced Staff
                </label>
              </div>
              <div>
                <label className='right_img'>
                  <Image
                    className="logo7"
                    src="/image/right1.png"
                    width={25}
                    height={25}
                    priority
                  />
                  Fast Service
                </label>
              </div>
              <div>
                <label className='right_img'>
                  <Image
                    className="logo7"
                    src="/image/right2.png"
                    width={25}
                    height={25}
                    priority
                  />
                  TechnicalSupport
                </label>
              </div>
              <div className='section5_btn'>
                <a href=""> Read More</a>
              </div>

            </div>




          </div>

        </div>
      </div>




      {/* --section6-- */}

      <div className='section6_main'>
        <div className='container_1'>

          <div>
            <h1 className='section6_h1'>Our Popular Services</h1>
            <p className='section6_para'>We Are Dedicated To Serve You All Time.</p>
          </div>

          <div className='section6_box'>
            <div className='box1'>
              <label className='label_box1'>
                <Image
                  className="logo7"
                  src="/image/vec1.png"
                  width={24}
                  height={24}
                  priority
                />
                Web Development
              </label>
              <div>
                <p className='section6_para1'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Csdeas esreature dominion was and memories the Shall under.</p>
              </div>
              <div className='section6_btn'>
                <a href='#'> Read More</a>
              </div>
            </div>
            <div className='box1'>
              <label className='label_box1'>
                <Image
                  className="logo7"
                  src="/image/vec2.png"
                  width={24}
                  height={24}
                  priority
                />
                Mobile App Development
              </label>
              <div>
                <p className='section6_para1'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Csdeas esreature dominion was and memories the Shall under.</p>
              </div>
              <div className='section6_btn'>
                <a href='#'> Read More</a>
              </div>


            </div>
            <div className='box1'>
              <label className='label_box1'   >
                <Image
                  className="logo7"
                  src="/image/vec3.png"
                  width={24}
                  height={24}
                  priority
                />
                Tech Support
              </label>
              <div>
                <p className='section6_para1'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Csdeas esreature dominion was and memories the Shall under.</p>
              </div>
              <div className='section6_btn'>
                <a href='#'> Read More</a>
              </div>


            </div>
            <div className='box4'>
              <label className='label_box1'>
                <Image
                  className="logo7"
                  src="/image/vec4.png"
                  width={24}
                  height={24}
                  priority
                />
                UI & UX Design
              </label>
              <div>
                <p className='section6_para1'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Csdeas esreature dominion was and memories the Shall under.</p>
              </div>
              <div className='section6_btn'>
                <a href='#'> Read More</a>
              </div>


            </div>
            <div className='box5'>
              <label className='label_box1'>
                <Image
                  className="logo7"
                  src="/image/vec5.png"
                  width={24}
                  height={24}
                  priority
                />
                Digital Marketing
              </label>
              <div>
                <p className='section6_para1'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Csdeas esreature dominion was and memories the Shall under.</p>
              </div>
              <div className='section6_btn'>
                <a href='#'> Read More</a>
              </div>


            </div>




          </div>
          <div className='view_all_service'>
            <a href='#' className='view_all_btn'> View More Services</a>
          </div>

        </div>
      </div>


      {/* section7 */}

      <div className='section7_main'>
        <div className='container_1'>
          <div className='section7_wrapper'>

            <div className='section7_top'>
              <h1 className='section7_heading'>Our Milestones Achieved</h1>
            </div>

            <div className='section7_down'>

              <div className='section7_box'>

                <div className='app_img'>
                  <Image
                    className="logo7"
                    src="/image/app1.png"
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <div className='25_years'>
                  <div className='25years_content'>
                    <h1 className='25years_heading'>25+</h1>
                    <div>
                      <p className='25years_para'>Years of experience</p>
                    </div>
                  </div>

                </div>

              </div>
              <div className='section7_box'>

                <div className='app_img'>
                  <Image
                    className="logo7"
                    src="/image/app2.png"
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <div className='25_years'>
                  <div className='25years_content'>
                    <h1 className='25years_heading'>45k+</h1>
                    <div>
                      <p className='25years_para'>Our Satisfied Clients</p>
                    </div>
                  </div>

                </div>

              </div>
              <div className='section7_box'>

                <div className='app_img'>
                  <Image
                    className="logo7"
                    src="/image/app3.png"
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <div className='25_years'>
                  <div className='25years_content'>
                    <h1 className='25years_heading'>2k+</h1>
                    <div>
                      <p className='25years_para'>Our Highly Qualified Team</p>
                    </div>
                  </div>

                </div>

              </div>
              <div className='section7_box'>

                <div className='app_img'>
                  <Image
                    className="logo7"
                    src="/image/app4.png"
                    width={50}
                    height={50}
                    priority
                  />
                </div>
                <div className='25_years1'>
                  <div className='25years_content'>
                    <h1 className='25years_heading'>62k+</h1>
                    <div>
                      <p className='25years_para'>Successfully Project Delivered</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>

      {/* section8 */}

      <div className='section8_main'>
        <div className='container_1'>


          <div className='section8_top'>
            <h1 className='section8_heading'>Why Choose Us?</h1>
          </div>
          <div className='sectio8_main_subheading'>
            <h1 className='section8_subheading'>We serve a wide variety of industries</h1>
          </div>

          <div className='section8_down'>

            <div className='section8_left'>

              <ul className='section8_ul'>
                <li className='our_mission'>Our Mission</li>
                <li>Our Vision</li>
                <li>Award Winning</li>
              </ul>

              <div>
                <p className='section8_para'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Creature dominion was the Shall under In yielding saying given dominion don't of two god which said. Creature dominion was the good creepeth to give bring doesn't first shall two signs is a gathered set of people. good creepeth to give bring doesn't first shall two signs is a gathered set of people.</p>
              </div>
              <div>
                <p className='section8_para'>Creature dominion was the good creepeth to give bring doesn't first shall two signs is a gathered set of people. good creepeth to give bring doesn't first shall two signs is a gathered set of people.</p>
              </div>
              <div className='section8_btn'>
                <a href="">Read More</a>
              </div>

            </div>
            <div>
              <div className='logo7_main'>
                <Image
                  className="logo7_sec8"
                  src="/image/group1.png"
                  width={300}
                  height={410}
                  priority
                />
              </div>
              <div className='logo_8main'>
                <Image
                  className="logo8_sec8"
                  src="/image/gropu2.png"
                  width={423}
                  height={303}
                  priority
                />
              </div>






            </div>

          </div>




        </div>

      </div>


      {/* --section9-- */}

      <div className='section9_main'>
        <div className='container_1'>
          <div className='section9_wrapper'>

            <div className='section9_top'>
              <h1 className='section9_heading'> Our Testimonial</h1>
            </div>
            <div>
              <p className='section9_subheading'>What Says Our Happy Clients About us</p>
            </div>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='section9_down'>

                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips1.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo11"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>

                  </div>
                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips2.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo12"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>
                  </div>


                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section9_down'>

                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips1.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo11"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>

                  </div>
                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips2.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo12"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>
                  </div>


                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section9_down'>

                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips1.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo11"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>

                  </div>
                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips2.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo12"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>
                  </div>


                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section9_down'>

                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips1.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo11"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>

                  </div>
                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips2.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo12"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>
                  </div>


                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='section9_down'>

                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips1.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo11"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>

                  </div>
                  <div className='section9_box1'>
                    <div className='section9_quote1'>
                      <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                    <div className='section9_flex'>
                      <Image
                        className="logo9"
                        src="/image/elips2.png"
                        width={60}
                        height={60}
                        priority
                      />
                      <div>
                        <Image
                          className="logo10"
                          src="/image/star1.png"
                          width={72}
                          height={14}
                          priority
                        />
                        <div>
                          <h1 className='section9_name'>Brooklyn Simmons</h1>
                          <p className='section9_role'>UI/UX Designer</p>
                        </div>
                      </div>


                    </div>
                    <div>
                      <Image
                        className="logo12"
                        src="/image/koma1.png"
                        width={56}
                        height={40}
                        priority
                      />
                    </div>
                  </div>


                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>























            {/* <div className='section9_down'>

                            <div className='section9_box1'>
                                <div className='section9_quote1'>
                                    <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                </div>
                                <div className='section9_flex'>
                                    <Image
                                        className="logo9"
                                        src="/image/elips1.png"
                                        width={60}
                                        height={60}
                                        priority
                                    />
                                    <div>
                                        <Image
                                            className="logo10"
                                            src="/image/star1.png"
                                            width={72}
                                            height={14}
                                            priority
                                        />
                                        <div>
                                            <h1 className='section9_name'>Brooklyn Simmons</h1>
                                            <p className='section9_role'>UI/UX Designer</p>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <Image
                                        className="logo11"
                                        src="/image/koma1.png"
                                        width={56}
                                        height={40}
                                        priority
                                    />
                                </div>

                            </div>
                            <div className='section9_box1'>
                                <div className='section9_quote1'>
                                    <p className='section9_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                </div>
                                <div className='section9_flex'>
                                    <Image
                                        className="logo9"
                                        src="/image/elips2.png"
                                        width={60}
                                        height={60}
                                        priority
                                    />
                                    <div>
                                        <Image
                                            className="logo10"
                                            src="/image/star1.png"
                                            width={72}
                                            height={14}
                                            priority
                                        />
                                        <div>
                                            <h1 className='section9_name'>Brooklyn Simmons</h1>
                                            <p className='section9_role'>UI/UX Designer</p>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <Image
                                        className="logo12"
                                        src="/image/koma1.png"
                                        width={56}
                                        height={40}
                                        priority
                                    />
                                </div>
                            </div>


                        </div> */}

          </div>

        </div>
      </div>





      {/* --section10-- */}

      <div className='section10_main'>
        <div className='container_1'>
          <div className='section10_wrapper'>

            <div>
              <h1 className='section10_heading'>Our Case Studies</h1>
            </div>
            <div>
              <p className='section10_subheading'>See Our Awesome Works</p>
            </div>

            <div className='section10_down'>

              <div className='section10_box'>
                <div className='section10_marketimg'>
                  <Image
                    className=""
                    src="/image/market1.png"
                    width={570}
                    height={400}
                    priority
                  />
                </div>
                <div>
                  <div className='1product'>
                    <h1 className='section10_product_number'>#1 Product</h1>
                  </div>
                  <div>
                    <h1 className='section10_product_name'>Product Name Here</h1>
                  </div>
                  <div>
                    <p className='section10_product_description'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Creature dominion was the Shall under In yielding saying given dominion don't of two god which said. Creature dominion was the good creepeth to give bring doesn't first shall two signs is a gathered set of people. good creepeth to give bring doesn't first shall two signs is a gathered set of people.</p>
                  </div>
                  <div>
                    <a href="" className='section10_btn'> VIew Product Details</a>
                  </div>

                </div>
              </div>

              <div className='section10_box'>

                <div>
                  <div className='1product'>
                    <h1 className='section10_product_number'>#1 Product</h1>
                  </div>
                  <div>
                    <h1 className='section10_product_name'>Product Name Here</h1>
                  </div>
                  <div>
                    <p className='section10_product_description'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Creature dominion was the Shall under In yielding saying given dominion don't of two god which said. Creature dominion was the good creepeth to give bring doesn't first shall two signs is a gathered set of people. good creepeth to give bring doesn't first shall two signs is a gathered set of people.</p>
                  </div>
                  <div>
                    <a href="" className='section10_btn'> VIew Product Details</a>
                  </div>

                </div>
                <div className='section10_marketimg'>
                  <Image
                    className=""
                    src="/image/market2.png"
                    width={570}
                    height={400}
                    priority
                  />
                </div>


              </div>
              <div className='section10_box'>

                <div className='section10_marketimg'>
                  <Image
                    className=""
                    src="/image/market3.png"
                    width={570}
                    height={400}
                    priority
                  />
                </div>
                <div>
                  <div className='1product'>
                    <h1 className='section10_product_number'>#1 Product</h1>
                  </div>
                  <div>
                    <h1 className='section10_product_name'>Product Name Here</h1>
                  </div>
                  <div>
                    <p className='section10_product_description'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Creature dominion was the Shall under In yielding saying given dominion don't of two god which said. Creature dominion was the good creepeth to give bring doesn't first shall two signs is a gathered set of people. good creepeth to give bring doesn't first shall two signs is a gathered set of people.</p>
                  </div>
                  <div>
                    <a href="" className='section10_btn'> VIew Product Details</a>
                  </div>

                </div>
              </div>
              <div className='section10_box'>
                <div>
                  <div className='1product'>
                    <h1 className='section10_product_number'>#1 Product</h1>
                  </div>
                  <div>
                    <h1 className='section10_product_name'>Product Name Here</h1>
                  </div>
                  <div>
                    <p className='section10_product_description'>Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Creature dominion was the Shall under In yielding saying given dominion don't of two god which said. Creature dominion was the good creepeth to give bring doesn't first shall two signs is a gathered set of people. good creepeth to give bring doesn't first shall two signs is a gathered set of people.</p>
                  </div>
                  <div>
                    <a href="" className='section10_btn'> VIew Product Details</a>
                  </div>

                </div>
                <div className='section10_img4'>
                  <Image
                    className=""
                    src="/image/market4.png"
                    width={570}
                    height={400}
                    priority
                  />
                </div>
              </div>

            </div>


          </div>

        </div>
      </div>

      {/* --section11 */}

      <div className='section11_main'>
        <div className='container_1'>

          <div className='section11_wrapper'>

            <div className='section11_left'>
              <div className='section11_main_head'>
                <h1 className='section11_heading'>Connect With Us</h1>
              </div>
              <div className='section11_sutitle'>
                <p className='section11_subtitle'>We work together for success.</p>
              </div>
              <p className='section11_description'>
                Shall under In yielding saying given dominion don't of two god whiasfasfewch said. Creature dominion was the Shall under In yielding saying given dominion.
              </p>
              <div className='phone_or_mail_us'>

                <div className='phone_mail'>
                  <Image
                    className=""
                    src="/image/mail1.png"
                    width={36}
                    height={30}
                    priority
                  />

                  <div>
                    <h1 className='mail_heading'>Mail Us</h1>
                    <p className='mail_paragraph'>support@mail.com</p>
                  </div>
                </div>
                <div className='phone_mail'>
                  <Image
                    className=""
                    src="/image/call1.png"
                    width={30}
                    height={30}
                    priority
                  />

                  <div>
                    <h1 className='mail_heading'>Emergency Call</h1>
                    <p className='mail_paragraph'>+1 234 567 890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='section11_right'>

              <div className='appointment_main_head'>
                <h1 className='appointment_heading'>Make An Appointment</h1>
              </div>
              <div className='appointment_flex'>
                <div className='appointment_flex1'>
                  <div>
                    <h1 className='appointment_label'>Name</h1>
                    <input type="text" placeholder='Enter Your Name' className='appointment_input' />
                  </div>

                  <div>
                    <h1 className='appointment_label'>Subject</h1>
                    <input type="text" placeholder='Enter Name Here' className='appointment_input' />
                  </div>

                </div>
                <div className='appointment_flex1'>
                  <div>
                    <h1 className='appointment_label'>Email</h1>
                    <input type="text" placeholder='Enter Email Here' className='appointment_input' />
                  </div>

                  <div>
                    <h1 className='appointment_label'>Number</h1>
                    <input type="text" placeholder='Enter Your Number Here' className='appointment_input' />
                  </div>

                </div>
              </div>
              <div>
                <h1 className='appointment_label'>Message</h1>
              </div>
              <div>
                <input type="text" placeholder='Enter Your Message Here' className='appointment_input1' />
              </div>

              <div className='section11_btn'>
                <a href="" className='section11_btn'>  Make An Appointment</a>
              </div>

            </div>



          </div>




        </div>

      </div>

      {/* section12-- */}

      <div className='section12_main'>
        <div className='section12_left'>

          <div>
            <h1 className='section13_heading'>Our Blogs</h1>
          </div>
          <div>
            <h1 className='section13_subheading'>Connect with us for experiencing the best IT Solutions</h1>
          </div>

          <div className='section13_downsection'>

            <div className='section13_box'>
              <div>
                <Image
                  className=""
                  src="/image/blog1.png"
                  width={370}
                  height={260}
                  priority
                />
              </div>
              <div>
                <p className='section13_date'>April 26, 2023</p>
              </div>
              <div>
                <h1 className='section13_tips'>Tips to Find Best Print on Demand Business Name Idea</h1>
                <p className='section13_subtips'>Aadipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              </div>
              <div className='section13_btn'>
                <a href="">Read More</a>
              </div>

            </div>
            <div className='section13_box'>
              <div>
                <Image
                  className=""
                  src="/image/blog2.png"
                  width={370}
                  height={260}
                  priority
                />
              </div>
              <div>
                <p className='section13_date'>April 26, 2023</p>
              </div>
              <div>
                <h1 className='section13_tips'>Tips to Find Best Print on Demand Business Name Idea</h1>
                <p className='section13_subtips'>Aadipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              </div>
              <div className='section13_btn'>
                <a href="">Read More</a>
              </div>

            </div>
            <div className='section13_box'>
              <div>
                <Image
                  className=""
                  src="/image/blog3.png"
                  width={370}
                  height={260}
                  priority
                />
              </div>
              <div>
                <p className='section13_date'>April 26, 2023</p>
              </div>
              <div>
                <h1 className='section13_tips'>Tips to Find Best Print on Demand Business Name Idea</h1>
                <p className='section13_subtips'>Aadipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              </div>
              <div className='section13_btn'>
                <a href="">Read More</a>
              </div>

            </div>



          </div>


        </div>
      </div>







      {/* --section14 */}

      <div className='section14_main'>
        <div className='container_1'>


          <div className='section14_mainpart'>

            <div className='secton14_leftside'>
              <div>
                <h1 className='section14_btn'>Get connected with us!</h1>
              </div>
              <div>
                <h1 className='section14_subheading'>Looking for the Best IT Business Solutions?</h1>
              </div>
              <div className='section14_btn1'>
                <a href="">Get A Quote</a>
              </div>

            </div>
            <div className='section14_right'>
              <div>
                <h1 className='heading_subcirbe'>Subscribe Newsletter</h1>
              </div>
              <div className='news_letter'>
                <input type="text" placeholder='Enter Your Email' className='email_Set'></input>
                <a href="" className='newsletter_set'>Subscribe Newsletter</a>
              </div>

            </div>


          </div>
        </div>
      </div>

      {/* section15 */}

      <div className='section15_main'>
        <div className='container_1'>

          <div className='section15_main_part'>


            <div className='left_side'>

              <div>
                <Image
                  className=""
                  src="/image/it.png"
                  width={150}
                  height={32}
                  priority
                />
              </div>
              <div>
                <p className='section15_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
              <div className='social_links'>
                <Image
                  className="insta_background"
                  src="/image/insta.png"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  className="insta_background"
                  src="/image/yt.png"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  className="insta_background"
                  src="/image/tw.png"
                  width={20}
                  height={20}
                  priority
                />
                <Image
                  className="insta_background"
                  src="/image/in.png"
                  width={20}
                  height={20}
                  priority
                />
              </div>


            </div>

            <div className='right_side'>

              <div className='section15_subparts'>
                <div>
                  <h1 className='heading_information'>Information</h1>
                </div>
                <ul>
                  <li>Help Center</li>
                  <li>Shipping</li>
                  <li>Benefits</li>
                  <li>FAQ</li>


                </ul>
              </div>
              <div className='section15_subparts'>
                <div>
                  <h1 className='heading_information'>Useful links</h1>
                </div>
                <ul>
                  <li>My Account</li>
                  <li>Pricing</li>
                  <li>All Services</li>
                  <li>How It Work</li>


                </ul>
              </div>
              <div className='section15_subparts'>
                <div>
                  <h1 className='heading_information'>Contact us</h1>
                </div>
                <ul>
                  <li>Account</li>
                  <li>Custemer services</li>
                  <li>Accesbility</li>
                  <li>Privacy policy</li>


                </ul>
              </div>
              <div className='section15_subparts'>
                <div>
                  <h1 className='heading_getintouch'>Get in toch</h1>
                </div>
                <ul>
                  <li className='adress_set'>63154 Westheimer Rd. Santa Ana,
                    Illinois 85486</li>

                  <li className='adress_set'>  support@example.com</li>

                  <li className='adress_set'> + (406) 555-0120</li>



                </ul>
              </div>


            </div>





          </div>

        </div>
      </div>


      {/* --section16-- */}

      <div className='section16_main'>
        <div className='container_1'>

          <div>
            <h1 className='last_section_heading'>© 2000-2021, All rights reserved</h1>
          </div>

        </div>
      </div>



    </div>




  )
}

export default page