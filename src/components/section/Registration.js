import React, { useState } from "react";
// import axios from "axios";
import baseUrl from "../../navigation/base";
// import { useNavigate } from "react-router-dom";
import { Card,CardContent,Grid,FormGroup,Box,TextField } from '@mui/material';
import { gridSpacing } from '../../store/constant';
import DemoNavbar from "components/Navbars/DemoNavbar";
import CardsFooter from "components/Footers/CardsFooter";
import PageBanner from "components/section/PageBanner";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../store/contexts";

export default function Registration() {
  const [itemDetails, setItemDetails] = useState({
    userName: "",
    password: "",
  });

  const onChangeItemDetails = (key, value) => {   
    var arr = { ...itemDetails };
    arr[key] = value;
    setItemDetails((prevState) => arr);
  };

  const handleOnAddItem = (e)=>{
    e.preventDefault();
    console.log("your form value is ", itemDetails)
    alert(`${baseUrl}/api/guestFaculty`);
  };

  return (
    <React.Fragment>
      <DemoNavbar />
      <PageBanner sentFrom="resultGuestFaculty" />
      <main className="section-main bg-light-gray">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4}>
            <Card className="bg-secondary border-1 pt-2">
              <CardContent>
                <FormGroup className="mb-3">
                  <TextField fullWidth 
                    label="Username"
                    defaultValue={itemDetails.userName}
                    onChange={(e) =>
                      onChangeItemDetails("userName", e.target.value)
                    }
                    size="small"
                  />
                </FormGroup>
                <FormGroup>
                  <TextField fullWidth 
                    label="password"
                    defaultValue={itemDetails.password}
                    onChange={(e) =>
                      onChangeItemDetails("password", e.target.value)
                    }
                    size="small"
                  />
                </FormGroup>
                <Box sx={{textAlign: 'center', marginTop: 2}}>
                  <button
                    // color="primary"  
                    // variant="contained"
                    className="btn btn-success"
                    onClick={handleOnAddItem}
                  >
                    Save
                  </button>
                  <Link className="btn btn-warning" to="/register-guest-faculty">Register Guest Faculty</Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
      <CardsFooter />
    </React.Fragment>
  );
}