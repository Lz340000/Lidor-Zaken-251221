import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import ErrorBoundary from 'errorHandler';
import AppShell from 'appShell';
import Loader from 'components/loader';

const Wrapper = ({ children }) => {
  return <AppShell>{children}</AppShell>;
};

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Wrapper>
          <Loader />
          <Routes />
        </Wrapper>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
