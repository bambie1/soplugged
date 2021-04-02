import React from "react";
import { Paper, Typography, makeStyles, Box } from "./mui-components";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: "16px 0px",
    borderTop: "1px solid #cdb693",
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
    <Paper>
      <Box display="flex" justifyContent="center" p={2}>
        <a
          href={post.link}
          target="_blank"
          rel="noopener"
          className={classes.cardLink}
        >
          <Image src={imgSrc} alt="" height={300} width={500} />
          <Typography variant="h6" className={classes.title} noWrap>
            {post.title}
          </Typography>
        </a>
      </Box>
    </Paper>
  );
};

export default BlogPostCard;
