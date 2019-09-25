export const initialTodoState = [
  {
    item: 'Complete Reducer Project',
    completed: false,
    id: 1
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      if (!action.payload) {
        return {
          ...state,
          editing: !state.editing
        };
      } else {
        return {
          ...state,
          title: action.payload,
          editing: !state.editing
        };
      }
    case 'TOGGLE_EDITING':
      return {
        ...state,
        editing: !state.editing
      };
    case 'DELETE_TITLE':
      return {
        ...state,
        title: '',
        editing: !state.editing
      };
    default:
      return state;
  }
};
