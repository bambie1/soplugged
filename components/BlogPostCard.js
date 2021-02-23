import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "8px 0px",
  },
  card: {
    display: "flex",
    justifyContent: "center",
  },
}));

const BlogPostCard = ({ post }) => {
  const classes = useStyles();
  let slug = post.title.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "").toLowerCase();
  slug = slug.replace(/\s+/g, "-");
  // console.log(slug);
  return (
    <Paper className={classes.card}>
      <a href={post.link} target="_blank">
        <img
          src={post.thumbnail}
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
