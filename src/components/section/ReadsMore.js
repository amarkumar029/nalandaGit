import React, { useState } from "react";
// import Content from "./Content.js";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "... Read more" : " Show less "}
            </span>
        </p>
    );
};

const ReadsMore = () => {
    return (
        <div className="container">
            <ReadMore>
                {/* <Content sentFrom="resultAbout" /> */}
            </ReadMore>
        </div>
    );
};

export default ReadsMore;