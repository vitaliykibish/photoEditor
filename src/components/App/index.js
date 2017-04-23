import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import Nav from 'components/Nav';

// actions
import { fetchFakeData } from 'store/thumbs/actions';

// styles
import './styles/app.scss';

class App extends Component {
  static propTypes = {
    thumbs: PropTypes.object,
    children: PropTypes.element,
    fetchFakeData: PropTypes.func,
  }

  componentWillMount() {
    const { thumbs, fetchFakeData } = this.props;

    if (!thumbs.isEmpty()) {
      return;
    }

    fetchFakeData();
  }

  render() {
    const { children } = this.props;

    return (
      <div className="app-container">
        <Nav />
        { children }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  thumbs: state.thumbs.get('listThumbs'),
});

export default connect(mapStateToProps, {
  fetchFakeData,
})(App);
