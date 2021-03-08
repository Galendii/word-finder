// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './Layout/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';
import Main from './Pages/Main';

const App: React.FC = () => {
  return (
    <>
      <Main />
      <GlobalStyles />
      <ToastContainer />
    </>
  );
};

export default App;
