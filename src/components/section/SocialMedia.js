import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Card, CardContent, Divider, Grid } from '@mui/material';
import { gridSpacing } from '../../store/constant';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Iframe from 'react-iframe'

import axios from "axios"
import baseUrl from "../../navigation/base";
import loadings from "../../assets/img/loader.gif";
// import YouTubeVideos from "./YouTubeVideos";


export default function SocialMedia () {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      getItems();
      getItem();
    }, []);

    function getItems() {
        setLoading(true);
        axios.get(`${baseUrl}/socialmedia`).then(function(response) {  
            setLoading(false); 
            setItems(response.data);
        });
    }
    function getItem() {
        setLoading(true);
        axios.get(`${baseUrl}/youtubevideo`).then(function(response) {  
            setLoading(false); 
            setItem(response.data);
        });
    }
    
    if (loading) {
        // Display a loading indicator
        return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
    }
  
    return (
        <Row>
            <Col lg="4">
                <Card className="bg-light-gray socialheight pb-4">
                    <h3 className="ml-3"><FacebookIcon /> Facebook</h3>
                    <Divider />
                    <CardContent>
                        <Iframe 
                        src={items[0]?.facebook}
                        width="340" 
                        height="500" 
                        scrolling="no" 
                        frameborder="0" 
                        allowfullscreen="true" 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
                    </CardContent>
                </Card>
            </Col>
            <Col lg="4">
                <Card className="bg-light-gray socialheight pb-4">
                    <h3 className="ml-3"><TwitterIcon /> Twitter</h3>
                    <Divider />
                    <CardContent>
                        <section className="twitterContainer">
                            <div className="twitter-embed">
                                <TwitterTimelineEmbed
                                sourceType="profile"
                                // screenName="magadhuniversi1"
                                screenName={items[0]?.twitter}
                                options={{
                                    tweetLimit: "10",
                                    width: "100%",
                                    height: "500"
                                }}
                                // theme="dark"
                                noHeader="true"
                                noBorders="true"
                                noFooter="true"
                                ></TwitterTimelineEmbed>
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </Col>
            <Col lg="4">
                <Card className="bg-light-gray socialheight pb-4">
                    <h3 className="ml-3"><YouTubeIcon /> Youtube</h3>
                    <Divider />
                    <CardContent style={{overflowY: 'auto',height: '480px',}}>
                        <Grid container spacing={gridSpacing}>
                            {Array.isArray(item) && item.map((user, key) => (
                            <Grid item xs={12} md={4} key={key}>
                                {/* <Iframe src={`https://www.youtube.com/embed/${item[0]?.ytid}`}
                                    frameborder='0'
                                    width="100%"
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    // allowfullscreen
                                    title='video'
                                /> */}
                                <a
                                    className="mr-1 d-flex"
                                    href={`https://www.youtube.com/watch?v=${user?.ytid}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ position: 'relative', display: 'block' }}
                                    >
                                    <img
                                        src={`https://img.youtube.com/vi/${user?.ytid}/0.jpg`}
                                        alt="YouTube thumbnail"
                                        style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        display: 'block',
                                        }}
                                    />
                                    {/* <YouTubeIcon
                                        style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: 'white',
                                        fontSize: '48px',
                                        opacity: 0.8,
                                        color: '#f03',
                                        }}
                                    /> */}
                                    </a>
                            </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Col>
        </Row>
    );
}