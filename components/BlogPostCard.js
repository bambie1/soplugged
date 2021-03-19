import React from "react";
import Link from "next/link";
import { Paper, Typography, makeStyles } from "./mui-components";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: "16px 0px",
    borderTop: "1px solid #cdb693",
  },
  card: {
    display: "flex",
    justifyContent: "center",
  },
  cardLink: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

const BlogPostCard = ({ post }) => {
  const classes = useStyles();
  let imgSrc =
    post.thumbnail || "https://dummyimage.com/600x400/c9c9c9/fff&text=...";
  return (
    <Paper className={classes.card}>
      <a
        href={post.link}
        target="_blank"
        rel="noopener"
        className={classes.cardLink}
      >
        <img
          src={imgSrc}
          alt=""
          style={{ maxWidth: "100%", height: "300px" }}
        />
        <Typography variant="h6" className={classes.title}>
          {post.title}
        </Typography>
      </a>
    </Paper>
  );
};

export default BlogPostCard;
