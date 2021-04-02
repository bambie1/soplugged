import {
  Container,
  Grid,
  Typography,
  makeStyles,
} from "../components/mui-components";
import React from "react";
import BlogPostCard from "../components/BlogPostCard";
import SEO from "@/components/SEO";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    marginTop: "16px",
    marginBottom: "16px",
  },
  postsDiv: {
    display: "flex",
  },
}));

const Blogs = ({ posts }) => {
  const classes = useStyles();

  return (
    <>
      <SEO
        title="Welcome to Our Blog | SoPlugged"
        description="Hi, I’m Nina - creator, and founder of SoPlugged! On the blog, I
          share my experiences buying black and some tips that might be
          helpful for entrepreneurs or shopaholics like me. Let’s chat in the
          comment section!"
      />
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
    posts = [];
  }
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
export default Blogs;
