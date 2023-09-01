import React from 'react'
import { Container } from 'react-bootstrap'
import heroImage from '../../assets/images/heroSectionBackground.png'
import heroImageMain from '../../assets/images/heroSectionImage.png'
import section2Img1 from '../../assets/images/section2Img1.png'


export const HomePage = () => {
    return (
        <React.Fragment>
            <section className="homePageMain">
                <Container>
                    <div className="homePageInner">
                        <div className="homeLeft">
                            <p className='heroHeading1'>KRATOM</p>
                            <p className='heroHeading2'>FOR SALE </p>
                            <div className="divder"></div>
                            <p className='homePara'>
                                There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words.
                            </p>
                            <button className='themeBtn'>Shop now</button>
                        </div>
                        <div className="homeRight">
                            <div className="homeImageMain">
                                <img src={heroImage} alt="" className="imageBack" />
                                <img src={heroImageMain} alt="" className="imageFront" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='section2'>
                <div className="section2Absolute"></div>
                <Container>

                    <div className="section2Outer">
                        <div className="section2Main">
                            <div className="section2Left">
                                <div className="section2LeftIn">
                                    <p className='section2Leftp1'>ABOUT</p>
                                    <p className='section2Leftp2'>KRATOM GALA</p>
                                    <p className='section2Leftp3'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </p>
                                </div>
                            </div>
                            <div className="section2Right">
                                <p className='section2RightPara'>
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <button className='themeBtn'>Discover More</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>


        </React.Fragment>
    )
}
