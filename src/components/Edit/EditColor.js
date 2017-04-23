import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './styles.scss';

const propTypes = {
  changeColor: PropTypes.func,
};

const EditColor = ({ changeColor }) => (
  <div className="edit-color">
    <ul>
      <li>
        <button data-color="red" onClick={changeColor}>
          red
        </button>
      </li>
      <li>
        <button data-color="green" onClick={changeColor}>
          green
        </button>
      </li>
      <li>
        <button data-color="blue" onClick={changeColor}>
          blue
        </button>
      </li>
      <li>
        <button data-color="" onClick={changeColor}>
          raw
        </button>
      </li>
    </ul>
  </div>
);

EditColor.propTypes = propTypes;

export default EditColor;
