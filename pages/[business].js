import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BusinessCarousel from "../components/BusinessCarousel";
import Modal from "../components/Modal";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: "8px",
    },
  },
  owner: {
    padding: "16px 8px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "8px",
    alignItems: "center",
    "& > *": {
      margin: "8px 0px",
    },
  },
}));

const BusinessSite = ({ business }) => {
  const classes = useStyles();
  const images = business.sample_images.split(",");
  const [imageSelected, setImageSelected] = React.useState(null);

  return business ? (
    <>
      <Head>
        <title> {`${business.business_name} | SoPlugged`}</title>
        <meta name="description" content={business.business_description} />
      </Head>
      <main className="page">
        <Container className={classes.container}>
          <Typography variant="h1" style={{ textAlign: "center" }}>
            {business.business_name.toUpperCase()}
          </Typography>
          <Typography>{business.category}</Typography>
          <Typography>{`Location: ${business.business_location}`}</Typography>
          {!business.fixed_to_one_location && (
            <Typography>CANADA-WIDE</Typography>
          )}
          <div className="contentGrid">
            <div className="business-section">
              {images.length !== 0 && images[0].length !== 0 && (
                <Carousel>
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="business-image-div"
                      onClick={() => setImageSelected(img)}
                    >
                      <img
                        className="business-image"
                        src={img}
                        alt="business-display"
                      />
                    </div>
                  ))}
                </Carousel>
              )}
              <Typography>{business.business_description}</Typography>
              {/* <BusinessCarousel businessList={[business, business, business]} /> */}
            </div>
            <aside className="owner-section">
              <Paper elevation={2} className={classes.owner}>
                <Avatar
                  alt="Business owner profile"
                  src={business.owner_url}
                ></Avatar>
                <Typography>{business.owner_name.toUpperCase()}</Typography>
                <Typography>From: Canada</Typography>
              </Paper>
              <Button variant="contained" color="secondary">
                Contact owner
              </Button>
            </aside>
          </div>
        </Container>
        {imageSelected && (
          <Modal
            component={
              <img src={imageSelected} alt="" style={{ maxWidth: "100%" }} />
            }
            closeModal={setImageSelected}
          />
        )}
      </main>
    </>
  ) : (
    <p>No business here</p>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.params);
  const serverRes = {
    id: 10,
    owner_name: "Ifedoyin Adeleke",
    email: "ifedoyinawe@gmail.com",
    phone_number: "4444444444",
    business_name: "The Hair Essence",
    business_url: "www.etsy.com",
    ig_handle: "",
    street_address: "",
    business_location: "Toronto, ON, Canada",
    fixed_to_one_location: true,
    business_description: "Custom Wig Maker",
    logo_url:
      "https://firebasestorage.googleapis.com/v0/b/app-soplugged.appspot.com/o/59DCA21F-6498-4862-8C9E-3DFD1AB980F3.png?alt=media&token=69dc874e-bd4f-4bc3-b1d7-c30feb56bdf2",
    sample_images:
      "https://firebasestorage.googleapis.com/v0/b/app-soplugged.appspot.com/o/2.%20Valentine's%20day%20gift%20idea.%20Calming%20Spa%20Day%20Gift%20Box.jpg?alt=media&token=96a17cc2-2eb7-409f-8172-dbf34b66c190,https://firebasestorage.googleapis.com/v0/b/app-soplugged.appspot.com/o/BoxF1.jpg?alt=media&token=204ef4f5-7538-4e66-9c0d-560ae339b65e,https://firebasestorage.googleapis.com/v0/b/app-soplugged.appspot.com/o/7B%20(1).jpg?alt=media&token=72617bb0-8884-47f4-93fd-453835ffe6a0",
    category: "Hair / Beauty",
    tags: "",
    services: [],
  };
  return {
    props: { business: serverRes }, // will be passed to the page component as props
  };
}

export default BusinessSite;
