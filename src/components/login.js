import React from 'react';
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const paperStyle = {
  padding: 20,
  height: '70vh',
  width: 280,
  margin: '20px auto',
};
const btnStyle = { margin: '8px 0' };
const avatarStyle = { backgroundColor: 'green' };
const textStyle = { margin: '5px 0' };

const Login = () => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          style={textStyle}
          label='Username'
          placeholder='Enter username'
          fullWidth
          required
          size='small'
          variant='standard'
        />
        <TextField
          style={textStyle}
          label='Password'
          placeholder='Enter password'
          type='password'
          fullWidth
          required
          size='small'
          variant='standard'
        />
        <FormControlLabel
          control={<Checkbox name='CheckedB' color='primary' />}
          label='Remember me'
        />
        <Button
          type='submit'
          color='primary'
          variant='contained'
          fullWidth
          style={btnStyle}
        >
          Sign In
        </Button>
        <Typography>
          <Link href='#' underline='none'>
            Forgot password?
          </Link>
        </Typography>
        <Typography>
          {' '}
          Do you have an account?
          {'  '}
          <Link href='#' underline='none'>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
