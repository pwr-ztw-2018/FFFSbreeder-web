/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';
import Routes from 'containers/routes';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Breeder"
      defaultTitle="FFFS Breeder"
    >
    </Helmet>

    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;
