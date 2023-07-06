import React from 'react';

const SignInOutContainer = () => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label='disabled tabs example'
    >
      <Tab label='Active' />
      <Tab label='Disabled' disabled />
      <Tab label='Active' />
    </Tabs>
  );
};

export default SignInOutContainer;
