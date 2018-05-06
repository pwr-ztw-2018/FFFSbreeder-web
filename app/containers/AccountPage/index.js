import React from 'react';
import { Helmet } from 'react-helmet';

import './style.scss';

export default function AccountPage() {
  return (
    <article className="account">
      <Helmet>
        <title>Moje konto</title>
      </Helmet>

      <section>
        <h1>Moje konto</h1>
        <form className="form">

          <div className="columns">
            <div className="column label has-text-right">
              Imię i nazwisko
            </div>
            <div className="column field">
              <p className="control">
                <input className="input" type="text" />
              </p>
            </div>
          </div>

          <div className="columns">
            <div className="column label has-text-right">
              Email
            </div>
            <div className="column field">
              <p className="control">
                <input className="input" type="email" />
              </p>
            </div>
          </div>

          <div className="columns">
            <div className="column label has-text-right">
              Nazwa miotu
            </div>
            <div className="column field">
              <p className="control">
                <input className="input" type="text" />
              </p>
            </div>
          </div>

          <div className="columns">
            <div className="column label has-text-right">
              Hasło
            </div>
            <div className="column field">
              <p className="control">
                <input className="input" type="password" />
              </p>
            </div>
          </div>

          <div className="columns">
            <div className="column label has-text-right">
              Nowe hasło
            </div>
            <div className="column field">
              <p className="control">
                <input className="input" type="password" />
              </p>
            </div>
          </div>

          <button className="button">Wyślij</button>

        </form>
      </section>
    </article>
  );
}
