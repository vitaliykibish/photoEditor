import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import EditColor from 'components/Edit/EditColor';
import ColoredThumb from 'components/Thumbs/ColoredThumb';

// styles
import './styles.scss';

class Edit extends Component {
  static propTypes = {
    src: PropTypes.string,
  }

  state = {
    id: this.props.id || '',
    color: this.props.color || '',
    tooltip: this.props.tooltip || '',
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSaveChanges = () => {
    const { editID, saveEditChanges } = this.props;

    saveEditChanges({ ...this.state });
  }

  handleCancelChanges = () => {
    const { cancelEditChanges } = this.props;

    cancelEditChanges();
  }

  changeColor = (e) => {
    const color = e.target.getAttribute('data-color');

    this.setState({ color });
  }

  render() {
    const { src } = this.props;
    const { tooltip, color } = this.state;

    return (
      <div className="edit-container">
        <ColoredThumb src={src} color={color} />
        <EditColor changeColor={this.changeColor} />

        <div className="edit-tooltip">
          <input
            type="text"
            name="tooltip"
            value={tooltip}
            onChange={this.handleInputChange} />
        </div>

        <div className="edit-actions">
          <button onClick={this.handleSaveChanges}>
            save
          </button>
          <button onClick={this.handleCancelChanges}>
            cancel
          </button>
        </div>
      </div>
    );
  }
};

export default Edit;
