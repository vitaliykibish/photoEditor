import React, { Component } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './styles.scss';

class AddThumb extends Component {
  static propTypes = {
    saveNewThumb: PropTypes.func,
  }

  state = {
    src: '',
    tooltip: '',
    error: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { saveNewThumb } = this.props;
    const { src, tooltip } = this.state;

    if (!src || !tooltip) {
      this.setState({ error: true });

      return;
    }

    const id = Math.random().toString();

    saveNewThumb({ id, src, tooltip });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  renderErrorMsg = (error) => {
    if (!error) {
      return null;
    }

    return (
      <span className="error">
        all fields should be filled
      </span>
    );
  }

  resetErrorMsg = () => {
    const { error } = this.state;

    if (!error) {
      return;
    }

    this.setState({ error: false });
  }

  render() {
    const { src, tooltip, error } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Link</span>
          <input
            type="text"
            name="src"
            value={src}
            onFocus={this.resetErrorMsg}
            onChange={this.handleInputChange} />
        </label>
        <label>
          <span>Tooltip</span>
          <input
            type="text"
            name="tooltip"
            value={tooltip}
            onFocus={this.resetErrorMsg}
            onChange={this.handleInputChange} />
        </label>

        { this.renderErrorMsg(error) }

        <button>
          add thumb
        </button>
      </form>
    );
  }
};

export default AddThumb;
