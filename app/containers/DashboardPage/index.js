import React from 'react';
import { Helmet } from 'react-helmet';
import image from 'assets/images/placeholder.jpg';
import './style.scss';

export default function DashboardPage() {
  return (
    <article className="dashboard">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <section>
        <h1>Dashboard</h1>

        <div className="columns">

          <div className="litters list column">
            <div className="header">
              <span>Twoje mioty</span>
              <i className="fas fa-plus-square is-large" />
            </div>
            <div className="content">
              <div className="item columns is-gapless">
                <span className="column">miot 1</span>
              </div>
              <div className="item columns is-gapless">
                <span className="column">miot 2</span>
              </div>
              <div className="item columns is-gapless">
                <span className="column">miot 3</span>
              </div>
            </div>
          </div>


          <div className="animals list column">
            <div className="header">
              <span>Twoje zwierzęta</span>
              <i className="fas fa-plus-square is-large" />
            </div>
            <div className="content">
              <div className="item columns is-gapless">
                <span className="column has-text-centered">
                  <img src={image} alt="x" />
                </span>
                <span className="column has-text-left">Kasia</span>
                <span className="gender column has-text-left">
                  <i className="fas fa-venus" />
                </span>
              </div>
              <div className="item columns is-gapless">
                <span className="column has-text-centered">
                  <img src={image} alt="x" />
                </span>
                <span className="column has-text-left">Jacek</span>
                <span className="gender column has-text-left">
                  <i className="fas fa-mars" />
                </span>
              </div>
            </div>
          </div>

        </div>

      </section>
    </article>
  );
}
