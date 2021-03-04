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
import BusinessCard from "../components/BusinessCard";
import React from "react";
import ImageGallery from "react-image-gallery";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import BusinessCarousel from "../components/BusinessCarousel";
import "react-multi-carousel/lib/styles.css";

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
  recommended: {
    padding: "16px",
    backgroundColor: theme.palette.secondary.light,
  },
}));

const BusinessSite = ({ business }) => {
  const classes = useStyles();
  let images = business.sample_images.split(",");
  images = images.map((item) => ({ original: item, thumbnail: item }));

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
                <ImageGallery items={images} showPlayButton={false} />
              )}
              <section className="about-business">
                <Typography variant="h5" component="h2">
                  About This Business:
                </Typography>
                <Typography>{business.business_description}</Typography>
              </section>
              <Paper component="section" className={classes.recommended}>
                <Typography variant="h5" component="h2">
                  Similar businesses:
                </Typography>
                {/* <BusinessCarousel /> */}
                {/* <Grid container spacing={2}>
                  {[business, business, business].map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                      <BusinessCard dbObject={item} mini={true} />
                    </Grid>
                  ))}
                </Grid> */}
              </Paper>
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
      "https://firebasestorage.googleapis.com/v0/b/app-soplugged.appspot.com/o/3293F8C8-E5B9-4CA5-A2E6-8FA8DE6383D5.jpeg?alt=media&token=4396cb81-9bb9-4a26-914b-8fb612e28612,https://firebasestorage.googleapis.com/v0/b/app-soplugged.appspot.com/o/6977CA2E-0CCC-4BD6-B22E-820CD04B8F6F.jpeg?alt=media&token=75c18b2a-0409-4c12-83a6-8aeb7b7309e4,https://firebasestorage.googleapis.com/v0/b/app-soplugged.appspot.com/o/ACD38B08-1776-4A7E-A50A-DE866E287BD1.jpeg?alt=media&token=fa961593-fcf4-4eed-b32f-5721c128960b",
    category: "Hair / Beauty",
    tags: "",
    services: [],
  };
  return {
    props: { business: serverRes }, // will be passed to the page component as props
  };
}

export default BusinessSite;
