import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@material-ui/core';

const SignupForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Name is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .min(3, 'Password must be at least 3 characters')
            .required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {

          console.log("valies",values);
          axios.post('http://54.226.69.38:3500/register', values)
            .then(response => {
              console.log('Signup successful!', response);
              alert("signup success")
              navigate('/login', { replace: true });

            })
            .catch(error => {
              console.error('Signup failed!', error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box spacing={3} className='inputFIn2'>
            <div>
              <Field
                as={TextField}
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="name" />
            </div>
            <div>
              <Field
                as={TextField}
                name="email"
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="email" />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="password" />
              
            </div>
            </Box>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
