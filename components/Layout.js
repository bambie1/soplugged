import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("./Footer"));
const DynamicHeader = dynamic(() => import("./Header"));
const DynamicProgress = dynamic(() =>
  import("@material/mui-components").then((mod) => mod.CircularProgress)
);
const DynamicAlert = dynamic(() =>
  import("@material/mui-lab").then((mod) => mod.Alert)
);

const Layout = ({ children }) => {
  return (
    <div className="layout-div"><DynamicHeader /><div id="content">{children}</div><div id="loading"><div style={{ maxWidth: "450px" }}><DynamicAlert severity="info" style={{ marginBottom: "16px" }}>We'll just be a second while we load the page for you</DynamicAlert><DynamicProgress color="secondary" aria-label="loading progress" /></div></div><DynamicFooter /></div>
  );
};

export default Layout;
