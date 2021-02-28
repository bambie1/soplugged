import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  Button,
  Typography,
  FormControl,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import MultiStepLayout from "../../components/MultiStepLayout";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiFormControl-root": {
      width: "100%",
      marginTop: "8px",
      marginBottom: "8px",
    },
  },
}));

const BusinessInfo = ({ submitHandler }) => {
  const classes = useStyles();
  const currentUser = null;
  const currentBusiness = {};
  const router = useRouter();
  const { register, handleSubmit, errors, watch } = useForm();
  const [infoChanged, setInfoChanged] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    router.push("/my-business/step5");
  };

  return (
    <MultiStepLayout step={4}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={classes.form}
      >
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="url" error={!!errors.businessUrl}>
            Business Page
          </InputLabel>
          <OutlinedInput
            id="url"
            startAdornment={
              <InputAdornment position="start">http://</InputAdornment>
            }
            labelWidth={120}
            placeholder="www.businesspage.com (optional)"
            defaultValue={currentBusiness?.business_url}
            name="businessUrl"
            inputRef={register({
              pattern: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
            })}
            error={!!errors.businessUrl}
            onChange={(e) => {
              setInfoChanged(
                !(e.target.value === currentBusiness?.business_url)
              );
            }}
          />
          <FormHelperText error={!!errors.businessUrl}>
            {!!errors.businessUrl
              ? "Please enter a valid url"
              : "Cusomers will be taken to this page to view your business"}
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="igHandle" error={!!errors.igHandle}>
            Instagram Handle
          </InputLabel>
          <OutlinedInput
            id="igHandle"
            startAdornment={<InputAdornment position="start">@</InputAdornment>}
            labelWidth={130}
            placeholder="Instagram account (optional)"
            defaultValue={currentBusiness?.ig_handle}
            name="igHandle"
            error={!!errors.igHandle}
            inputRef={register({
              pattern: /^\S*$/,
            })}
            onChange={() => {
              setInfoChanged(true);
            }}
          />
          <FormHelperText error={!!errors.igHandle}>
            {!!errors.igHandle && "IG Handle cannot have spaces"}
          </FormHelperText>
        </FormControl>
        <Button variant="contained" type="submit">
          Continue
        </Button>
      </Form>
    </MultiStepLayout>
  );
};

export default BusinessInfo;
