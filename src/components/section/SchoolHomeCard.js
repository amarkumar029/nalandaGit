import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../navigation/base";
import loadings from "../../assets/img/loader.gif";

export default function SchoolHomeCard(props) {
    // const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [sentFrom, setSentFrom] = useState(null);

    // useEffect(() => {
    //     if (props.sentFrom === "resultSchools") {
    //         getItemsNotice(`${baseUrl}/pagepdf?type=Schools`);
    //         setSentFrom("Schools");
    //     }
    //     if (props.sentFrom === "resultDownloads") {
    //         getItemsNotice(`${baseUrl}/pagepdf?type=Downloads`);
    //         setSentFrom("Downloads");
    //     }
    // }, [props.sentFrom]);

    // const getItemsNotice = (url) => {
    //     setLoading(true);
    //     axios.get(url)
    //         .then((response) => {
    //             setLoading(false);
    //             const uniqueTitles = getUniqueTitles(response.data);
    //             setItems(uniqueTitles);
    //             console.log("notice data", uniqueTitles)
    //         })
    //         .catch(() => setLoading(false));
    // };

    // const getUniqueTitles = (data) => {
    //     const titlesSet = new Set();
    //     return data.filter((item) => {
    //         if (!titlesSet.has(item.stype)) {
    //             titlesSet.add(item.stype);
    //             return true;
    //         }
    //         return false;
    //     });
    // };

    // if (loading) {
    //     return (
    //         <div className="text-center">
    //             <img width="120" src={loadings} alt="Loading..." />
    //         </div>
    //     );
    // }

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
                        console.log("Image response:", imageRes.data);
            
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,                  
                  dots: false,
                },
            },
        ],
    };

    return (
        <div className="w-full px-4 py-10">
            <Slider {...settings}>
                {Array.isArray(items) && items.map((user, key) => (
                    <div key={key}>
                        <div className="notice-item">
                            <div className="abourCard mr-1">
                                <Link to={`/all/${sentFrom}/${user.stype}`}>
                                    <article>
                                        <div className="post-img">
                                            <img
                                                src={user.image}
                                                alt={user.stype}
                                                className="img-fluid"
                                                title={user.stype}
                                            />
                                        </div>
                                        <div className="col">
                                            <p className="title2">{user.stype}</p>
                                        </div>
                                    </article>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};