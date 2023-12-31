import React from "react";
import { Container } from "react-bootstrap";
import heroImage from "../assets/images/heroSectionBackground.png";
import heroImageMain from "../assets/images/heroSectionImage.png";
import section2Img1 from "../assets/images/section2Img1.png";
import { CarouselComponent } from "../component/carouselComponent";
import { CarouselItem } from "../component/carouselItem";
import deliveryImg from '../assets/images/delivery.png'
import supportImg from '../assets/images/support.png'
import Guarantee from '../assets/images/guarantee.png'
import fastDeliveryImg from '../assets/images/fastDelivery.png'
import itemImg1 from '../assets/images/card-img-1.png'
import itemImg2 from '../assets/images/card-img-2.png'
import itemImg3 from '../assets/images/card-img-3.png'
import itemImg4 from '../assets/images/card-img-4.png'
import itemImg5 from '../assets/images/card-img-5.png'


export const HomePage = () => {



    const productData = [
        { itemImg: itemImg1, itemTitle: "Lorem Ipsem is Simply Dummy Text", itemRating: "src/assets/images/rating.png", discountedPrice: "$88.00", productPrice: "$67.00", },
        { itemImg: itemImg2, itemTitle: "Lorem Ipsem is Simply Dummy Text", itemRating: "src/assets/images/rating.png", discountedPrice: "$88.00", productPrice: "$67.00", },
        { itemImg: itemImg3, itemTitle: "Lorem Ipsem is Simply Dummy Text", itemRating: "src/assets/images/rating.png", discountedPrice: "$88.00", productPrice: "$67.00", },
        { itemImg: itemImg4, itemTitle: "Lorem Ipsem is Simply Dummy Text", itemRating: "src/assets/images/rating.png", discountedPrice: "$88.00", productPrice: "$67.00", },
        { itemImg: itemImg5, itemTitle: "Lorem Ipsem is Simply Dummy Text", itemRating: "src/assets/images/rating.png", discountedPrice: "$88.00", productPrice: "$67.00", },
        { itemImg: itemImg3, itemTitle: "Lorem Ipsem is Simply Dummy Text", itemRating: "src/assets/images/rating.png", discountedPrice: "$88.00", productPrice: "$67.00", },
        { itemImg: itemImg4, itemTitle: "Lorem Ipsem is Simply Dummy Text", itemRating: "src/assets/images/rating.png", discountedPrice: "$88.00", productPrice: "$67.00", },
        
    ]

    return (
        <React.Fragment>
            <section className="homePageMain">
                <Container>
                    <div className="homePageInner">
                        <div className="homeLeft">
                            <p className="heroHeading1">KRATOM</p>
                            <p className="heroHeading2">FOR SALE </p>
                            <div className="divder"></div>
                            <p className="homePara">
                                There are many variations of passages of Lorem
                                Ipsum <br /> available, but the majority have
                                suffered alteration in some <br /> form, by
                                injected humour, or randomised words.
                            </p>
                            <button className="themeBtn">Shop now</button>
                        </div>
                        <div className="homeRight">
                            <div className="homeImageMain">
                                <img
                                    src={heroImage}
                                    alt=""
                                    className="imageBack"
                                />
                                <img
                                    src={heroImageMain}
                                    alt=""
                                    className="imageFront"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="section2">
                <div className="section2Absolute"></div>
                <Container>
                    <div className="section2Outer">
                        <div className="section2Main">
                            <div className="section2Left">
                                <div className="section2LeftIn">
                                    <p className="section2Leftp1">ABOUT</p>
                                    <p className="section2Leftp2">
                                        KRATOM GALA
                                    </p>
                                    <p className="section2Leftp3">
                                        Lorem Ipsum is simply dummy text of the{" "}
                                        <br /> printing and typesetting
                                        industry.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="section2Right">
                                <p className="section2RightPara">
                                    Lorem Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but
                                    also the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                </p>
                                <button className="themeBtn">
                                    Discover More
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="shopSliderSection section3">
                <Container>

                    <div className="section__text">
                        <h4>
                            Shop by Kratom <span>Capsule</span>
                        </h4>
                    </div>
                    <div className="shopSliderMain">
                        <div className="container">
                            <div className="sliderContainer">
                                <CarouselComponent>
                                    {productData.map((item, keyId) => (
                                        <CarouselItem key={keyId} {...item} />
                                    ))}
                                </CarouselComponent>
                            </div>
                            <div className="sliderButton text-center">

                                <a className="themeBtn">ORDER KRATOM NOW</a>
                            </div>
                        </div>
                    </div>
                </Container>

            </section>

            <section className="featureSection">
                <Container>
                    <div className="featureMain">
                        <div className="featureSectionInner">


                            <div className="section__text">
                                <h4>Why Kratom</h4>
                            </div>
                            <div className="utilPanels">
                                <div className="featureCard">
                                    <div className="img__wrap">
                                        <img
                                            src={deliveryImg}
                                            alt=""
                                        />
                                    </div>
                                    <h6>Free Delivery</h6>
                                    <p>
                                        Orders over $100 delivered free via USPS Priority Mail
                                    </p>
                                </div>

                                <div className="featureCard">
                                    <div className="img__wrap">
                                        <img
                                            src={fastDeliveryImg}
                                            alt=""
                                        />
                                    </div>
                                    <h6>Fast Delivery</h6>
                                    <p>
                                        Pay before 1 PM PST, order goes out same biz day.
                                    </p>
                                </div>
                                <div className="featureCard">
                                    <div className="img__wrap">
                                        <img
                                            src={supportImg}
                                            alt=""
                                        />
                                    </div>
                                    <h6>The Help</h6>
                                    <p>
                                        Phone & Email support. Your concierge service.
                                    </p>
                                </div>
                                <div className="featureCard">
                                    <div className="img__wrap">
                                        <img
                                            src={Guarantee}
                                            alt=""
                                        />
                                    </div>
                                    <h6>More Then 9800 Satisfied Reviews</h6>
                                    <p>
                                        Phone & Email support. Your concierge service.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
};
