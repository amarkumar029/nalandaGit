import React, { useEffect, useState } from "react";
import { Box } from '@mui/material';
import axios from "axios";
import baseUrl from "../../navigation/base";
import loadings from "../../assets/img/loader.gif";

export default function HomeContent(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    if(props.sentFrom==="resultAbout"){
      getItemsNotice(`${baseUrl}/cms?type=Home About`);
    }
  },[props]);
    

  function getItemsNotice(url) {
    setLoading(true);
    axios.get(url)
      .then(function (response) {
        setLoading(false);
        setItems(response.data);
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
      });
  }

  if (loading) {
    return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
  }

  return (
    <>
      {Array.isArray(items) && items.map((user, key) => (
        <Box sx={{ color: '#000000' }} key={key}>
          <div dangerouslySetInnerHTML={{ __html: showFullContent ? user.content : truncateContent(user.content) }}></div>
          {shouldRenderReadMore(user.content) && (
            <button className='readmore' onClick={() => setShowFullContent(!showFullContent)}>
              {showFullContent ? '...Read Less' : 'Read More...'}
            </button>
          )}
        </Box>
      ))}
    </>
  );
}

function truncateContent(content) {
  const MAX_LENGTH = 1000;
  if (content.length > MAX_LENGTH) {
    return content.slice(0, MAX_LENGTH) + "...";
  }
  return content;
}

function shouldRenderReadMore(content) {
  const MAX_LENGTH = 1000;
  return content.length > MAX_LENGTH;
}