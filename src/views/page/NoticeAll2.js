import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios"
import baseUrl from "../../navigation/base";
import loadings from "../../assets/img/loader.gif";

// reactstrap components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { Container } from "reactstrap";
import background from "../../assets/img/IMG_5515.jpg";
import noticenew from '../../assets/img/new.gif';
import { Helmet } from 'react-helmet';

function NoticeAll2 () {
  const {type,stype } = useParams();
  // console.log("id is ", type,"stype is ",stype);
  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // console.log(`${baseUrl}/all?type=${type}`);
    getItemsNotice(`${baseUrl}/noticenewall?type=${type}&stype=${stype}`);
  },[type]);

  function getItemsNotice(url) {
    setLoading(true);
    axios.get(url).then(function(response) {
      setLoading(false);
      setitems(response.data);
      // console.log("notice data", response.data);
    });
  }
  
  if (loading) {
    // Display a loading indicator
    return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
  }

  return (
    <>
      <DemoNavbar />
        <Helmet>
          <title>Welcome To Nalanda Open University</title>
          <meta name="description" content="Nalanda Open University, Nalanda University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
          <meta name="Keywords" content="Nalanda University, Nalanda Open University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
        </Helmet>
        <div className="top_site_main" style={{ backgroundImage: `url(${background})` }}>
          <h2>{items[0]?.stype}</h2>
        </div>
        <main className="section-main">
          <Container>
            <div className="noticeall">
              { Array.isArray(items) && items.map((user, key) =>
                <>
                  <li key={key}>
                    <div className="ntitle">
                      {user.pdf ? (                      
                        <a href={`${user.pdf}`} target='_blank' rel="noreferrer">
                          {user.title} 
                          {user.status === 'new' ? (
                            <img src={noticenew} alt="new" height="20" /> 
                          ):null}
                        </a>                        
                      ) : user.url && user.url.trim() !== "" ? (
                        <a href={user.url} target='_blank' rel="noreferrer">
                          {user.title} 
                          {user.status === 'new' ? (
                            <img src={noticenew} alt="new" height="20" /> 
                          ):null}
                        </a>
                      ) : (
                        <Link className="link" to={`/noticeDetails/${user.id}`}>
                          {user.title} 
                          {user.status === 'new' ? (
                            <img src={noticenew} alt="new" height="20" /> 
                          ):null}
                        </Link>
                      )}
                    </div>
                    <div className="manage">
                      <span>{user.date}</span>
                    </div>
                  </li>
                </>
              )}           
            </div>
          </Container>
        </main>
      <CardsFooter />
    </>
  );
}

export default NoticeAll2;