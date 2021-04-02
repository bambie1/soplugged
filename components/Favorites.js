import React, { useState } from "react";
import { Grid, Typography, makeStyles, useMediaQuery } from "./mui-components";
import Image from "next/image";
import BusinessCard from "./BusinessCard";
import PaginationBar from "./Pagination";

const useStyles = makeStyles((theme) => ({
  favorites: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1",
    flexDirection: "column",
  },
  noFavorites: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  desktop: {
    marginTop: "16px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginTop: "auto",
    },
  },
}));

const Favorites = ({ data }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const matches = useMediaQuery("(min-width:960px)");
  let pageLimit = matches ? 6 : 4;
  const indexOfLastItem = currentPage * pageLimit;
  const indexOfFirstItem = indexOfLastItem - pageLimit;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Typography variant="h1" gutterBottom={true} align="center">
        Favorites
      </Typography>
      <br></br>
      {data?.length > 0 ? (
        <div className={classes.favorites}>
          <Grid container spacing={2}>
            {currentItems.map((item, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={6} md={4}>
                  <BusinessCard dbObject={item.liked_business} mini={true} />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          {pageLimit < data.length && (
            <div className={classes.desktop}>
              <PaginationBar
                totalCount={data.length}
                pageLimit={pageLimit}
                handleClick={(page) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
      ) : (
        <div className={classes.noFavorites}>
          <Image
            src="/images/Checklist_Monochromatic.svg"
            alt="empty clipboard"
            width={300}
            height={300}
          />
          <Typography variant="h6" gutterBottom={true}>
            No favorites found
          </Typography>
          <Typography variant="body1">
            When you 'Like' a business, it will get added here.
          </Typography>
        </div>
      )}
    </>
  );
};

export default Favorites;
