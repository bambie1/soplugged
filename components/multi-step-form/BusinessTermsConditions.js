import { useRouter } from "next/router";
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
  useMediaQuery,
  FormControlLabel,
  Checkbox,
  FormGroup,
  TextField,
} from "@material/mui-components";
import { Autocomplete } from "@material/mui-lab";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialog: {
    "& > .MuiBackdrop-root": {
      backdropFilter: "blur(3px)",
      backgroundColor: "rgb(86 86 86 / 67%)",
    },
  },
}));

const referralSources = [
  "Instagram (@sopluggd)",
  "Google search",
  "Someone told me about it",
  "LinkedIn",
  "Other",
];

export default function BusinessTermsConditions({ handleAgree }) {
  const [open, setOpen] = React.useState(true);
  const [isBlackOwner, setIsBlackOwner] = React.useState(false);
  const [isCanadianBusiness, setIsCanadianBusiness] = React.useState(false);
  const [hasAgreedToTerms, setHasAgreedToTerms] = React.useState(false);
  const [referralSource, setReferralSource] = React.useState("");
  const [otherReferral, setOtherReferral] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = (prop) => {
    if (prop == "accepted") {
      setOpen(false);
      handleAgree();
    } else if (prop == "rejected") router.push("/search");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.dialog}
      scroll="paper"
      maxWidth="md"
      fullScreen={fullScreen}
    >
      <DialogTitle id="alert-dialog-title">
        {"Welcome to SoPlugged"}
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2" gutterBottom={true}>
          The purpose of SoPlugged is to increase brand awareness of Black-owned
          businesses across Canada. We strive to provide a platform that
          connects end-users looking to #buyblack to the perfect business that
          meets their needs.{" "}
        </Typography>
        <Typography variant="body2" gutterBottom={true}>
          In order to maintain a respectful, inclusive, and safe environment for
          everyone, we’ve created a set of community guidelines to serve as a
          moral compass for behavior on our platform, define what is acceptable
          in the SoPlugged community, and explain how violations are enforced.
          They aren’t tied to any law, rather they reflect our expectations and
          are rooted in our mission to support the Black community in Canada!
        </Typography>
        <Typography variant="body2" gutterBottom={true}>
          We want to create the best experience for all community members, and
          ask that you respect and follow these guidelines:
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Business registration on SoPlugged is solely reserved for Black
              entrepreneurs in Canada.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              As you respond to potential customers, communicate respectfully.
              There will be zero tolerance for bullying.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Do not post any pictures or content that could be considered
              defamatory, indecent, hateful, racist, xenophobic, homophobic,
              sexist, disgraceful, vulgar, or inappropriate.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Respect the privacy and personal information of other community
              members.
            </Typography>
          </li>
        </ul>

        <Typography
          variant="body2"
          gutterBottom={true}
          style={{
            paddingTop: "16px",
            borderTop: "1px solid",
          }}
        >
          <strong>AGREEMENT:</strong> Please fill out the following
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isBlackOwner}
                onChange={(e) => setIsBlackOwner(e.target.checked)}
                name="isBlackOwner"
              />
            }
            label="I am a black entrepreneur"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isCanadianBusiness}
                onChange={(e) => setIsCanadianBusiness(e.target.checked)}
                name="isCanadianBusiness"
              />
            }
            label="I currently reside in Canada"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={hasAgreedToTerms}
                onChange={(e) => setHasAgreedToTerms(e.target.checked)}
                name="hasAgreedToTerms"
              />
            }
            label="I will adhere to the Community Guidelines"
          />
          <Autocomplete
            id="referral-source"
            value={referralSource}
            onChange={(event, newValue) => {
              setReferralSource(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={referralSources}
            style={{ maxWidth: 300, marginBottom: "16px", marginTop: "16px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="How did you hear about us?"
                variant="outlined"
                required
              />
            )}
          />
          {referralSource == "Other" && (
            <TextField
              variant="outlined"
              value={otherReferral}
              onChange={(e) => setOtherReferral(e.target.value)}
              label="Other Referral"
              style={{ maxWidth: 300, marginBottom: "16px" }}
            />
          )}
        </FormGroup>
        <Typography
          variant="body2"
          gutterBottom={true}
          style={{
            paddingTop: "16px",
            borderTop: "1px solid",
          }}
        >
          <strong>CONSEQUENCES:</strong> We will take action when we see someone
          violating these guidelines or if your business is flagged as non-Black
          owned. Sometimes that just means giving someone a warning; other times
          it means revoking certain privileges or removing your business from
          our site. We ask that all community members reach out to a member of
          our team to report any actions that violate these guidelines.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose("rejected")} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => handleClose("accepted")}
          color="primary"
          disabled={
            !(
              isBlackOwner &&
              isCanadianBusiness &&
              hasAgreedToTerms &&
              referralSource &&
              (referralSource == "Other" ? otherReferral : true)
            )
          }
          autoFocus
          variant="outlined"
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
