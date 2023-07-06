import { Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { Avatar } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const headerStyle = { margin: 0 };
const textStyle = { margin: '5px 0' };
const avatarStyle = { backgroundColor: 'green' };
const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
const SignUp = () => {
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AccountCircleOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption'>
            {' '}
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <form>
          <TextField
            style={textStyle}
            fullWidth
            label='Name'
            placeholder='Enter your name'
            size='small'
            variant='standard'
          />
          <TextField
            style={textStyle}
            fullWidth
            label='Email'
            placeholder='Enter your email'
            size='small'
            variant='standard'
          />
          <FormControl>
            <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='radio-buttons-group'
              row
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
            </RadioGroup>
          </FormControl>
          <TextField
            style={textStyle}
            fullWidth
            label='Phone Number'
            placeholder='Enter your phone number'
            size='small'
            variant='standard'
          />
          <TextField
            style={textStyle}
            fullWidth
            label='Password'
            placeholder='Enter your password'
            size='small'
            variant='standard'
          />
          <TextField
            style={textStyle}
            fullWidth
            label='Confirm Password'
            placeholder='Confirm password'
            size='small'
            variant='standard'
          />
          <FormControlLabel
            control={
              <Checkbox
                name='CheckedA'
                sx={{
                  '&.Mui-checked': {
                    color: pink[600],
                  },
                }}
              />
            }
            label='I accept the Terms & Conditions'
          />
          <Button type='submit' color='primary' variant='contained'>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
