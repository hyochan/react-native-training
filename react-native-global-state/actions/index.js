const SET_TEXT = 'SET_TEXT';

type SetTextAction = {
  type: typeof SET_TEXT,
  value: string,
};

export function setText(text: string): SetTextAction {
  return {
    type: SET_TEXT,
    value: text,
  };
}

export type IActions = SetTextAction;
