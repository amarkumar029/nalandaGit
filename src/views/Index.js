import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar";
import CardsFooter from "components/Footers/CardsFooter";

// index page sections
import Hero from "../components/section/Hero";
import HomeContent from "components/section/HomeContent";
import Chancellor from "components/section/Chancellor";
import { Grid } from '@mui/material';
import { gridSpacing } from '../store/constant';
import Notice from "components/section/Notice";
import SocialMedia from "components/section/SocialMedia";
// import SchoolHomeCard from "components/section/SchoolHomeCard";
import Announcement from "components/section/Announcement";
// import baseUrl from "../navigation/base";
// import axios from "axios";
// import loadings from "../assets/img/loader.gif";
import { Helmet } from 'react-helmet';

export default function Index() {
  const mainRef = useRef(null);
  // const [principalData, setPrincipalData] = useState(null);
  // const [courseData, setCourseData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // // Scroll to top on component mount
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, []);

  // // Fetch data for Principal and Course sections
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const principalResponse = await axios.get(`${baseUrl}/chancellor?type=Principal`);
  //       const courseResponse = await axios.get(`${baseUrl}/chancellor?type=Course`);
  //       setPrincipalData(principalResponse.data[0]); // Assume the first item is relevant
  //       setCourseData(courseResponse.data[0]); // Assume the first item is relevant
  //     } catch (error) {
  //       // console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // if (loading) {
  //   // Display a loading indicator while fetching data
  //   return (
  //     <div className="text-center">
  //       <img width="120" src={loadings} alt="Loading..." />
  //     </div>
  //   );
  // }

  return (
    <>
      <DemoNavbar />
      <main ref={mainRef}>
        <Helmet>
          <title>Welcome To Nalanda Open University</title>
          <meta name="description" content="Nalanda Open University, Nalanda University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
          <meta name="Keywords" content="Nalanda University, Nalanda Open University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
        </Helmet>
        {/* Hero Section */}
        <Hero />
        <Announcement />

        {/* Principal Message Section */}
        {/* <section className="section mt-5">
          <Container>
            <h4 className="heading mb-1">Principal Message</h4>
            <div className="title-border"></div>
            <Row>
              <Col lg="5">
                <img
                  src={`uploads/${principalData?.image || "default-image.jpg"}`}
                  alt={principalData?.title || "Principal Message"}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </Col>
              <Col lg="7">
                <Content sentFrom="resultpMessage" />
              </Col>
            </Row>
          </Container>
        </section> */}

        {/* About Section */}
        <section className="section mt-5">
          <Container>
            <Row>
              <Col lg="12">
                <h4 className="heading mb-1">
                  <span>About Nalanda Open University</span>
                </h4>
                <div className="title-border"></div>
                <HomeContent sentFrom="resultAbout" />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Chancellor Section */}
        <section className="section bg-light-gray pt-5">
          <Container>
            <Chancellor />
          </Container>
        </section>

        {/* Schools Slider Section */}
        {/* <section className="section pt-5">
          <Container fluid>
            <div className="text-center academic">
              <h4 className="heading mb-1"><span>Schools of Studies</span></h4>
              <div className="title-border"></div>
            </div>
            <SchoolHomeCard sentFrom="resultSchools" />
          </Container>
        </section> */}

        {/* notice Section */}
        <section className="section pt-5">
          <Container fluid>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={3}>
                <div className="text-center academic">
                  <h4 className="heading mb-1"><span>Announcements & Notice</span></h4>
                  <div className="title-border"></div>
                </div>
                <Notice sentFrom="resultNotice" />
              </Grid>
              <Grid item xs={12} md={3}>
                <div className="text-center academic">
                  <h4 className="heading mb-1"><span>Students Corner</span></h4>
                  <div className="title-border"></div>
                </div>
                <Notice sentFrom="resultCorner" />
              </Grid>
              <Grid item xs={12} md={3}>
                <div className="text-center academic">
                  <h4 className="heading mb-1"><span>Exam Results</span></h4>
                  <div className="title-border"></div>
                </div>
                <Notice sentFrom="resultResults" />
              </Grid>
              <Grid item xs={12} md={3}>
                <div className="text-center academic">
                  <h4 className="heading mb-1"><span>Tenders</span></h4>
                  <div className="title-border"></div>
                </div>
                <Notice sentFrom="resultTenders" />
              </Grid>
            </Grid>
          </Container>
        </section>

        <section className="section  bg-light-gray pt-5">
          <Container>
            <div className="text-center academic">
              <h4 className="heading mb-1"><span>NOU@Social</span> Media</h4>
              <div className="title-border"></div>
            </div>
            <SocialMedia />
          </Container>
        </section>
      </main>
      <CardsFooter />
    </>
  );
}