import { Box, Button, TextField } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import "./Style.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
});

export default function SignupForm() {
  const navigate = useNavigate();

  const handleSignup = async (values, { setSubmitting }) => {
    let result = await fetch('http://54.198.103.11/signup', {
      method: 'post',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    result = await result.json();

    if (result.email) {
      alert('Signup success');

      localStorage.setItem('user', JSON.stringify(result));
      localStorage.setItem('token', JSON.stringify(result.auth));
      navigate('/loginuser', { replace: true });
      navigate(0);
    } else {
      alert('Signup failed. Please try again.');
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSignup}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box spacing={3} className='inputFIn2'>
            <Field
              as={TextField}
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Field
              as={TextField}
              name="email"
              label="Email address"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Field
              as={TextField}
              name="password"
              variant="outlined"
              label="Password"
              fullWidth
              margin="normal"
              type="password"
            />
          </Box>

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
}
