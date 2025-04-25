import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";

import axios from "axios";
import baseUrl from "../../navigation/base";

// reactstrap components
import {
  UncontrolledCollapse,
  // DropdownMenu,
  // DropdownItem,
  // DropdownToggle,
  // UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

const DemoNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  // const [collapseOpen, setCollapseOpen] = useState(false);

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  //api
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem();
  },[]);

  function getItem() {
    axios.get(`${baseUrl}/contact`).then(function(response) {
      setItem(response.data);
    });
  }
   
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  },[]);

  function getItems() {
    axios.get(`${baseUrl}/social`).then(function(response) {   
      setItems(response.data);
    });
  }

  // const [ssrItem, setSsrItem] = useState([]);
  // useEffect(() => {
  //   getSsrItem();
  // },[]);

  // function getSsrItem() {
  //   axios.get(`${baseUrl}/pagepdf?type=SSR`).then(function(response) {
  //     setSsrItem(response.data);
  //     console.log("ssr data",response.data)
  //   });
  // }

  return (
    <>
      <header className="header-global">
        <div className="topbar py-1"
            expand="lg"
          >
          <Container fluid>
            <Row>
              <Col lg="8" md="8" sm="8" xs="8" className="text-white">
              {item[0]?.email} {item[0]?.phone? <>|</>:null} {item[0]?.phone}
              </Col>
              <Col lg="4" md="4" sm="4" xs="4" align="right">
                <a href={`${items[0]?.facebook}`} target='_blank' rel="noreferrer" className="text-white">
                  <i className="fa fa-facebook-square mr-2" />
                </a>
                <a href={items[0]?.twitter} target='_blank' rel="noreferrer" className="text-white">
                  <i className="fa fa-twitter-square mr-2" />
                </a>
                <a href={items[0]?.instagram} target='_blank' rel="noreferrer" className="text-white">
                  <i className="fa fa-instagram mr-2" />
                </a>
                <a href={items[0]?.youtube} target='_blank' rel="noreferrer" className="text-white">
                  <i className="fa fa-youtube-square mr-2" />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="logoarea"
          expand="lg"
          >
          <Container>
            <Row>
              <Col lg="4" className="mt-2">
                <Link to="/">
                  <img alt={items[0]?.companyname} src={require("assets/img/brand/logo.png")} />
                </Link>
              </Col>
              <Col lg="4"></Col>
              <Col lg="4" className="d-flex align-items-center">
                <div className="taddress fs-3 d-flex align-items-center">
                  <div>
                    {item[0]?.address}
                  </div>
                  <div>
                  <a
                    className="ml-1"
                    style={{ color: "white" }}
                    href="https://maps.app.goo.gl/C21R6jEsb8g3V1R29"
                    target="_blank"
                    rel="noreferrer"
                  >
                      <i className="fa fa-street-view mr-2 fs-5" /> 
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container fluid>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img alt={items[0]?.companyname} src={require("assets/img/brand/logo.png")} />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="8">
                    <Link to="/">
                      <img alt="Mahila College Khagaul" src={require("assets/img/brand/logo2.png")} />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="4">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/"
                  >
                    <i className="fa fa-home mr-1" /> Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/about-us"
                  >
                    <i className="fa fa-university mr-1" /> About Us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/schools"
                  >
                    <i className="fa fa-graduation-cap mr-1" /> Schools
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/student-services"
                  >
                    <i className="fa fa-users mr-1" /> Student Services
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/admission"
                  >
                    <i className="fa fa-address-card mr-1" /> Admission
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/examination"
                  >
                    <i className="fa fa-address-card mr-1" /> Examination
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/media"
                  >
                    <i className="fa fa-image mr-1" /> Media
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/contact-us"
                  >
                    <i className="fa fa-address-card mr-1" /> Contact Us
                  </Link>
                </NavItem>
                {/* <NavItem>
                  <Link
                    className="nav-link"
                    to="/iqac/fourth"
                  >
                    AQAR
                  </Link>
                </NavItem> */}
                {/* <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <span className="nav-link-inner--text">About MC</span>
                  </DropdownToggle>
                  <DropdownMenu className="singdropdwonmenu">
                    <DropdownItem to="/about-the-college" tag={Link}>
                    About The College
                    </DropdownItem>
                    <DropdownItem to="/principal-message" tag={Link}>
                    Principal Message
                    </DropdownItem>
                    <DropdownItem to="/vision-mission" tag={Link}> 
                    Vision & Mission
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <span className="nav-link-inner--text">Acedemics</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/regular-course" tag={Link}>
                      Regular Course
                    </DropdownItem>
                    <UncontrolledDropdown nav className="controlmenu">
                      <DropdownToggle nav>
                        <span className="nav-link-inner--text">Vocational</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem to="/blis" tag={Link}>
                          BLIS
                        </DropdownItem>
                        <DropdownItem to="/bba" tag={Link}>
                          BBA
                        </DropdownItem>
                        <DropdownItem to="/bbm" tag={Link}>
                          BBM
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/tender"
                  >
                    Tender
                  </Link>
                </NavItem>
                <NavItem>
                  <a className="nav-link" href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvcyFBaWh1dFR0bjlycWdhNndIRXUxTWx0aFRCcGM%5FZT01cVRIMkk&id=A0BAF6673BB56E28%21107&cid=A0BAF6673BB56E28" target="_blank" rel="noopener noreferrer">
                    E-Library
                  </a>
                </NavItem> 
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <span className="nav-link-inner--text font-weight-bold">Gallery</span>
                  </DropdownToggle>
                  <DropdownMenu className="singdropdwonmenu">
                    <DropdownItem to="/photo-gallery" tag={Link}>
                    Photo Gallery
                    </DropdownItem>
                    <DropdownItem to="/news-gallery" tag={Link}>
                    News Gallery
                    </DropdownItem>
                    <DropdownItem to="/news-letter" tag={Link}>
                    News Letter
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <span className="nav-link-inner--text font-weight-bold">Cells and Committees</span>
                  </DropdownToggle>
                  <DropdownMenu className="singdropdwonmenu">
                    <DropdownItem to="/iqac/iqac" tag={Link}>
                      IQAC
                    </DropdownItem>
                    <DropdownItem to="/iqac/cells" tag={Link}>
                      CELLS
                    </DropdownItem>
                    <DropdownItem to="/iqac/committee" tag={Link}>
                      Committee
                    </DropdownItem>
                    <DropdownItem to="/iqac/nss" tag={Link}>
                      NSS
                    </DropdownItem>
                    <DropdownItem to="/iqac/ncc" tag={Link}>
                      NCC
                    </DropdownItem>
                    <DropdownItem to="/iqac/feedback" tag={Link}>
                      Feedback
                    </DropdownItem>
                    <DropdownItem to="/iqac/pressrelease" tag={Link}>
                      PRESS RELEASE
                    </DropdownItem>
                    <DropdownItem to="/iqac/mou" tag={Link}>
                      MOU
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default DemoNavbar;