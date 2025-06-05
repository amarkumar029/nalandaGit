import React, { useEffect, useState } from "react";
import { 
  Card, Grid, CardContent, Box, Alert
} from '@mui/material';
import { Link } from "react-router-dom";
import { gridSpacing } from '../../store/constant2';
import axios from "axios";
import baseUrl from "../../navigation/base";
import { useParams } from 'react-router-dom';
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import background from "../../assets/img/IMG_5515.jpg";
import { Container } from "reactstrap";
import loadings from "../../assets/img/loader.gif";

export default function GalleryDetails () {
  const { id } = useParams();
  // console.log("id is ", id);

  const fourPlus = {
    top: '2px',
    left: '3px',
    width: '99.3%',
    height: '99.3%',
    color: '#ffffff',
    fontSize: '50px',
    background: '#000000cf',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  };

  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemsNotice(`${baseUrl}/galleryDetails?id=${id}`);
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
  
  // facebook type +4 gallery
  let template = Array.isArray(items) && items.map((user, key) => {
    let myArray = [];

    if (user.image !== null && user.image !== "NULL") {
        myArray = user.image.split(",");
    }
    // console.log("imsage is ", user.image)
    // console.log("my image lenght is ", myArray.length)
    return (
      <div key={key}>
        <h2>{user.title}</h2>
        <Alert sx={{ mb: 2 }} variant="filled" severity="success" color="error">
          Updated Date: {new Date(user.createdAt).toLocaleDateString('en-GB').replaceAll('/', '-')}
        </Alert>
        <div dangerouslySetInnerHTML={{ __html: user.content }}></div>
        {myArray.length -1 === 1 ? (
          <Grid sx={{ mt: 1 }} container spacing={gridSpacing}>
            {myArray ? (
              <Grid item xs={12} md={12}>
                <img style={{ width: '100%' }} src={myArray[0]} alt={user.title} />
              </Grid>
            ) : null}
          </Grid>
        ) : myArray.length -1 === 2 ? (
          <Link to={`/galleryDetailsAll/${user.id}`}>
            <Grid sx={{ mt: 1 }} container spacing={gridSpacing}>
              {myArray ? (
                <>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[0]} alt={user.title} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[1]} alt={user.title} />
                  </Grid>
                </>
              ) : null}
            </Grid>
          </Link>
        ) : myArray.length -1 === 3 ? (
          <Link to={`/galleryDetailsAll/${user.id}`}>
            <Grid sx={{ mt: 1 }} container spacing={gridSpacing}>
              {myArray ? (
                <>
                  <Grid item xs={6} md={6}>
                    <Box sx={{ overflow: 'hidden' }}>
                      <Box sx={{ position: 'relative', paddingBottom: '90%' }}>
                        <img
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                          }}
                          src={myArray[0]}
                          alt={user.title}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={12} md={12}>
                        <img style={{ width: '100%' }} src={myArray[1]} alt={user.title} />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <img style={{ width: '100%' }} src={myArray[2]} alt={user.title} />
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : null}
            </Grid>
          </Link>
        ) : myArray.length -1 === 4 ? (
          <Link to={`/galleryDetailsAll/${user.id}`}>
            <Grid sx={{ mt: 1 }} container spacing={gridSpacing}>
              {myArray ? (
                <>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[0]} alt={user.title} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[1]} alt={user.title} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[2]} alt={user.title} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[3]} alt={user.title} />
                  </Grid>
                </>
              ) : null}
            </Grid>
          </Link>
        ) : myArray.length -1 === 5 ? (
          <Link to={`/galleryDetailsAll/${user.id}`}>
            <Grid sx={{ mt: 1 }} container spacing={gridSpacing}>
              {myArray ? (
                <>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[0]} alt={user.title} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[1]} alt={user.title} />
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <img style={{ width: '100%' }} src={myArray[2]} alt={user.title} />
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <img style={{ width: '100%' }} src={myArray[3]} alt={user.title} />
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <img style={{ width: '100%' }} src={myArray[3]} alt={user.title} />
                  </Grid>
                </>
              ) : null}
            </Grid>
          </Link>
        ) : myArray.length -1 >= 5 ? (
          <Link to={`/galleryDetailsAll/${user.id}`}>
            <Grid sx={{ mt: 1 }} container spacing={gridSpacing}>
              {myArray ? (
                <>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[0]} alt={user.title} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <img style={{ width: '100%' }} src={myArray[1]} alt={user.title} />
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <img style={{ width: '100%' }} src={myArray[2]} alt={user.title} />
                  </Grid>
                  <Grid item xs={4} md={4}>
                    <img style={{ width: '100%' }} src={myArray[3]} alt={user.title} />
                  </Grid>
                  {myArray ? (
                    <Grid sx={{ position: 'relative' }} item xs={4} md={4}>
                      <img src={myArray[4]} alt={user.title} />
                      <Box sx={fourPlus}>+{myArray.length -1 - 5}</Box>
                    </Grid>
                  ) : null}
                </>
              ) : null}
            </Grid>
          </Link>
        ) : null}
      </div>
    );
  });  

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