import React, { useContext } from "react";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Typography, Link, Button, Grid } from "@mui/material";
import SnackBarContext from "../../other/context/snackBars/SnackBarContext";

import RegisterBoxStyle from "./RegisterBoxStyle";
import MyTextfield from "../../atoms/textfield/MyTextfield";
import { UserService } from "../../../services/UserService";

interface FormValues {
  username: string;
  password: string;
}

const validationSchema = yup.object().shape({
  username: yup.string().required("enterusername"),
  password: yup.string().required("enterpassword").min(8, "errorpassword"),
});

export default function RegisterBox() {
  const navigate = useNavigate();
  const { showSnackBar } = useContext(SnackBarContext);

  return (
    <Box sx={RegisterBoxStyle.box}>
      <Grid item sx={RegisterBoxStyle.header}>
        <Typography>
          <h2>Register</h2>
        </Typography>
      </Grid>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(
          values: FormValues,
          formikHelpers: FormikHelpers<FormValues>
        ) => {
          UserService()
            .createUser(values.username, values.password)
            .then((res) => {
              navigate("/login/");
            })
            .catch((error) => {
              showSnackBar("Invalid Entry", "error");
            });
          formikHelpers.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form noValidate autoComplete="off">
            <Grid item sx={RegisterBoxStyle.field}>
              <Field name="username" label="username" component={MyTextfield} />
              <Field
                name="password"
                label="password"
                type="password"
                component={MyTextfield}
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={formikProps.isSubmitting}
              >
                Register
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
      <Typography>
        <Link
          component="button"
          variant="body2"
          sx={{ color: "#444444", ml: "10%" }}
          onClick={() => navigate("/")}
        >
          "Already have an Account? Login Here."
        </Link>
      </Typography>
    </Box>
  );
}
