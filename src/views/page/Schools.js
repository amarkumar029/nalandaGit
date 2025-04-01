import React from "react";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import PageBanner from "components/section/PageBanner";
import { Container } from "reactstrap";
import IqacNoticeCard from "components/section/IqacNoticeCard";
import { Helmet } from 'react-helmet';

export default function Schools() {
  return (
    <>
      <DemoNavbar />
        <Helmet>
          <title>Welcome To Nalanda Open University</title>
          <meta name="description" content="Nalanda Open University, Nalanda University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
          <meta name="Keywords" content="Nalanda University, Nalanda Open University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
        </Helmet>
      <PageBanner sentFrom="resultSchools" />
      <main className="section-main">
        <Container>
          <IqacNoticeCard sentFrom="resultSchools" />
        </Container>
      </main>
      <CardsFooter />
    </>
  );
}