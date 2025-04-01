import React, { useEffect, useState, useCallback } from "react";
import { Grid } from "@mui/material";
import { gridSpacing } from "../../store/constant";
import baseUrl from "../../navigation/base";
import axios from "axios";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import loadings from "../../assets/img/loader.gif";

export default function Quicklink(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItemsQuicklink = useCallback((url) => {
    setLoading(true);
    axios.get(url).then((response) => {
      setLoading(false);
      setItems(response.data);
      uniqueDepartment(response.data);
    });
  }, []);

  function uniqueDepartment(vls) {
    const department = [];
    vls.forEach((item) => {
      if (!department.includes(item.type)) {
        department.push(item.type);
      }
    });
  }

  useEffect(() => {
    if (props.sentFrom === "resultQuicklink") {
      getItemsQuicklink(`${baseUrl}/quicklink`);
    }
  }, [props, getItemsQuicklink]); // Include getItemsQuicklink in the dependency array

  if (loading) {
    return (
      <div className="text-center">
        <img width="120" src={loadings} alt="Loading..." />
      </div>
    );
  }

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <Container>
      <Grid container spacing={gridSpacing}>
        {Object.keys(groupedItems).map((type, index) => (
          <Grid item xs={12} md={3} key={index}>
            <h5 className="heading mb-1 mt-2">{type}</h5>
            <div className="title-border"></div>
            <ul className="footermenu">
              {groupedItems[type].map((user, key) => (
                <li key={key}>
                  <Link to={user.url}>{user.title}</Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
