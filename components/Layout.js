import Footer from "./Footer";
import Header from "./Header";
import { CircularProgress } from "./mui-components";
import { Alert } from "./mui-lab";

const Layout = ({ children }) => {
  return (
    <div className="layout-div">
      <Header />
      <div id="content">{children}</div>
      <div id="loading">
        <div style={{ maxWidth: "450px" }}>
          <Alert severity="info" style={{ marginBottom: "16px" }}>
            We'll just be a second while we load the page for you
          </Alert>
          <CircularProgress color="secondary" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
