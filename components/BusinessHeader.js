import { makeStyles } from "@material/mui-components";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
    flexWrap: "wrap",
  }),
}));

const BusinessHeader = ({ children, props }) => {
  const classes = useStyles(props);
  return <div className={classes.root}>{children}</div>;
};

export default BusinessHeader;
