import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import Icon from 'components/Icon';
import Edit from 'components/Edit';
import Modal from 'components/Modal';
import AddThumb from 'components/AddThumb';
import ThumbAdmin from 'components/Thumbs/ThumbAdmin';

// actions
import {
  addThumb,
  editThumb,
  deleteThumb,
  saveNewThumb,
  fetchFakeData,
  cancelAddThumb,
  saveEditChanges,
  cancelEditChanges,
} from 'store/thumbs/actions';

// styles
import './styles.scss';

const propTypes = {
  thumbs: PropTypes.object,
  addThumb: PropTypes.func,
  editThumb: PropTypes.func,
  deleteThumb: PropTypes.func,
  fetchFakeData: PropTypes.func,
  saveEditChanges: PropTypes.func,
  cancelEditChanges: PropTypes.func,
};

class Admin extends Component {
  render() {
    const {
      isEdit,
      editId,
      thumbs,
      addThumb,
      editThumb,
      isAddThumb,
      deleteThumb,
      saveNewThumb,
      cancelAddThumb,
      saveEditChanges,
      cancelEditChanges,
    } = this.props;

    let views = null;
    let currentThumb = {};

    if (!thumbs.isEmpty()) {
      views = thumbs.map((view) => {
        const thumbProps = Object.assign({}, view.toJS(), {
          editThumb,
          deleteThumb,
        });

        return <ThumbAdmin key={thumbProps.id} {...thumbProps} />
      });
    }

    if (!thumbs.isEmpty() && isEdit) {
      currentThumb = thumbs.find((view) => {
        const id = view.get('id');

        return id === editId;
      }).toJS();
    }

    const editProps = {
      ...currentThumb,
      saveEditChanges,
      cancelEditChanges,
    };

    const addThumbProps = {
      saveNewThumb,
    };

    return (
      <div className="admin-container">
        { views }

        <div className="thumb-container">
          <div className="admin-icon-close">
            <Icon icon="plus" handle={addThumb} />
          </div>
        </div>


        { isEdit &&
          <Modal handleClose={cancelEditChanges}>
            <Edit {...editProps} />
          </Modal>
        }

        { isAddThumb &&
          <Modal handleClose={cancelAddThumb}>
            <AddThumb {...addThumbProps} />
          </Modal>
        }
      </div>
    );
  }
};

Admin.propTypes = propTypes;

const mapStateToProps = state => ({
  isEdit: state.thumbs.get('isEdit'),
  editId: state.thumbs.get('editId'),
  thumbs: state.thumbs.get('listThumbs'),
  isAddThumb: state.thumbs.get('isAddThumb'),
});

export default connect(mapStateToProps, {
  addThumb,
  editThumb,
  deleteThumb,
  saveNewThumb,
  fetchFakeData,
  cancelAddThumb,
  saveEditChanges,
  cancelEditChanges,
})(Admin);
