import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './styles.scss';

const propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  tooltip: PropTypes.string,
  showTooltip: PropTypes.bool,
};

const Tooltip = ({ x, y, showTooltip, tooltip }) => {
  const style = {
    display: (showTooltip && tooltip) ? 'block' : 'none',
    top: `${y}px`,
    left: `${x}px`,
  };

  return (
    <div className="tooltip" style={style}>
      { tooltip }
    </div>
  );
};

Tooltip.propTypes = propTypes;

export default Tooltip;
