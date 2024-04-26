import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

function Registration() {
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({
    name: false,
    role: false,
    email: false,
    password: false,
    confirmPassword: false,
    contact: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Check if any field is empty
    let errors = {};
    let hasErrors = false;
    Object.keys(formErrors).forEach(field => {
      if (!data.get(field)) {
        errors[field] = true;
        hasErrors = true;
      }
    });
    setFormErrors(errors);

    // Check if password and confirm password match
    if (data.get('password') !== data.get('confirmPassword')) {
      setFormErrors(prevErrors => ({ ...prevErrors, confirmPassword: true }));
      hasErrors = true;
    }

    if (!hasErrors) {
      // Simulating successful registration with a timeout
      axios.post('http://localhost:8081/insert', {
        name: data.get('name'),
        role: data.get('role'),
        email: data.get('email'),
        password: data.get('password'),
        contact: data.get('contact')
      }).then((response) => {
        console.log(response.data);
        setRegistrationSuccess(true); 
      });
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {!registrationSuccess ? (
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={formErrors.name}
                    helperText={formErrors.name ? 'Name is required' : ''}
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    error={formErrors.role}
                    defaultValue={0}
                    id="role"
                    label="Role"
                    name="role"
                    required
                    fullWidth
                  >
                    <MenuItem value={0}>Select Your Role</MenuItem>
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>User</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={formErrors.contact}
                    helperText={formErrors.contact ? 'Contact is required' : ''}
                    autoComplete="tel"
                    name="contact"
                    required
                    fullWidth
                    id="contact"
                    label="Contact"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={formErrors.email}
                    helperText={formErrors.email ? 'Email is required' : ''}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={formErrors.password}
                    helperText={formErrors.password ? 'Password is required' : ''}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={formErrors.confirmPassword}
                    helperText={formErrors.confirmPassword ? 'Passwords do not match' : ''}
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                  />
                </Grid>
                
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Typography variant="body1" color="primary">
              Registration Successful!
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Registration;
