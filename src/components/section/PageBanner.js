import React, { useEffect, useState } from "react";
import baseUrl from "../../navigation/base";
import loadings from "../../assets/img/loader.gif";
import background from "../../assets/img/IMG_5515.jpg";
import axios from "axios";

export default function PageBanner (props) {

  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if(props.sentFrom==="resultAbout"){
      getItemsBanner(`${baseUrl}/banner?type=About`);
    }
    if(props.sentFrom==="resultAdmission"){
      getItemsBanner(`${baseUrl}/banner?type=Admission`);
    }
    if(props.sentFrom==="resultExamination"){
      getItemsBanner(`${baseUrl}/banner?type=Examination`);
    }
    if(props.sentFrom==="resultHyperlink"){
      getItemsBanner(`${baseUrl}/banner?type=Hyperlink Policy`);
    }
    if(props.sentFrom==="resultPrivacy"){
      getItemsBanner(`${baseUrl}/banner?type=Privacy Policy`);
    }
    if(props.sentFrom==="resultTerms"){
      getItemsBanner(`${baseUrl}/banner?type=Terms and Conditions`);
    }
    if(props.sentFrom==="resultContact"){
      getItemsBanner(`${baseUrl}/banner?type=Contact`);
    }
    if(props.sentFrom==="resultGallery"){
      getItemsBanner(`${baseUrl}/banner?type=Gallery`);
    }
    if(props.sentFrom==="resultSchools"){
      getItemsBanner(`${baseUrl}/banner?type=Schools`);
    }
    if(props.sentFrom==="resultDownloads"){
      getItemsBanner(`${baseUrl}/banner?type=Downloads`);
    }
    if(props.sentFrom==="resultIqac"){
      getItemsBanner(`${baseUrl}/banner?type=Iqac`);
    }
    if(props.sentFrom==="resultStudentServices"){
      getItemsBanner(`${baseUrl}/banner?type=Student Services`);
    }
    if(props.sentFrom==="resultAcademicCalender"){
      getItemsBanner(`${baseUrl}/banner?type=Academic Calender`);
    }
    if(props.sentFrom==="resultMedia"){
      getItemsBanner(`${baseUrl}/banner?type=Media`);
    }
    if(props.sentFrom==="resultPhotoGallery"){
      getItemsBanner(`${baseUrl}/banner?type=Photo Gallery`);
    }
    if(props.sentFrom==="resultNewsGallery"){
      getItemsBanner(`${baseUrl}/banner?type=News Gallery`);
    }
    if(props.sentFrom==="resultNewsLetter"){
      getItemsBanner(`${baseUrl}/banner?type=News Letter`);
    }
  },[props]);

  function getItemsBanner(url) {
    setLoading(true);
    axios.get(url).then(function(response) {
      setLoading(false);
      // console.log(response.data);
      setitems(response.data);
    });
  }
    
  if (loading) {
    // Display a loading indicator
    return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
  }

  return (
    <>
      <div className="top_site_main" style={{ backgroundImage: `url(${background})` }}>
        {Array.isArray(items) && items.map((user, key) =>
          <h2 key={key}>{user.title}</h2>
        )}
      </div>
    </>
  );
} 