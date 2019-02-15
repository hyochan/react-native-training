import React, { createContext } from 'react';

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

type Props = { };
export type State = {
  inputText: string,
};

const initialState: State = {
  inputText: '',
};

class AppProvider extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  actions = {
    onUpdateText: (text: string) => {
      this.setState({
        inputText: text,
      });
    },
  };

  render() {
    const { state, actions } = this;
    const store = { state, actions };
    return (
      <AppContext.Provider value={store}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export { AppConsumer, AppProvider };
