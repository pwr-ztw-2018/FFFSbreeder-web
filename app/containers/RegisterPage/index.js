import React from 'react';
import { Helmet } from 'react-helmet';

import './style.scss';

export default function RegisterPage() {
  return (
    <article className="register">
      <Helmet>
        <title>Rejestracja</title>
      </Helmet>

      <section>
        <h1 className="has-text-centered">Zarejestruj się</h1>
        <form className="form">

          <div className="field">
            <p className="control">
              <input className="input" type="email" placeholder="Email" />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <input className="input" type="text" placeholder="Imię oraz nazwisko" />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <input className="input" type="text" placeholder="Nazwa miotu" />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <input className="input" type="password" placeholder="Hasło" />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <input className="input" type="password" placeholder="Powtórz hasło" />
            </p>
          </div>

          <button className="button">Wyślij</button>

        </form>
      </section>
    </article>
  );
}
