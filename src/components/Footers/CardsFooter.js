import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../navigation/base";
import Logo from "assets/img/brand/logo.png"
import Content from "components/section/Content.js";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom";

function CardsFooter() {

  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem();
  }, []);

  function getItem() {
    axios.get(`${baseUrl}/contact`).then(function(response) {
      setItem(response.data);
    });
  }
   
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  function getItems() {
    axios.get(`${baseUrl}/social`).then(function(response) {
      setItems(response.data);
    });
  }

  return (
    <>
      <footer className="footer has-cards">
        <Container>
          <Row className="row-grid mt-5 mb-5">
            <Col lg="8">
              <Row className="row-grid">
                <Col lg="6">
                  <img src={Logo} alt={items[0]?.companyname} />
                  <div style={{marginTop: 10}}>
                    <Content sentFrom="resultFtrabout" />
                  </div>
                </Col>
                <Col lg="3">
                  <h5 className="font-weight-normal mb-2">
                    QUICK LINKS
                  </h5>
                  <ul className="footermenu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/schools">Schools</Link></li>
                    <li><Link to="/admission">Admission</Link></li>
                    <li><Link to="/examination">Examination</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                  </ul>
                </Col>
                <Col lg="3">
                  <h5 className="font-weight-normal mb-2">
                    &nbsp;
                  </h5>
                  <ul className="footermenu">
                  <li><Link to="/hiperlink-policy">Hyperlink Policy</Link></li>
                    <li><Link to="/downloads">Downloads</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col className="btn-wrapper" lg="4">
              <h5 className="font-weight-normal mb-2">
                CONTACT DETAILS
              </h5>
              {Array.isArray(item) && item.map((data, key) =>
              <ul className="footermenu mb-2" key={key}>
                {data.address? (
                  <li>
                    <div className="address">
                      <i className="fa fa-map-marker" /> {data.address}
                    </div>
                  </li>
                ) :null}
                
                {data.phone ? (
                  <li>
                    <div className="address">
                      <i className="fa fa-phone" />{" "}
                      <a target="_blank" rel="noreferrer" href={`tel:${data.phone}`}>
                        {data.phone}
                      </a>
                    </div>
                  </li>
                ) : null}

                {data.email ? (
                  <li>
                    <div className="address">
                      <i className="fa fa-envelope" />{" "}
                      <a target="_blank" rel="noreferrer" href={`mailto:${data.email}`}>
                        {data.email}
                      </a>
                    </div>
                  </li>
                ) : null}
              </ul>
              )}
              {Array.isArray(items) &&items.map((data, key) =>
              <div key={key}>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href={data.facebook}
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href={data.twitter}
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href={data.instagram}
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="youtube"
                  href={data.youtube}
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-youtube" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
              </div>
              )}
            </Col>
          </Row>
        </Container>
        <div className="footerBottom">
          <Container>
            <Row className="align-items-center justify-content-start">
              <Col md="6">
                <div className="copyright">
                  Copyright © 2023 <a href="/" rel="noreferrer">{items[0]?.companyname}</a>
                </div>
              </Col>
              <Col md="6">
                <div className="copyright text-right">
                  Developed & Maintained by 
                  <a className="ml-1" href="https://danta.co.in/"
                    target="_blank" rel="noreferrer"
                  >
                    Danta Infotech Pvt. Ltd.
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default CardsFooter;