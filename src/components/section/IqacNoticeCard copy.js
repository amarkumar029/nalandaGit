import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../navigation/base";
import loadings from "../../assets/img/loader.gif";
import AlbumIcon from '@mui/icons-material/Album';

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
        .then(function (response) {
            setLoading(false);
            const uniqueTitles = getUniqueTitles(response.data);
            setItems(uniqueTitles);
            // console.log("notice data", uniqueTitles);
        })
        .catch(function (error) {
            setLoading(false);
            // console.error("Error fetching data:", error);
        });
    }

    // Helper function to filter unique titles
    function getUniqueTitles(data) {
        const titlesSet = new Set();
        return data.filter(item => {
            if (!titlesSet.has(item.stype)) { // Check if title is unique
                titlesSet.add(item.stype);
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
            {Array.isArray(items) && items.map((user, key) => (
                <div key={key} className="notice-item">
                    <Link className="link mb-2 mt-0" to={`/all/${sentFrom}/${user.stype}`}> */}
                        <AlbumIcon sx={{ fontSize: 15, verticalAlign: 'sub' }} /> {user.stype}
                    </Link>
                </div>
            ))}
        </>
    );
}