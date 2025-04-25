import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../navigation/base";
import loadings from "../../assets/img/loader.gif";
import { Col, Row } from "reactstrap";
// import AlbumIcon from '@mui/icons-material/Album';

export default function IqacNoticeCard(props) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sentFrom, setSentFrom] = useState(null);
    useEffect(() => {
        if (props.sentFrom === "resultSchools") {
            getItemsNotice(`${baseUrl}/pagepdf?type=Schools`);
            setSentFrom("Schools");
        }
        if (props.sentFrom === "resultDownloads") {
            getItemsNotice(`${baseUrl}/pagepdf?type=Downloads`);
            setSentFrom("Downloads");
        }
    }, [props.sentFrom]);

    function getItemsNotice(url) {
        setLoading(true);
        axios.get(url)
        .then(async function (response) {
            const data = response.data;
            const uniqueTitles = getUniqueTitles(data);

            // Map stype to image from another API
            const itemsWithImages = await Promise.all(
                uniqueTitles.map(async (item) => {
                    try {
                        const imageRes = await axios.get(`${baseUrl}/schoolimg?title=${item.stype}`);
                        // console.log("Image response:", imageRes.data);
            
                        return {
                            ...item,
                            image: Array.isArray(imageRes.data) && imageRes.data.length > 0 && imageRes.data[0].banner_img
                                ? `./uploads/${imageRes.data[0].banner_img}`
                                : "./uploads/default.jpg"
                        };
                    } catch (e) {
                        return {
                            ...item,
                            image: "./uploads/default.jpg"
                        };
                    }
                })
            );                                  

            setItems(itemsWithImages);
            setLoading(false);
        })
        .catch(function (error) {
            setLoading(false);
        });
    }
    
    // Helper function to filter unique titles
    function getUniqueTitles(data) {
        const titlesSet = new Set();
        return data.filter(item => {
            if (!titlesSet.has(item.stype)) { // Check if title is unique
                titlesSet.add(item.stype);
                // console.log("Titles", titlesSet);
                return true; // Include this item
            }
            return false; // Skip duplicates
        });
    }

    if (loading) {
        return (
            <div className="text-center">
                <img width="120" src={loadings} alt="Loading..." />
            </div>
        );
    }

    return (
        <>        
            <Row>
                {Array.isArray(items) && items.map((user, key) => (
                    <Col lg="3" className="p-1" key={key}>
                        <div className="notice-item">
                            <div className="abourCard">
                                <Link to={`/all/${sentFrom}/${user.stype}`}>
                                    <article>
                                        <div className="post-img">
                                            <img src={user.image} className="img-fluid" title={user.stype} />
                                        </div>
                                        <div className="col">
                                            <p className="title2">{user.stype}</p>
                                        </div>
                                    </article>
                                </Link>
                            </div>
                        </div>   
                    </Col> 
                ))}            
            </Row>
        </>
    );
}