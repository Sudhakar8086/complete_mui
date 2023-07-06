import React from 'react';
import './App.css';
import Login from '../src/components/login';
import SignUp from '../src/components/signup';
import SignInOutContainer from '../src/containers/index';
function App() {
  return (
    <div className='App'>
      <SignInOutContainer />
    </div>
  );
}

export default App;
