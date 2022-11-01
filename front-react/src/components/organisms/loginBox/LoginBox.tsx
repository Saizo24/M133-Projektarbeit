import { Grid, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LoginButton from "../../atoms/buttons/LoginButton";
import LoginBoxStyle from "./LoginBoxStyle";
import * as yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SnackBarContext from "../../other/context/snackBars/SnackBarContext";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { AuthService } from "../../../services/AuthService";
import Link from "@mui/material/Link";
import MyTextfield from "../../atoms/textfield/MyTextfield";

interface FormValues {
  username: string;
  password: string;
}

const validationSchema = yup.object().shape({
  username: yup.string().required("Please enter your Username"),
  password: yup.string().required("Please enter your Password"),
});

const LoginBox = () => {
  const navigate = useNavigate();
  const { showSnackBar } = useContext(SnackBarContext);

  return (
    <Box sx={LoginBoxStyle.box}>
      <Grid item sx={LoginBoxStyle.header}>
        <Typography>
          <h2>Login</h2>
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
          AuthService()
            .login(values)
            .then((response) => {
              navigate("/browse-galleries/");
            })
            .catch((error) => {
              showSnackBar("Username or password wrong", "error");
            });
          formikHelpers.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form noValidate autoComplete="off">
            <Grid item sx={LoginBoxStyle.field}>
              <Field
                name="username"
                label={"Username"}
                component={MyTextfield}
              />
              <Field
                name="password"
                label={"Password"}
                type="password"
                component={MyTextfield}
              />
              <LoginButton
                text="Login"
                disabled={formikProps.isSubmitting}
              ></LoginButton>
            </Grid>
          </Form>
        )}
      </Formik>
      <Grid item sx={LoginBoxStyle.bottom}>
        <Typography>
          <p>No Account yet? </p>
          <Link underline="hover" href="/register">
            Sign up here!
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
};

export default LoginBox;
