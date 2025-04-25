import React from "react";

// reactstrap components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { Container, Col, Row } from "reactstrap";
import PageBanner from "components/section/PageBanner";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

function StudentServices (props) {
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
              <Col lg="3" className="p-1">
                <div className="abourCard">
                  <Link to="/admission">
                    <article>
                      <div className="post-img">
                        <img src="./uploads/admissions.jpg" alt="50" className="img-fluid" title="Admission" />
                      </div>
                      <div className="col">
                        <h2 className="title">Admission</h2>
                      </div>
                    </article>
                  </Link>
                </div>
              </Col>
              <Col lg="3" className="p-1">
                <div className="abourCard">
                  <Link to="/academic-calender">
                    <article>
                      <div className="post-img">
                        <img src="./uploads/aCalender.jpg" alt="Academic Calendar" className="img-fluid" title="Academic Calendar" />
                      </div>
                      <div className="col">
                        <h2 className="title">Academic Calendar</h2>
                      </div>
                    </article>
                  </Link>
                </div>
              </Col>
              <Col lg="3" className="p-1">
                <div className="abourCard">
                  <Link to="/downloads">
                    <article>
                      <div className="post-img">
                        <img src="./uploads/downloads.jpg" alt="Downloads" className="img-fluid" title="Downloads" />
                      </div>
                      <div className="col">
                        <h2 className="title">Downloads</h2>
                      </div>
                    </article>
                  </Link>
                </div>
              </Col>
              <Col lg="3" className="p-1">
                <div className="abourCard">
                  <Link to="/examination">
                    <article>
                      <div className="post-img">
                        <img src="./uploads/exam.jpg" alt="Examination" className="img-fluid" title="Examination" />
                      </div>
                      <div className="col">
                        <h2 className="title">Examination</h2>
                      </div>
                    </article>
                  </Link>
                </div>
              </Col>
              <Col lg="3" className="p-1">
                <div className="abourCard">
                  <Link to="/results">
                    <article>
                      <div className="post-img">
                        <img src="./uploads/results.jpg" alt="Results" className="img-fluid" title="Results" />
                      </div>
                      <div className="col">
                        <h2 className="title">Results</h2>
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

export default StudentServices;