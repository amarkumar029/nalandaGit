import React, {useState} from "react";
import axios from "axios";
import baseUrl from "../../navigation/base";
import { useNavigate } from "react-router-dom";
import {Card,CardContent,Grid} from '@mui/material';
import { gridSpacing } from '../../store/constant';

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
} from "reactstrap";

export default function Forms() {

  //date
  var someDate = new Date();
  var numberOfDaysToAdd = 0;
  var date = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  var defaultValue = new Date(date).toISOString().split("T")[0];
  //date

  const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post(`${baseUrl}/api/applyNow/`, inputs).then(function(response){
      alert("Your Form Has Been Submited Successfully");
      setInputs({});
      // console.log(response.data);
      navigate('/');
      });
    }

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={4}>
        <Card className="bg-secondary border-1">
          <CardContent>
          {/* <CardContent className="px-lg-3 py-lg-2 customcardbody"> */}
            {/* <div className="text-center text-muted font-weight-bold pb-3 mb-4">
              <h4 className="title">Apply Now</h4>
            </div> */}
            <Form role="form" onSubmit={handleSubmit}>
              <Input
                type="hidden"
                id="date"
                name="date"
                defaultValue={defaultValue}
                onChange={handleChange}
              />
              <FormGroup>
                <Input
                  placeholder="Name *"
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Phone No *"
                  type="number"
                  name="mobile"
                  id="mobile"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Email Id *"
                  type="email"                  
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder="Address"
                  type="textarea"
                  name="address"
                  id="address"
                  onChange={handleChange}
                />
              </FormGroup>
              <Input
                placeholder="Query"
                type="textarea"
                name="query"
                id="query"
                onChange={handleChange}
              />
              {/* <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id="customCheckLogin2"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheckLogin2"
                >
                  <span>I Agree with <a href="/#">Terms & Conditions</a></span>
                </label>
              </div> */}
              <div className="text-center">
                <Button
                  className="my-3"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </Grid>
  );
}