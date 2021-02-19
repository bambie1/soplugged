import { Button, Typography, Container } from "@material-ui/core";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="page">
      <Container maxWidth="md" className="container">
        <Typography variant="h4">Oops!</Typography>
        <Typography variant="h6">
          The url you've reached doesn't exist.
        </Typography>
        <Button variant="contained">
          <Link href="/">
            <a>Return to Home Page</a>
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
