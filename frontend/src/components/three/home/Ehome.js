import { Fragment, useEffect, useState } from "react";
import './Ehome.css';




export default function Home() {




    return (
       
                <Fragment>
                    
                    <div id="entire_page">
                        <div id="container">
                            {/* <!--START OF HEADER--> */}
                            
                            {/* <!--END OF HEADER-->
              <!--START OF PAGE BANNER--> */}
                            <div id="page_banner">
                                <div id="banner">
                                    <div id="msg_box">

                                        <p class="summer_s">Summer Sales</p>
                                        <h1 id="seventy_p">20% OFF</h1>
                                        <p class="promo_c">Avail Soon*</p>

                                        <button id="shop_now" type="submit" name="shop now" onclick="change()">Shop now <i class="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            {/* <!--END OF PAGE BANNER-->
              <!--START OF FIRST PRODUCTS GIRD--> */}
                            <div id="grid_f">
                                <div id="pro1" class="pro">
                                    <div id="msg">
                                        <h2 class="summer_pro">Quality!</h2>
                                        <span class="shop_n animate__slideOutRight"></span>

                                    </div>
                                </div>
                                <div id="pro2" class="pro">
                                    <div id="msg">
                                        <h2 class="summer_pro">Trust</h2>
                                        <span class="shop_n"></span>

                                    </div>
                                </div>
                                <div id="pro3" class="pro">
                                    <div id="msg">
                                        <h2 class="summer_pro">Satisfaction</h2>
                                        <span class="shop_n"> </span>

                                    </div>
                                </div>
                            </div>
                            {/* <!--END OF FIRST PRODUCTS GIRD-->
              <!--START OF SECOND GIRD SECTION--> */}
                            <div id="grid_s">
                                <div class="heading">
                                    <h2 class="cathegory">Quality Collections From</h2>
                                    <a href="" class="wom">Arulambika</a>
                                    <a href="" class="wom">Knit</a>
                                    <a href="" class="wom">Finishers</a>
                                </div>
                                <div class="content">
                                    <a href="" class="post">
                                        <div id="first_post" class="sale">
                                            <img src="https://cdn.dotpe.in/longtail/item_thumbnails/7477077/1maiIbnr.webp" class="pro_img" />
                                            <p class="caption">Firstcopy </p>
                                        </div>
                                    </a>
                                    <a href="" class="post">
                                        <div id="first_post" class="sale">
                                            <img src="https://cdn.dotpe.in/longtail/item_thumbnails/7477077/JSpzMuQz.webp" class="pro_img" />
                                            <p class="caption">Rounded Neck</p>
                                        </div>
                                    </a>
                                    <a href="" class="post">
                                        <div id="first_post" class="sale">
                                            <img src="https://cdn.dotpe.in/longtail/item_thumbnails/7477077/KB3poK3D.webp" class="pro_img" />
                                            <p class="caption">Bulk Tshirts</p>
                                        </div>
                                    </a>
                                    <a href="" class="post">
                                        <div id="first_post" class="sale">
                                            <img src="https://cdn.dotpe.in/longtail/item_thumbnails/7477077/JwIOvsOg.webp" class="pro_img" />
                                            <p class="caption">Lycra</p>
                                        </div>
                                    </a>
                                    <a href="" class="post">
                                        <div id="first_post" class="sale">
                                            <img src="https://cdn.dotpe.in/longtail/item_thumbnails/7477077/aD453bva.webp" class="pro_img" />
                                            <p class="caption">Combo Tshirts</p>
                                        </div>
                                    </a>

                                </div>

                                <div id="big_post">
                                    <div class="box">
                                        <div id="one_bp1" class="one_bp">
                                            <p class="price_tag"><span class="canc">₹990.00</span><br />₹590.00</p>
                                        </div>
                                        <p class="bp_cap">Variety collections<br /> <span class="shop">Shop now </span></p>
                                    </div>
                                    <div class="box">
                                        <div id="one_bp2" class="one_bp">
                                            <p class="price_tag"><span class="canc">₹990.00</span><br />₹590.00</p>
                                        </div>
                                        <p class="bp_cap">Quality collections<br /><span class="shop">Shop now </span></p>
                                    </div>
                                </div>

                            </div>

                            {/* <!--END OF SECOND GIRD SECTION-->

              <!--START OF THE NEW ARRIVALS SECTION--> */}
                            <div id="display_pro">
                                <h2 class="new_arr">New Arrivals</h2>
                                <div id="flex">
                                    <div id="first_pro" class="one">
                                        <div class="img" id="img1"><span class="sale_tag">Sale!</span><span class="like_btn"><i class="fa-regular fa-heart"></i></span></div>
                                        <p class="caption_">Quality Shirts <br /> <span class="cancelled">₹500.00</span> <span class="new">₹300.00</span></p>
                                    </div>

                                    <div id="first_pro" class="one">
                                        <div class="img" id="img2"><span class="sale_tag">Sale!</span><span class="like_btn"><i class="fa-regular fa-heart"></i></span></div>
                                        <p class="caption_">Bulk orders <br /> <span class="cancelled">₹650.00</span> <span class="new">₹400.00</span></p>
                                    </div>

                                    <div id="first_pro" class="one">
                                        <div class="img" id="img3"><span class="sale_tag">Sale!</span><span class="like_btn"><i class="fa-regular fa-heart"></i></span></div>
                                        <p class="caption_">Sportswear <br /> <span class="cancelled">₹450.00</span> <span class="new">₹350.00</span></p>
                                    </div>

                                    <div id="first_pro" class="one">
                                        <div class="img" id="img4"><span class="sale_tag">Sale!</span><span class="like_btn"><i class="fa-regular fa-heart"></i></span></div>
                                        <p class="caption_">Lycra Collections <br /> <span class="cancelled">₹700.00</span> <span class="new">₹550.00</span></p>
                                    </div>

                                    <div id="first_pro" class="one">
                                        <div class="img" id="img5"><span class="sale_tag">Sale!</span><span class="like_btn"><i class="fa-regular fa-heart"></i></span></div>
                                        <p class="caption_">Quality Tshirts <br /> <span class="cancelled">₹540.00</span> <span class="new">₹430.00</span></p>
                                    </div>
                                </div>

                                <div id="sec_main">
                                    <div class="first_box">
                                        <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" class="pro10" alt="a white outfit" />
                                    </div>
                                    <div class="sec_box">
                                        <span class="gray">PERFECT SUMMER</span>
                                        <p class="head">Summer Days Look</p>
                                        <div id="white" class="one">
                                            <div class="img" id="img6"><span class="sale_tag2">Sale!</span><span class="like_btn"><i class="fa-regular fa-heart"></i></span></div>
                                            <p class="caption">Textile dress<br /> <span class="cancelled">₹540.00</span> <span class="new">₹430.00</span></p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* <!--END OF THE NEW ARRIVALS SECTION-->

                <!--START OF BLOG POST SECTION--> */}
                            <section id="blog">
                                <div id="blog_posts">
                                    <div class="blog_head">
                                        <span class="gray">Our Collection</span>
                                        <p class="head">Quality!Trust!Satisfaction!</p>
                                    </div>

                                    <div class="blog_post_box">
                                        <div class="blog">
                                            <img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="blogpost1 blogimg" alt="clothes on hangers" />
                                            <p class="blogp_decrip">
                                                <span class="date">Fashion</span>
                                                <br />
                                                Choose from variety of collections crafted by us.
                                            </p>
                                        </div>
                                        <div class="blog">
                                            <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="blogpost2 blogimg" alt="Orgaics for skincare" />
                                            <p class="blogp_decrip">
                                                <span class="date">Fashion</span>
                                                <br />
                                                Best products to suit your fashion needs.
                                            </p>
                                        </div>
                                        <div class="blog">
                                            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="blogpost3 blogimg" alt="shoe" />
                                            <p class="blogp_decrip">
                                                <span class="date">Variety</span>
                                                <br />
                                               Add variety to your closet from our collections..
                                            </p>
                                        </div>
                                    </div>
                                   

                                </div>
                            </section>
                            {/* <!--END OF BLOG POST SECTION-->
                  <!--START OF STORE FEATURES--> */}
                            <section id="features">
                                <div id="feat">
                                    <div class="overall">
                                        <div class="icon"><i class="fa-solid fa-truck"></i></div>
                                        <div class="info">
                                            <span class="uppercase">FREE SHIPPING</span><br />
                                            <span class="light">From all orders over ₹1000</span>
                                        </div>
                                    </div>

                                    <div class="overall">
                                        <div class="icon"><i class="fa-solid fa-retweet"></i></div>
                                        <div class="info">
                                            <span class="uppercase">FREE RETURNS*</span><br />
                                            <span class="light">Return money within 30 days</span>
                                        </div>
                                    </div>

                                    <div class="overall">
                                        <div class="icon"><i class="fa-solid fa-lock"></i></div>
                                        <div class="info">
                                            <span class="uppercase">SECURE SHOPPING</span><br />
                                            <span class="light">You're in safe hands</span>
                                        </div>
                                    </div>

                                    <div class="overall">
                                        <div class="icon"><i class="fa-solid fa-tag"></i></div>
                                        <div class="info">
                                            <span class="uppercase">OVER 100 STYLES</span><br />
                                            <span class="light">We have everything you need</span>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            {/* <!--END OF STORE FEATURES-->

                  <!--FOOTER SECTION AREA--> */}
                            <footer id="footer_box">
                                <section id="footer_content">
                                    <div class="f_foot">

                                        <h2 class="want">Want style Ideas and Treats?</h2>
                                        <div class="inputs">
                                            <input type="email" class="form_input" id="email" placeholder="Enter Email *" />
                                            <input type="submit" class="form_input" id="submit" value="Subscribe" />
                                        </div>
                                    </div>
                                    <div class="s_foot">
                                        <div class="img_links">
                                           
                                            
                                        </div>
                                        <div class="space">
                                            <div class="other_links">
                                                <span class="bold">SUPPORT</span><br />
                                                <a href="" class="block_links">Contact us</a>
                                                <a href="" class="block_links">FAQs</a>
                                                <a href="" class="block_links">Size Guide</a>
                                                <a href="" class="block_links">Shipping & Returns</a>
                                            </div>

                                            <div class="other_links">
                                                <span class="bold">SHOP</span><br />
                                                <a href="" class="block_links">Lycra Collection</a>
                                                <a href="" class="block_links">Tshirt collection</a>
                                                <a href="" class="block_links">Sweatshirt collection</a>
                                                
                                            </div>

                                           
                                            <div class="other_links">
                                                <span class="bold">CONTACT</span><br/>
                                                    <a href="" class="block_links">Jagadeesan</a>                                   
                                                <a href="" class="block_links">6369890623</a>
                                                <a href="" class="block_links">arulambika2014@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div id="extras">
                                        <p class="copy">&copy; 2023 All rights reserved. Designed by Kamal.</p>
                                        <div class="pay">
                                           
                                            <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/visa.svg" class="payments" />
                                            
                                        </div>
                                    </div>
                                </section>
                            </footer>

                        </div>
                    </div>



                </Fragment>
            
    )
}