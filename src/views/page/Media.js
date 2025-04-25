import React from "react";

// reactstrap components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { Container, Col, Row } from "reactstrap";
import PageBanner from "components/section/PageBanner";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

function Media (props) {
  const {banner}=props

  return (
    <>
      <DemoNavbar />
        <Helmet>
          <title>Welcome To Nalanda Open University</title>
          <meta name="description" content="Nalanda Open University, Nalanda University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
          <meta name="Keywords" content="Nalanda University, Nalanda Open University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
        </Helmet>
        <PageBanner sentFrom={banner} />
        <main className="section-main">
          <Container>
            <Row>
              <Col lg="4" className="p-1">
                <div className="abourCard">
                  <Link to="/photo-gallery">
                    <article>
                      <div className="post-img">
                        <img src="./uploads/Photo Gallery.jpg" alt="50" className="img-fluid" title="Admission" />
                      </div>
                      <div className="col">
                        <h2 className="title">Photo Gallery</h2>
                      </div>
                    </article>
                  </Link>
                </div>
              </Col>
              <Col lg="4" className="p-1">
                <div className="abourCard">
                  <Link to="/news-gallery">
                    <article>
                      <div className="post-img">
                        <img src="./uploads/News Gallery.jpg" alt="Academic Calendar" className="img-fluid" title="Academic Calendar" />
                      </div>
                      <div className="col">
                        <h2 className="title">News Gallery</h2>
                      </div>
                    </article>
                  </Link>
                </div>
              </Col>
              <Col lg="4" className="p-1">
                <div className="abourCard">
                  <Link to="/news-letter">
                    <article>
                      <div className="post-img">
                        <img src="./uploads/News Letter.jpg" alt="Downloads" className="img-fluid" title="Downloads" />
                      </div>
                      <div className="col">
                        <h2 className="title">News Letter</h2>
                      </div>
                    </article>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      <CardsFooter />
    </>
  );
}

export default Media;