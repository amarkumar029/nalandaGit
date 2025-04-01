import React, { useEffect, useState } from "react";
import {Grid,Card,CardContent,CardMedia} from '@mui/material';
import { gridSpacing } from '../../store/constant';
import baseUrl from "../../navigation/base";
import axios from "axios";
import loadings from "../../assets/img/loader.gif";

export default function CardTextImg(props) {
  
  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if(props.sentFrom==="resultsProViceChancellor"){
      getItemsChancellor(`${baseUrl}/chancellor?type=ProViceChancellor`);
    }
    if(props.sentFrom==="resultsChancellor"){
      getItemsChancellor(`${baseUrl}/chancellor?type=Chancellor`);
    }
    if(props.sentFrom==="resultsVc"){
      getItemsChancellor(`${baseUrl}/chancellor?type=ViceChancellor`);
    }
  },[props]);

  function getItemsChancellor(url) {
    setLoading(true);
    axios.get(url).then(function(response) {
      // console.log(response.data);
      setLoading(false);
      setitems(response.data);
    });
  }
  
  if (loading) {
    // Display a loading indicator
    return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
  }

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={4}></Grid>
        {Array.isArray(items) && items.map((user, key) =>
          <Grid item xs={12} md={4}>
            <Card align="center">              
              <CardMedia
                sx={{ height: 500, borderRadius: 1 }}
                image={(`uploads/${user.image}`)}
                title={user.title}
              />
              <CardContent>
                <div dangerouslySetInnerHTML={{ __html: user.content}}></div>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
}