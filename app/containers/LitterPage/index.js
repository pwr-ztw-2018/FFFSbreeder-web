import React from 'react';
import { Helmet } from 'react-helmet';
import image from 'assets/images/placeholder.jpg';
import './style.scss';

export default function LitterPage() {
  return (
    <article className="litter">
      <Helmet>
        <title>Mioty</title>
      </Helmet>

      <section>
        <h1>Miot abcd</h1>

        <div className="columns">
          <div className="column has-text-right">
            Rodzice
          </div>
          <div className="column is-two-thirds">
            <div className="parents tile is-spaced is-parent is-horizontal">
              <div className="litter-tile tile is-child box">
                <div className="columns">
                  <div className="column">
                    <img src={image} alt="" />
                  </div>
                  <div className="column is-two-thirds">
                    <span>Kasia</span>
                    <i className="fas fa-venus" />
                    <div>z mojej hodowli</div>
                  </div>
                </div>
                <div className="columns">
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>

              <div className="litter-tile tile is-child box">
                <div className="columns">
                  <div className="column">
                    <img src={image} alt="" />
                  </div>
                  <div className="column is-two-thirds">
                    <span>Zenek</span>
                    <i className="fas fa-mars" />
                    <div>z obcej hodowli</div>
                  </div>
                </div>
                <div className="columns">
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column has-text-right">
            Data urodzenia
          </div>
          <div className="column is-two-thirds">
            20.07.2016
          </div>
        </div>

        <div className="columns">
          <div className="column has-text-right">
            Kolor
          </div>
          <div className="column is-two-thirds">
            cynamonowy
          </div>
        </div>

        <hr />

        <div className="children tile is-horizontal is-wrapped">
          <div className="litter-tile is-4 tile is-child box">
            <div className="columns">
              <div className="column">
                <img src={image} alt="" />
              </div>
              <div className="column is-two-thirds">
                <span>Zenek</span>
                <i className="fas fa-mars" />
                <div>z obcej hodowli</div>
              </div>
            </div>
            <div className="columns">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="litter-tile is-4 tile is-child box">
            <div className="columns">
              <div className="column">
                <img src={image} alt="" />
              </div>
              <div className="column is-two-thirds">
                <span>Zenek</span>
                <i className="fas fa-mars" />
                <div>z obcej hodowli</div>
              </div>
            </div>
            <div className="columns">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="litter-tile is-4 tile is-child box">
            <div className="columns">
              <div className="column">
                <img src={image} alt="" />
              </div>
              <div className="column is-two-thirds">
                <span>Zenek</span>
                <i className="fas fa-mars" />
                <div>z obcej hodowli</div>
              </div>
            </div>
            <div className="columns">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>


          <div className="litter-tile is-4 tile is-child box">
            <div className="columns">
              <div className="column">
                <img src={image} alt="" />
              </div>
              <div className="column is-two-thirds">
                <span>Zenek</span>
                <i className="fas fa-mars" />
                <div>z obcej hodowli</div>
              </div>
            </div>
            <div className="columns">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="litter-tile is-4 tile is-child box">
            <i className="fas fa-plus" />
          </div>

        </div>

      </section>
    </article>
  );
}
