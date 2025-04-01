import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "views/Index";
import ShowTheContent from "views/page/ShowTheContent";
import Gallery from "views/page/Gallery";
import NoticeDetails from "components/section/NoticeDetails";
import NoticeDetailsAll from "components/section/NoticeDetailsAll";
import NoticeAll from "views/page/NoticeAll";

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
        path="/gallery"
        exact
        element={<Gallery page="resultGallery" banner="resultGallery" />}
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
    </Routes>
  </BrowserRouter>
);