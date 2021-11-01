import { Button, Container, makeStyles } from "@material/mui-components";
import Link from "next/link";
import { ErrorIcon } from "@material/mui-icons";
import { SEO } from "@components/index";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "16px",
    marginTop: "10vh",
    textAlign: "center",
    "& > *": {
      margin: "10px auto",
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <>
      <SEO title="404 Page not found" />
      <Container maxWidth="md" className={classes.container}>
        <ErrorIcon style={{ fontSize: "5vh", color: "#bb6969" }} />
        <h1>Oops!</h1>
        <h3>The url you've reached doesn't exist.</h3>
        <Link href="/search" passHref>
          <Button variant="contained">Return to Directory</Button>
        </Link>
      </Container>
    </>
  );
};

export default NotFound;
