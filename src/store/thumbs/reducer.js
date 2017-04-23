import { fromJS } from 'immutable';

import { fetchActions, adminActions } from './actions';

const initialState = fromJS({
  listThumbs: [],
  isEdit: false,
  editId: '',
  isAddThumb: false,
});

const view = (state = initialState, { type, payload, error }) => {
  const payloadImm = fromJS(payload);

  switch (type) {
    case fetchActions.FETCH_THUMBS_SUCCESS:
      return state.set('listThumbs', payloadImm);
    case adminActions.ADD_THUMB:
      return state.set('isAddThumb', true);
    case adminActions.SAVE_NEW_THUMB:
      return state
        .update('listThumbs', (list) => list.push(payloadImm))
        .merge({
          isAddThumb: false,
        });
    case adminActions.CANCEL_ADD_THUMB:
      return state.set('isAddThumb', false);
    case adminActions.DELETE_THUMB:
      return state
        .update('listThumbs', (list) => {
          return list
            .filter((item) => {
              const id = item.get('id');

              return id !== payloadImm;
            });
        });
    case adminActions.EDIT_THUMB:
      return state
        .merge({
          isEdit: true,
          editId: payloadImm,
        });
    case adminActions.CANCEL_EDIT_CHANGES:
      return state
        .merge({
          isEdit: false,
          editId: '',
        });
    case adminActions.SAVE_EDIT_CHANGES:
      return state
        .update('listThumbs', (list) => {
          return list
            .map((item) => {
              const id = item.get('id');
              const editId = payloadImm.get('id');

              if (id === editId) {
                return item.merge(payloadImm);
              }

              return item;
            });
        })
        .merge({
          isEdit: false,
          editId: '',
        });
    default:
      return state;
  }
};

export default view;
