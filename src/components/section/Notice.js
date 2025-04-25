import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
    Box
} from '@mui/material';
import axios from "axios";
import baseUrl from "../../navigation/base";
import loadings from "../../assets/img/loader.gif";
import noticenew from '../../assets/img/new.gif';

export default function Notice (props) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sentFrom, setSentFrom] = useState(null);
    useEffect(() => {
        // console.log("props is ", props.sentFrom)
        if(props.sentFrom==="resultNotice"){
            getItemsNotice(`${baseUrl}/notice?type=Announcements Notice`);
            setSentFrom("Announcements Notice");
        }
        if(props.sentFrom==="resultCorner"){
            getItemsNotice(`${baseUrl}/notice?type=Students Corner`);
            setSentFrom("Students Corner");
        }
        if(props.sentFrom==="resultResults"){
            getItemsNotice(`${baseUrl}/notice?type=Exam Results`);
            setSentFrom("Exam Results");
        }
        if(props.sentFrom==="resultTenders"){
            getItemsNotice(`${baseUrl}/notice?type=Tenders`);
            setSentFrom("Tenders");
        }
        if(props.sentFrom==="resultRti"){
            getItemsNotice(`${baseUrl}/notice?type=RTI`);
            setSentFrom("RTI");
        }
    },[props.sentFrom]);

    function getItemsNotice(url) {
        setLoading(true);
        axios.get(url)
        .then(function (response) {
            setLoading(false);
            const allItems = response.data;

            const titlesSet = new Set();
            const filteredItems = [];

            allItems.forEach(item => {
                const stype = item.stype?.trim();

                if (!stype) {
                    // Include all items where stype is blank/null
                    filteredItems.push(item);
                } else if (!titlesSet.has(stype)) {
                    // Only one item per unique non-empty stype
                    titlesSet.add(stype);
                    filteredItems.push(item);
                }
            });

            setItems(filteredItems);
        })
        .catch(function (error) {
            setLoading(false);
            console.error("Error fetching data:", error);
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
            <div className="noticemain">
                <div className="notice">
                    {Array.isArray(items) && items.map((user, key) => (
                        <li key={key}>
                            <div className="titlemanage">
                                <div className="ntitle">
                                    {user.stype && user.stype.trim() !== "" ? user.stype : user.title}
                                </div>
                            </div>
                            <div className="manage">
                            <Box>
                                <span style={{ marginRight: 5 }}>{user.date}</span>
                                {user.status === 'new' ? (
                                <img src={noticenew} alt="new" height="20" />
                                ) : null}
                            </Box>
                            {user.stype && user.stype.trim() !== "" ? (
                                <Link className="link" to={`/noticenewall/${sentFrom}/${user.stype}`}>View</Link>
                            ) : user.pdf && user.pdf.trim() !== "" ? (
                                <a href={user.pdf} className="link" target="_blank" rel="noreferrer">View</a>
                            ) : user.url && user.url.trim() !== "" ? (
                                <a href={user.url} className="link" target="_blank" rel="noreferrer">View</a>
                            ) : (
                                <Link className="link" to={`/noticeDetails/${user.id}`}>View</Link>
                            )}
                            </div>
                        </li>
                    ))}
                </div>               
                <Link className="alllinks" to={`/noticeall/${props.sentFrom}`}>View All</Link>
            </div>
        </>
    );
}