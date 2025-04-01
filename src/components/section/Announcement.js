import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../navigation/base";
import Marquee from "react-fast-marquee";
import CampaignIcon from '@mui/icons-material/Campaign';
import noticenew from '../../assets/img/new.gif';

export default function Announcement () {

    const [item, setItem] = useState([]);
    useEffect(() => {
        getItem();
    }, []);

    function getItem() {
        axios.get(`${baseUrl}/announcement`).then(function(response) {
        setItem(response.data);
        });
    }
    
    return (
        <>            
            <div
                style={{
                    whiteSpace: 'nowrap',
                    background: '#F7F7F7',
                    color: '#000',
                    fontSize: 17,
                    fontWeight: 600,
                    top: -5,
                    position: 'relative',
                    display: 'flex',
                }}
            >
                <div style={{width: 50, padding: 10, background: '#C21717', marginRight: 5,}}>
                    <CampaignIcon sx={{fontSize: 35,color: 'white'}} />
                </div>
                <Marquee
                    // autoStart={true}
                    // direction={'left'}
                    // delay={1000}
                    pauseOnHover={true}
                >
                    {Array.isArray(item) && item.map((user, key) =>
                       <a href={user.url} target='_blank' rel="noreferrer"><img src={noticenew} alt="new" height="20" /> {user.title} | </a>
                    )}
                </Marquee>          
            </div>
        </>
    );
}