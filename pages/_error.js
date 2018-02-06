import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from '../constants/styles';
import Wrapper from '../components/Wrapper';

export default class Error extends Component {
  static getInitialProps({ res }) {
    const statusCode = res ? res.statusCode : null;
    const title = statusCode ? `${statusCode}` : 'Error';
    const data = {
      title,
      header: title,
    };
    return { statusCode, data };
  }

  render() {
    const { data, statusCode } = this.props;
    return (
      <Wrapper data={data}>
        <p>{statusCode
        ? `A ${statusCode} error occurred.`
        : 'An error occured.'}
          <span role="img" aria-label="Dizzy Face"> 😵</span>
        </p>
        <p>Return <a href="/" className={`${styles.link}`}>home</a>?</p>
      </Wrapper>
    );
  }
}

Error.propTypes = {
  data: PropTypes.object,
  statusCode: PropTypes.string,
};
