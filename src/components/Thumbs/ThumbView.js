import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Tooltip from 'components/Tooltip';
import ColoredThumb from 'components/Thumbs/ColoredThumb';

// styles
import './styles.scss';

class Thumb extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }

  state = {
    x: 0,
    y: 0,
    showTooltip: false,
  }

  handleMouseMove = (e) => {
    const y = e.pageY + 20;
    const x = e.pageX;

    this.setState({ x, y, showTooltip: true });
  }

  handleMouseLeave = () => {
    this.setState({ showTooltip: false });
  }

  render() {
    const { src, tooltip, color } = this.props;
    const { x, y, showTooltip } = this.state;

    const tooltipProps = {
      x,
      y,
      tooltip,
      showTooltip,
    };

    return (
      <div className="thumb-container">
        <div
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}>
          <ColoredThumb src={src} color={color} />
        </div>
        <Tooltip {...tooltipProps} />
      </div>
    );
  }
}

export default Thumb;
