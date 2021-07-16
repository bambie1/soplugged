import SEO from "@components/SEO";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  textAlign: "center",
  background: "white",
  zIndex: "1",
  paddingTop: "60px",
};

const buttonStyle = {
  alignSelf: "center",
  background: "#4e3505",
  color: "white",
  padding: "8px",
  outline: "none",
  border: "1px solid transparent",
  borderRadius: "5px",
  fontFamily: "Raleway",
};

const Fallback = () => {
  return (
    <>
      <SEO
        title="SoPlugged | You are Offline"
        description="SoPlugged is an online platform that makes #buyingblack easy! Our
              search-friendly platform helps end-users connect to Black-owned
              businesses across Canada"
      />
      <div style={containerStyle}>
        <h1 style={{ fontWeight: "normal" }}>
          Uh-Oh! <br /> Looks like you're offline.
        </h1>
        <br />
        <p>We don't have much for you, but you can head to our home page</p>

        <button style={buttonStyle}>
          <a href="/">Back to Home Page</a>
        </button>
      </div>
    </>
  );
};

export default Fallback;
