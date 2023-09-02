import React from "react";
import logoImg from '../assets/images/logo.png'
import westernUnion from '../assets/images/westernUnion.png'
import worldPay from '../assets/images/worldPay.png'
import payPal from '../assets/images/payPal.png'
import visa from '../assets/images/Visa.png'
import masterCard from '../assets/images/masterCard.png'
import discoverr from '../assets/images/discover.png'


export function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="container">
                    <div className="top__footer">
                        <div className="util__panel">
                            <div className="footer__text">
                                <div className="img__wrap">
                                    <img
                                        src={logoImg}
                                        alt=""
                                    />
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi quos molestiae
                                    modi temporibus aut ut deserunt assumenda
                                    quis expedita eveniet.
                                </p>
                                <h6 className="footer__heading">Follow Us</h6>
                                <div className="flex social__icons">
                                    <div>
                                        <i className="ri-facebook-circle-fill"></i>
                                    </div>
                                    <div>
                                        <i className="ri-twitter-fill"></i>
                                    </div>
                                    <div>
                                        <i className="ri-linkedin-fill"></i>
                                    </div>
                                    <div>
                                        <i className="ri-twitter-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="footer__links">
                                <h6 className="footer__heading">Quick Links</h6>
                                <div className="util__panel">
                                    <ul className="footer__list">
                                        <li>Waranty Policy</li>
                                        <li>Refunds</li>
                                        <li>Terms & Condition</li>
                                        <li>Purchase Order Policy</li>
                                        <li>Sitemap</li>
                                    </ul>
                                    <ul className="footer__list">
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Kratom</li>
                                        <li>Extracts</li>
                                        <li>Brand</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__address">
                                <h6 className="footer__heading">Quick Links</h6>
                                <div>
                                    <i className="ri-phone-fill"></i>
                                    <span>123- 365-7890</span>
                                </div>
                                <div>
                                    <i className="ri-mail-fill"></i>
                                    <span>support@youdomain.com</span>
                                </div>
                                <div>
                                    <i className="ri-map-pin-fill"></i>
                                    <span>locaion CA 9857</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middle__footer">
                        <h6 className="footer__heading">Disclaimer</h6>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Repellat recusandae neque magnam accusantium a
                            animi ratione nisi labore hic obcaecati, provident
                            dicta odio tenetur ut ab adipisci rerum vel porro.
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Repellat recusandae neque magnam accusantium a
                            animi ratione nisi labore hic obcaecati, provident
                            dicta odio tenetur ut ab adipisci rerum vel porro.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora, alias.
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora, alias.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Animi accusantium est architecto praesentium
                            dolorum inventore fuga corporis, unde iure veniam
                            dolores blanditiis quia mollitia explicabo expedita
                            deleniti voluptate consequatur voluptas!
                        </p>
                    </div>
                    <div className="bottom__footer">
                        <div className="util__panel">
                            <p className="copyright">
                                Copyright @ 2023 All Rights Reserved
                            </p>
                            <div className="footerPayment">
                               <span>Payment Method</span>
                               <div className="imgWrapInner">
                                    <img src={worldPay} alt="" />
                                    <img src={westernUnion} alt="" />
                                    <img src={visa} alt="" />
                                    <img src={discoverr} alt="" />
                                    <img src={payPal} alt="" />
                                    <img src={masterCard} alt="" />
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}
