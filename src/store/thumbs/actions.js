import fetchFake from 'utils/fetchFakeData';
import keymirror from 'keymirror';

export const fetchActions = keymirror({
  FETCH_THUMBS_SEND: null,
  FETCH_THUMBS_SUCCESS: null,
  FETCH_THUMBS_FAILURE: null,
});

export const fetchSend = (payload) => ({
  payload,
  type: fetchActions.FETCH_THUMBS_SEND,
});

export const fetchSuccess = (payload) => ({
  payload,
  type: fetchActions.FETCH_THUMBS_SUCCESS,
});

export const fetchFailure = (error) => ({
  error,
  type: fetchActions.FETCH_THUMBS_FAILURE,
});

export const fetchFakeData = () => (dispatch) => {
  dispatch(fetchSend());

  return fetchFake()
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchFailure(error)))
};



export const adminActions = keymirror({
  SAVE_NEW_THUMB: null,
  SAVE_EDIT_CHANGES: null,

  CANCEL_ADD_THUMB: null,
  CANCEL_EDIT_CHANGES: null,


  ADD_THUMB: null,
  EDIT_THUMB: null,
  DELETE_THUMB: null,
});

export const editThumb = (payload) => ({
  payload,
  type: adminActions.EDIT_THUMB,
});

export const deleteThumb = (payload) => ({
  payload,
  type: adminActions.DELETE_THUMB,
});

export const addThumb = (payload) => ({
  payload,
  type: adminActions.ADD_THUMB,
});

export const saveEditChanges = (payload) => ({
  payload,
  type: adminActions.SAVE_EDIT_CHANGES,
});

export const saveNewThumb = (payload) => ({
  payload,
  type: adminActions.SAVE_NEW_THUMB,
});

export const cancelEditChanges = () => ({
  type: adminActions.CANCEL_EDIT_CHANGES,
});

export const cancelAddThumb = () => ({
  type: adminActions.CANCEL_ADD_THUMB,
});
