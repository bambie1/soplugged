import {
  Button,
  Container,
  Typography,
  makeStyles,
} from "@material/mui-components";
import Link from "next/link";
import { ErrorIcon } from "@material/mui-icons";
import { SEO } from "@components/index";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "16px",
    background: theme.palette.secondary.light,
    "& > *": {
      margin: "8px auto",
    },
  },
  page: {
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    zIndex: "1",
    background: "white",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <>
      <SEO title="404 Page not found" />
      <main className={classes.page}>
        <Container maxWidth="md" className={classes.container}>
          <ErrorIcon style={{ fontSize: "5vh", color: "#bb6969" }} />
          <Typography variant="h1">Oops!</Typography>
          <Typography variant="h6" component="h2">
            The url you've reached doesn't exist.
          </Typography>
          <Link href="/search">
            <a>
              <Button variant="contained">Return to Directory</Button>
            </a>
          </Link>
        </Container>
      </main>
    </>
  );
};

export default NotFound;
