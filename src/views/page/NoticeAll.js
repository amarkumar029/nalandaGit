import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {
//   Grid
// } from '@mui/material';
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

function NoticeAll () {

  const { id } = useParams(); 
  // console.log("id is ", id);

  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemsNotice(`${baseUrl}/noticeall?type=${id}`);
  },[id]);

  function getItemsNotice(url) {
    setLoading(true);
    axios.get(url).then(function(response) {
      setLoading(false);
      setitems(response.data);
    });
  }
  
  if (loading) {
    // Display a loading indicator
    return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
  }

  // let topic="";
  // function echoHeader(type){
  //   if(topic!==type){
  //     topic =type;
  //     return (
  //     <Grid item xs={12} md={12}>
  //       <h2 className="heading mb-1 mt-2">{type}</h2>
  //       <div className="title-border"></div>
  //     </Grid>
  //     )
  //   }
  // }

  return (
    <>
      <DemoNavbar />
        <Helmet>
          <title>Welcome To Nalanda Open University</title>
          <meta name="description" content="Nalanda Open University, Nalanda University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
          <meta name="Keywords" content="Nalanda University, Nalanda Open University, Best University In Nalanda, Best University In Nalanda, Higher Education, Paraprofessional, Physical Education, Intermediate Science, Intermediate Arts, Bachelor of Science, Bachelor of Arts, Department B. Com (Self Finance), Bachelor of Business Management, Bachelor in Computer Application, Bachelor of Library Science." />
        </Helmet>
        <div className="top_site_main" style={{ backgroundImage: `url(${background})` }}>
          <h2>{items[0]?.type}</h2>
        </div>
        <main className="section-main">
          <Container>
            <div className="noticeall">
              { Array.isArray(items) && items.map((user, key) =>
                <>
                  {/* {echoHeader(user.type)} */}
                  <li key={key}>
                    <div className="ntitle">
                      {user.pdf ? (                      
                        // <a href={process.env.PUBLIC_URL + `../uploads/${user.pdf}`} className="link" target='_blank' rel="noreferrer">
                        <a href={`${user.pdf}`} target='_blank' rel="noreferrer">
                          {user.title} 
                          {user.status === 'new' ? (
                            <img src={noticenew} alt="new" height="20" /> 
                          ):null}
                        </a>                        
                      ) : user.url && user.url.trim() !== "" ? (
                        <a href={user.url} className="link" target="_blank" rel="noreferrer">View</a>
                      ) : (
                        <Link to={`/noticeDetails/${user.id}`}>
                          {user.title} 
                          {user.status === 'new' ? (
                            <img src={noticenew} alt="new" height="20" /> 
                          ):null}
                        </Link>
                      // <a href={process.env.PUBLIC_URL + `uploads/${user.download}`} download className="mt-3 w-100 btn btn-danger">Download</a>
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

export default NoticeAll;