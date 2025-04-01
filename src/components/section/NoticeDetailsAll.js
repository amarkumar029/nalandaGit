import React, { useEffect, useState } from "react";
import { 
  Card, Grid, CardContent, Box, Alert
} from '@mui/material';
import { gridSpacing } from '../../store/constant';
import axios from "axios";
import baseUrl from "../../navigation/base";
import { useParams } from 'react-router-dom';
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import background from "../../assets/img/IMG_5515.jpg";
import { Container } from "reactstrap";
import loadings from "../../assets/img/loader.gif";

export default function NoticeDetails () {
  const { id } = useParams();
  // console.log("id is ", id);

  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemsNotice(`${baseUrl}/noticeDetails?id=${id}`);
  },[id]);

  function getItemsNotice(url) {
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

//   let template = Array.isArray(items) && items.map((user, key) => {
//     const myArray = user.image.split(",");
//     return (
//       <div key={key}>
//         <h2>{user.title}</h2>
//         <Alert sx={{ mb: 2 }} variant="filled" severity="success" color="error">
//           Updated Date: {user.date}
//         </Alert>
//         <div dangerouslySetInnerHTML={{ __html: user.content }}></div>
//         {myArray ? (
//           <Grid sx={{ mt: 1 }} container spacing={gridSpacing}>
//             {myArray.map((image, index) => (
//               <Grid key={index} item xs={12} md={12}>
//                 <img style={{ width: '100%' }} src={image} alt={user.title} />
//               </Grid>
//             ))}
//           </Grid>
//         ) : null}
//       </div>
//     );
//   });

let template = [];
if (Array.isArray(items)) {
  for (let key = 0; key < items.length; key++) {
    const user = items[key];
    const myArray = user.image.split(",");
    const imageElements = [];

    if (myArray) {
      for (let index = 0; index < myArray.length-1; index++) {
        imageElements.push(
          <Grid key={index} item xs={12} md={12}>
            <img style={{ width: '100%' }} src={myArray[index]} alt={user.title} />
          </Grid>
        );
      }
    }

    template.push(
      <div key={key}>
        <h2>{user.title}</h2>
        <Alert sx={{ mb: 2 }} variant="filled" severity="success" color="error">
          Updated Date: {user.date}
        </Alert>
        <div dangerouslySetInnerHTML={{ __html: user.content }}></div>
        {imageElements.length > 0 && (
          <Grid sx={{ mt: 1 }} container spacing={gridSpacing}>
            {imageElements}
          </Grid>
        )}
      </div>
    );
  }
}
  
  return (
    <>
      <DemoNavbar />
      <div className="top_site_main" style={{ backgroundImage: `url(${background})` }}>
        <h1>{items[0]?.type}</h1>
      </div>
      <main className="section-main">
        <Container>
          <Box sx={{color: '#000000'}}>
            <Card>
              <CardContent>
                {template}
              </CardContent>
            </Card>
          </Box>
        </Container>
      </main>
      <CardsFooter />
    </>
  );
}