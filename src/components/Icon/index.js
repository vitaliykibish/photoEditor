import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './styles.scss';

const propTypes = {
  icon: PropTypes.string,
  handle: PropTypes.func,
};

const Icon = ({ icon, handle }) => {
  const getIconType = (iconType) => {
    switch (iconType) {
      case 'plus':
        return '&#43;';
      case 'close':
        return '&#215;';
      default:
        return '&#128169;';
    }
  };

  return (
    <span className="icon" onClick={handle}>
      <i dangerouslySetInnerHTML={{__html: getIconType(icon)}} />
    </span>
  );
};

Icon.propTypes = propTypes;

export default Icon;
