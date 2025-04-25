import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "views/Index";
import ShowTheContent from "views/page/ShowTheContent";
import StudentServices from "views/page/StudentServices";
import Media from "views/page/Media";
import Gallery from "views/page/Gallery";
import NoticeDetails from "components/section/NoticeDetails";
import NoticeDetailsAll from "components/section/NoticeDetailsAll";
import NoticeAll from "views/page/NoticeAll";
import NoticeAll2 from "views/page/NoticeAll2";
import Rti from "views/page/Rti";

import Schools from "views/page/Schools";
import SchoolsAll from "views/page/SchoolsAll";
import Downloads from "views/page/Downloads";
import DownloadsAll from "views/page/SchoolsAll";
import SchoolsAllDetails from "views/page/SchoolsAllDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(  
  <BrowserRouter>
    <Routes>
      <Route path="/" exact  element={<Index />} />
        <Route
        path="/about-us"
        exact
        element={<ShowTheContent page="resultAbout" banner="resultAbout" /> }
      />
      <Route
        path="/admission"
        exact
        element={<ShowTheContent page="resultAdmission" banner="resultAdmission" /> }
      />
      <Route
        path="/examination"
        exact
        element={<ShowTheContent page="resultExamination" banner="resultExamination" /> }
      />
      <Route
        path="/contact-us"
        exact
        element={<ShowTheContent page="resultContact" banner="resultContact" />}
      />
      <Route
        path="/terms-conditions"
        exact
        element={<ShowTheContent page="resultTerms" banner="resultTerms" />}
      />
      <Route
        path="/privacy-policy"
        exact
        element={<ShowTheContent page="resultPrivacy" banner="resultPrivacy" />}
      />
      <Route
        path="/hiperlink-policy"
        exact
        element={<ShowTheContent page="resultHyperlink" banner="resultHyperlink" />}
      />
      <Route
        path="/academic-calender"
        exact
        element={<ShowTheContent page="resultAcademicCalender" banner="resultAcademicCalender" />}
      />
      <Route
        path="/noticeall/:id"
        exact
        element={<NoticeAll />}
      />
      <Route
        path="/noticeDetails/:id"
        exact
        element={<NoticeDetails />}
      />
      <Route
        path="/noticeDetailsAll/:id" 
        exact
        element={<NoticeDetailsAll />}
      />
      <Route
        path="/noticenewall/:type/:stype"
        exact
        element={<NoticeAll2 />}
      />
       <Route
        path="/iqacalldetails/:type/:stype"
        exact
        element={<SchoolsAllDetails />}
      />
      <Route
        path="/Media"
        exact
        element={<Media banner="resultMedia" />}
      />
      <Route
        path="/photo-gallery"
        exact
        element={<Gallery page="resultPhotoGallery" banner="resultPhotoGallery" />}
      />
      <Route
        path="/news-gallery"
        exact
        element={<Gallery page="resultNewsGallery" banner="resultNewsGallery" />}
      />
      <Route
        path="/news-letter"
        exact
        element={<Gallery page="resultNewsLetter" banner="resultNewsLetter" />}
      />
      <Route path="/schools" element={<Schools />} />
      <Route
        path="/all/:type/:stype"
        exact
        element={<SchoolsAll />}
      />
       <Route
        path="/iqacalldetails/:type/:stype"
        exact
        element={<SchoolsAllDetails />}
      />
      <Route path="/downloads" element={<Downloads />} />
      <Route
        path="/all/:type/:stype"
        exact
        element={<DownloadsAll />}
      />
      <Route
        path="/student-services"
        exact
        element={<StudentServices banner="resultStudentServices" />}
      />
      <Route
        path="/rit"
        exact
        element={<Rti page="resultRti" />}
      />
    </Routes>
  </BrowserRouter>
);