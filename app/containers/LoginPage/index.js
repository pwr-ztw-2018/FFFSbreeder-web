import React from 'react';
import { Helmet } from 'react-helmet';

import './style.scss';

export default function LoginPage() {
  return (
    <article className="login">
      <Helmet>
        <title>Strona logowania</title>
      </Helmet>

      <section>
        <h1 className="has-text-centered">Zaloguj się</h1>
        <form className="form">

          <div className="field">
            <p className="control">
              <input className="input" type="email" placeholder="Email" />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <input className="input" type="password" placeholder="Hasło" />
            </p>
          </div>

          <button className="button">Wyślij</button>

        </form>
      </section>
    </article>
  );
}
