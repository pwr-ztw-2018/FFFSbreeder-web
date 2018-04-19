/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';
import { BASE_URL, WELCOME_PATH } from "utils/apiEndpoints";

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      message: "initial message"
    };
  }
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.fetchMessage()
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  fetchMessage() {
    fetch(BASE_URL + WELCOME_PATH).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        message: data.message
      })
    }).catch((error) => {
      this.setState({
        message: error
      })
    });
  }

  render() {
    // const { loading, error, repos } = this.props;

    return (
      <article>
        <Helmet>
          <title>Strona główna</title>
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Witaj w aplikacji FFFS Breeder</h2>
            <p>aplikacji dla hodowców zwierząt</p>
            <span>{ this.state.message }</span>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
