import React from 'react';
import PropTypes from 'prop-types';
import { EPROTONOSUPPORT } from 'constants';

const AppHeader = props => {
  return (
    <div>
      <div className="app-header">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppHeader;