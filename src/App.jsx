import React from 'react';

import { useEffect } from 'react';

import AOS from 'aos';

import Crypto from './components/coini';
import './assets/scss/theme.scss';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Crypto />
    </>
  );
};

export default App;
