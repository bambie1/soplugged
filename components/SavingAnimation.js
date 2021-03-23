import { Typography } from "./mui-components";

const SavingAnimation = () => {
  return (
    <div
      className="backdrop"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "auto", textAlign: "center", width: "150px" }}>
        <div className="lds-grid">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
            <div key={x}></div>
          ))}
        </div>
        <Typography style={{ color: "white" }}>
          Updating your Business page
        </Typography>
      </div>
    </div>
  );
};

export default SavingAnimation;
