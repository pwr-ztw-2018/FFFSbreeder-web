import React from 'react';
import { Helmet } from 'react-helmet';

import './style.scss';

export default function LoginPage() {
  return (
    <article>
      <Helmet>
        <title>Strona logowania</title>
      </Helmet>
      <h1>Strona do logowania.</h1>
    </article>
  );
}
