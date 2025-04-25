import { useEffect, useState } from "react";
import {Box} from '@mui/material';
import axios from "axios";
import baseUrl from "../../navigation/base";
import loadings from "../../assets/img/loader.gif";

export default function Content (props) {

  const [items, setitems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if(props.sentFrom==="resultFtrabout"){
    getItemsNotice(`${baseUrl}/cms?type=Footer`);
    }
    if(props.sentFrom==="resultAbout"){
    getItemsNotice(`${baseUrl}/cms?type=About`);
    }
    if(props.sentFrom==="resultAdmission"){
    getItemsNotice(`${baseUrl}/cms?type=Admission`);
    }
    if(props.sentFrom==="resultExamination"){
    getItemsNotice(`${baseUrl}/cms?type=Examination`);
    }
    if(props.sentFrom==="resultHyperlink"){
    getItemsNotice(`${baseUrl}/cms?type=Hyperlink Policy`);
    }
    if(props.sentFrom==="resultPrivacy"){
    getItemsNotice(`${baseUrl}/cms?type=Privacy Policy`);
    }
    if(props.sentFrom==="resultTerms"){
    getItemsNotice(`${baseUrl}/cms?type=Terms and Conditions`);
    }
    if(props.sentFrom==="resultContact"){
    getItemsNotice(`${baseUrl}/cms?type=Contact`);
    }
    if(props.sentFrom==="resultAcademicCalender"){
      getItemsNotice(`${baseUrl}/cms?type=Academic Calender`);
    }
  },[props]);

  function getItemsNotice(url) {
    setLoading(true);
    axios.get(url).then(function(response) {
      setLoading(false);
      // console.log(response.data);
      setitems(response.data);
    });
  }

  if (loading) {
      // Display a loading indicator
      return <div className="text-center"><img width="120" src={loadings} alt="Loading..." /></div>;
  }

  return (
    <>
      {Array.isArray(items) && items.map((user, key) =>
        <Box sx={{color: '#000000'}} key={key}>
          <div dangerouslySetInnerHTML={{ __html: user.content}}></div>
        </Box>
      )}
    </>
  );
}