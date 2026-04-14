import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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







        </div>
    )
}

export default page