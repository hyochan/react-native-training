const initialState = {
  inputText: '',
};

function inputText(state = initialState.inputText, action) {
  switch (action.type) {
    case 'SET_TEXT':
      return action.value;
    default:
      return state;
  }
}

const reducers = {
  inputText,
};

export default reducers;
