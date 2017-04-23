import React from 'react';
import PropTypes from 'prop-types';

// components
import ColoredThumb from 'components/Thumbs/ColoredThumb';

// styles
import './styles.scss';

const propTypes = {
  editThumb: PropTypes.func,
  tooltip: PropTypes.string,
  deleteThumb: PropTypes.func,
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const ThumbAdmin = ({ id, src, tooltip, color, editThumb, deleteThumb }) => {
  const handleEdit = () => {
    if (!id && !editThumb) {
      return;
    }

    editThumb(id);
  };

  const handleDelete = () => {
    if (!id && !deleteThumb) {
      return;
    }

    deleteThumb(id);
  };

  return (
    <div className="thumb-container">
      <ColoredThumb src={src} color={color} />
      <div className="thumb-footer">
        <div className="thumb-actions">
          <button onClick={handleEdit}>
            edit
          </button>
          <button onClick={handleDelete}>
            delete
          </button>
        </div>
        <p className="thumb-tooltip">
          { tooltip }
        </p>
      </div>
    </div>
  );
};
ThumbAdmin.propTypes = propTypes;

export default ThumbAdmin;
