import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import ThumbView from 'components/Thumbs/ThumbView';

// styles
import './styles.scss';

const propTypes = {
  thumbs: PropTypes.object.isRequired,
};

const View = ({ thumbs }) => {
  const views = !thumbs.isEmpty() && thumbs.map((view) => {
    const thumbProps = view.toJS();

    return <ThumbView key={thumbProps.id} {...thumbProps} />
  });

  return (
    <div className="view-container">
      { views }
    </div>
  );
};

View.propTypes = propTypes;

const mapStateToProps = state => ({
  thumbs: state.thumbs.get('listThumbs'),
});

export default connect(mapStateToProps)(View);
