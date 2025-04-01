import React, { useEffect, useState } from "react";
import {Grid} from '@mui/material';
import { gridSpacing } from '../../store/constant';
import baseUrl from "../../navigation/base";
import axios from "axios";
import background from "../../assets/img/chancellorbg.jpg";
import loadings from "../../assets/img/loader.gif";

export default function Chancellor() {

const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
    getItems();
},[]);

function getItems() {
    setLoading(true);
    axios.get(`${baseUrl}/chancellor?type=Chancellor`).then(function(response) {
        setLoading(false);
        setItems(response.data);
    });
}

if (loading) {
    // Display a loading indicator
    return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
}

return (
    <Grid container spacing={gridSpacing}>
        {Array.isArray(items) && items.map((user, key) =>
        <Grid item xs={12} md={4} key={key}>
            <div className="vc" style={{ backgroundImage: `url('${background}')` }}>
                <img
                    alt={user.title}
                    className="img-fluid w-100 rounded"
                    src={(`uploads/${user.image}`)}
                />
                <div dangerouslySetInnerHTML={{ __html: user.content}}></div>
            </div>
        </Grid>
        )}
    </Grid>
  );
}