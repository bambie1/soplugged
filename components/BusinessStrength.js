import { Box, CircularProgress, Typography } from "./mui-components";

const BusinessStrength = ({ value }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={value} color="secondary" />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          // color="textSecondary"
        >{`${value}%`}</Typography>
      </Box>
    </Box>
  );
};

export default BusinessStrength;
