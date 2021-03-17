import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import BlogPostCard from "../components/BlogPostCard";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    marginTop: "16px",
  },
  postsDiv: {
    display: "flex",
  },
}));

const Blogs = ({ posts }) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Blog | SoPlugged</title>
        <meta
          name="description"
          content="Hi, I’m Nina - creator, and founder of SoPlugged! On the blog, I
          share my experiences buying black and some tips that might be
          helpful for entrepreneurs or shopaholics like me. Let’s chat in the
          comment section!"
        />
      </Head>
      <main className="page" style={{ zIndex: "1", background: "white" }}>
        <Container className={classes.container}>
          <Typography variant="h1">Welcome to My Blog</Typography>
          <Typography style={{ margin: "32px auto", maxWidth: "700px" }}>
            Hi, I’m Nina - creator, and founder of SoPlugged! On the blog, I
            share my experiences buying black and some tips that might be
            helpful for entrepreneurs or shopaholics like me. Let’s chat in the
            comment section!
          </Typography>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.link}>
                <BlogPostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@soplugged";
  let posts = [];
  try {
    const response = await fetch(mediumURL);
    const data = await response.json();
    const res = data.items;
    posts = res.filter((item) => item.categories.length > 0);
  } catch (error) {
    console.log({ error });
  }
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
export default Blogs;
