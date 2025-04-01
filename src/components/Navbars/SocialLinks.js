import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../navigation/base";

import {
    UncontrolledTooltip,
    NavItem,
    NavLink,
  } from "reactstrap";

function SocialLinks() {

    const [item, setItem] = useState([]);
    useEffect(() => {
        getItem();
    }, []);

    function getItem() {
        axios.get(`${baseUrl}/api/socialLinks/`).then(function(response) {
           console.log(response.data)
            setItem(response.data);
        });
    }

    return (
        <>
            {Array.isArray(item) && item.map((data, key) =>
                <div className="d-flex" key={key}>
                    <NavItem>
                        <NavLink
                            className="nav-link-icon"
                            href={data.android}
                            id="tooltip112445450"
                            target="_blank"
                        >
                            <img alt="Download Vision App" height="43" src={require("assets/img/app-download.png")} />
                            <span className="nav-link-inner--text d-lg-none ml-2">
                            Download
                            </span>
                        </NavLink>
                        <UncontrolledTooltip delay={0} target="tooltip112445450">
                            Download Vision App
                        </UncontrolledTooltip>
                    </NavItem>
                </div>
            )}
        </>
    );
}

export default SocialLinks;