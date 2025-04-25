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
    const [items, setitems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // console.log("props is ", props.sentFrom)
        if(props.sentFrom==="resultNotice"){
            getItemsNotice(`${baseUrl}/notice?type=Announcements Notice`);
        }
        if(props.sentFrom==="resultCorner"){
            getItemsNotice(`${baseUrl}/notice?type=Students Corner`);
        }
        if(props.sentFrom==="resultResults"){
            getItemsNotice(`${baseUrl}/notice?type=Exam Results`);
        }
        if(props.sentFrom==="resultTenders"){
            getItemsNotice(`${baseUrl}/notice?type=Tenders`);
        }
    },[props]);

    function getItemsNotice(url) {
        setLoading(true);
        axios.get(url).then(function(response) {
            setLoading(false);
            setitems(response.data);
            // console.log("notice data",response.data)
        });
    }
    
    if (loading) {
        // Display a loading indicator
        return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
    }

    return (
        <>
            <div className="noticemain">
                <div className="notice">
                {Array.isArray(items) && items.map((user, key) => (
                    <li key={key}>
                        <div className="titlemanage">
                            <div className="ntitle">
                                {user.title}
                            </div>
                        </div>
                        <div className="manage">
                            <Box>
                                <span style={{marginRight:5}}>{user.date}</span>                            
                                {user.status === 'new' ? (
                                    <img src={noticenew} alt="new" height="20" /> 
                                ):null}
                            </Box>
                            {user.pdf ? (
                                <a href={`${user.pdf}`} className="link" target='_blank' rel="noreferrer">Read More</a>
                                // <a href={process.env.PUBLIC_URL + `../uploads/notice/${user.pdf}`} className="link" target='_blank' rel="noreferrer">Read More</a>
                            ) : (
                                <Link className="link" to={`/noticeDetails/${user.id}`}>Read More</Link>
                            )}
                        </div>
                    </li>
                ))}
                </div>               
                <Link className="alllinks" to={`/noticeall/${props.sentFrom}`}>Read More</Link>
            </div>
        </>
    );
}