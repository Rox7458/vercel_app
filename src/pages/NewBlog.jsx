import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import AuthHeader from "../components/AuthHeader";
import { Formik } from "formik";
import * as Yup from "yup";
import NewBlogForm from "../components/NewBlogForm";

const NewBlog = () => {
  const newBlogSchema = Yup.object().shape({
    title: Yup.string().min(2, "Too short!").max(50, "Too Long!").required("Required"),
    image: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    category: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    status: Yup.string().email("Invalid email").required("Required"),
    content: Yup.string().matches(/[a-z]/, "Password should include lowercase"),
  });
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.light">
            Register
          </Typography>

          <Formik
            initialValues={{
              categoryId: "",
              title: "",
              content: "",
              image: "",
              isPublish: "",
            }}
            validationSchema={newBlogSchema}
            onSubmit={(values) => register(values)}
            component={(props) => <NewBlogForm {...props} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewBlog;
