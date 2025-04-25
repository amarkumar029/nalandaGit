import React from "react";
import {
  Grid
} from '@mui/material';

// reactstrap components
import DemoNavbar from "components/Navbars/DemoNavbar";
import CardsFooter from "components/Footers/CardsFooter";
import { Container } from "reactstrap";
import { gridSpacing } from '../../store/constant';
import Notice from "components/section/Notice";
import background from "../../assets/img/IMG_5515.jpg";

function Rti () {
  return (
    <>
      <DemoNavbar />
        <div className="top_site_main" style={{ backgroundImage: `url(${background})` }}>
          <h2>RIGHT TO INFORMATION</h2>
        </div>
        <main className="section-main">
          <Container>
            <section className="section pt-5">
              <Container>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} md={6}>
                    <div className="text-center academic">
                      <h4 className="heading mb-1"><span>RTI</span></h4>
                      <div className="title-border"></div>
                    </div>
                    <Notice sentFrom="resultRti" />
                  </Grid>
                </Grid>
              </Container>
            </section>
          </Container>
        </main>
      <CardsFooter />
    </>
  );
}

export default Rti;