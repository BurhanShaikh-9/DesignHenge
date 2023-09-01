import React, { useState } from 'react'
import { Container, Button, Offcanvas, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsSearch, BsBag } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import logoImg from '../assets/images/logo.png'
import {RxHamburgerMenu} from 'react-icons/rx'

export const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <header>
                <div className="desktopTopHeader">
                    <p>FREE SHIPPING when you order $75 or more!</p>
                </div>
                <Container>
                    <div className="desktopHeader">
                        <div className="upperHeader">

                            <div className="logo">
                                <img src={logoImg} alt="" />
                            </div>
                            <div className="rightMenu">
                                <div className="searchElement">
                                    <input type="text" placeholder='Search Products' name="" id="" />
                                    <button> <BsSearch /> Search</button>
                                </div>
                                <div className="cartElement">
                                    <div className="cartElementInner">
                                        <BsBag />
                                        <div className="itemCounterElemnt">02</div>
                                    </div>
                                </div>
                                <div className="userElement">

                                    <BiUser />
                                </div>
                            </div>
                        </div>
                        <div className="lowerHeader">
                            <nav>
                                <ul>
                                    <li>Kratom Powders</li>
                                    <li>Kratom Capsules</li>
                                    <li>Liquid Kratom</li>
                                    <li>Kratom Extracts</li>
                                    <li>Brands</li>
                                </ul>
                                <ul>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Blog</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="mobileHeader">
                        <div className="mobHeaderMain">
                            <div className="logoLeftMain">
                                <img src={logoImg} alt="" />
                            </div>
                            <div className="logoRightMain">
                                <button className='toggleOffcanvas' variant="primary" onClick={handleShow}>
                                    <RxHamburgerMenu/>
                                </button>
                                <Offcanvas show={show} onHide={handleClose}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title> <img src={logoImg} alt="" /> </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="mobileNavBar">
                                            <Nav.Link href="#action1">Kratom Powders</Nav.Link>
                                            <Nav.Link href="#action2">Kratom Capsules</Nav.Link>
                                            <Nav.Link href="#action2">Liquid Kratom</Nav.Link>
                                            <Nav.Link href="#action2">Kratom Extracts</Nav.Link>
                                            <Nav.Link href="#action2">Brands</Nav.Link>
                                            <Nav.Link href="#action2">About us</Nav.Link>
                                            <Nav.Link href="#action2">Contact us</Nav.Link>
                                            <Nav.Link href="#action2">Blog</Nav.Link>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </React.Fragment>
    )
}
