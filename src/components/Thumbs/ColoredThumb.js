import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string,
  color: PropTypes.string,
};

const ColoredThumb = ({ src, color }) => (
  <div className="thumb">
    <span className="thumb-bg" style={{ background: color }}/>
    <img src={src} />
  </div>
);

ColoredThumb.propTypes = propTypes;

export default ColoredThumb;
