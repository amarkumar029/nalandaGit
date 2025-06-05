import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../navigation/base";
import Marquee from "react-fast-marquee";
import CampaignIcon from '@mui/icons-material/Campaign';
import noticenew from '../../assets/img/new.gif';

export default function Announcement() {
    const [generalAnnouncements, setGeneralAnnouncements] = useState([]);
    const [admissionAnnouncements, setAdmissionAnnouncements] = useState([]);

    useEffect(() => {
        fetchGeneralAnnouncements();
        fetchAdmissionAnnouncements();
    }, []);

    const fetchGeneralAnnouncements = () => {
        axios.get(`${baseUrl}/announcement`)
        .then((response) => setGeneralAnnouncements(response.data))
        .catch((error) => console.error("Error fetching general announcements:", error));
    };

    const fetchAdmissionAnnouncements = () => {
        axios.get(`${baseUrl}/admissionAnnouncement?type=Admission`)
        .then((response) => setAdmissionAnnouncements(response.data))
        .catch((error) => console.error("Error fetching admission announcements:", error));
    };

    return (
        <>            
            <div style={{
                whiteSpace: 'nowrap',
                background: '#F7F7F7',
                color: '#000',
                fontSize: 17,
                fontWeight: 600,
                top: -5,
                position: 'relative',
                display: 'flex',
            }}>
                <div style={{
                    width: 50,
                    padding: 10,
                    background: '#C21717',
                    marginRight: 5,
                }}>
                    <CampaignIcon sx={{ fontSize: 35, color: 'white' }} />
                </div>

                <Marquee pauseOnHover={true}>
                    {Array.isArray(generalAnnouncements) && generalAnnouncements.map((announcement, index) => (
                        <span key={index} style={{ marginRight: 0 }}>
                            <a href={announcement.url} target='_blank' rel="noreferrer">
                                <img src={noticenew} alt="new" height="20" style={{ marginRight: 5 }} />
                                {announcement.title}
                            </a>
                        </span>
                    ))}
                </Marquee>
            </div>

            <div style={{
                color: '#000',
                fontSize: 17,
                fontWeight: 600,
                padding: 5,
                textAlign: 'center',
            }}>       
                <div className="container-fluid">
                    {Array.isArray(admissionAnnouncements) && admissionAnnouncements.map((announcement, index) => (
                        <a key={index} style={{ marginBottom: 10 }} href={announcement.url} target='_blank' rel="noreferrer">
                            <img src={noticenew} alt="new" height="20" style={{ marginRight: 5 }} />
                            {announcement.title}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}