"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="section1_main">
        <div className="container_haider">
          <div className="section1_wrapper">
            <div className="haider_top">
              <div className="haider_top_left">
                <div className="img_1flx">
                  <label>
                    <Image
                      src="/image/watch.png"
                      alt=""
                      width={16}
                      height={16}
                      className="logo"
                    />
                  </label>
                  Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                </div>
                <div className="img_1flx">
                  <label>
                    <Image
                      className="logo"
                      src="/image/watch.png"
                      width={16}
                      height={16}
                      priority
                      alt="Watch logo"
                    />
                  </label>
                  Phone +123 456 7890
                </div>
                <div className="img_1flx">
                  <label>
                    {" "}
                    <Image
                      className="logo"
                      src="/image/mail.png"
                      width={20}
                      height={15}
                      priority
                      alt=""
                    />
                  </label>
                  Email : itinfo@example.com
                </div>
              </div>
              <div className="img_1flx">
                <label>
                  {" "}
                  <Image
                    className="logo"
                    src="/image/location.png"
                    width={12}
                    height={16}
                    priority
                    alt=""
                  />
                </label>
                Location : Thornridge Cir. Shiloh, Hawaii
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="section2_main">
        <div className="container">
          <div className="section2_wrapper">
            <div className="logo_img">
              <Image
                className="logo"
                src="/image/logo.png"
                width={47}
                height={44}
                priority
                alt=""
              />
              <label className="logo_label">IT Solution</label>
            </div>
            <div className="nav_menu">
              <ul className="nav_ul">
                <li className="nav_li">
                  <Link href="/home">Home</Link>
                </li>
                <li className="nav_li">
                  <Link href="/about">About</Link>
                </li>
                <li className="nav_li">
                  <Link href="/service">Service</Link>
                </li>
                <li className="nav_li">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="nav_li">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="nav_li">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="get_btn">
              <Link href="/get">Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Open Modal */}
      <div className="qutote_modal_background">
        <div className="quote_btn">
          <button className="btn" onClick={() => setShowModal(true)}>
            Get a Quote (Modal)
          </button>
        </div>
      </div>
      {showModal && (
        <div className="modal_overlay">
          <div className="modal_content">
            <Image
              src="/image/white.png"
              alt=""
              width={360}
              height={160}
              className="quote_vslogo"
            />
            <h2>Request a Quote</h2>
            <form className="qutoted_form_fiiling">
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  className="quote_fill"
                />
                <input
                  type="Date"
                  placeholder="Company Name"
                  required
                  className="quote_fill"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="quote_fill"
                />
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  required
                  className="quote_fill"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Coaching Phone N0..."
                  required
                  className="quote_fill"
                />
                <input
                  type="text"
                  placeholder="Address"
                  required
                  className="quote_fill"
                />
                <input
                  type="text"
                  placeholder="Quoted By"
                  required
                  className="quote_fill"
                />
                <input
                  type="text"
                  placeholder="Website"
                  required
                  className="quote_fill"
                />
              </div>
            </form>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>123-45-678</td>
              </tr>
            </table>
            <textarea
              placeholder="Your Requirements"
              className="text_requi"
              required
            ></textarea>
            <button className="submit_quote">Submit</button>
            <button className="close_btn" onClick={() => setShowModal(false)}>
              Close
            </button>{" "}
          </div>
        </div>
      )}

      <div className="section15_main">
        <div className="container_1">
          <div className="section15_main_part">
            <div className="left_side">
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
                <p className="section15_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
              <div className="social_links">
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

            <div className="right_side">
              <div className="section15_subparts">
                <div>
                  <h1 className="heading_information">Information</h1>
                </div>
                <ul>
                  <li>Help Center</li>
                  <li>Shipping</li>
                  <li>Benefits</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="section15_subparts">
                <div>
                  <h1 className="heading_information">Useful links</h1>
                </div>
                <ul>
                  <li>My Account</li>
                  <li>Pricing</li>
                  <li>All Services</li>
                  <li>How It Work</li>
                </ul>
              </div>
              <div className="section15_subparts">
                <div>
                  <h1 className="heading_information">Contact us</h1>
                </div>
                <ul>
                  <li>Account</li>
                  <li>Custemer services</li>
                  <li>Accesbility</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
              <div className="section15_subparts">
                <div>
                  <h1 className="heading_getintouch">Get in toch</h1>
                </div>
                <ul>
                  <li className="adress_set">
                    63154 Westheimer Rd. Santa Ana, Illinois 85486
                  </li>

                  <li className="adress_set"> support@example.com</li>

                  <li className="adress_set"> + (406) 555-0120</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section16_main">
        <div className="container_1">
          <div>
            <h1 className="last_section_heading">
              © 2000-2021, All rights reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
