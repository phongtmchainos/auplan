import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './styles/style.css';
import configureStore from './stores/configureStores';
import registerServiceWorker from './registerServiceWorker';
import BaseScreen from "./containers/layouts/BaseScreenContainer";

const store = configureStore();

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
      <BaseScreen />
    </Provider>
  , document.getElementById('root')
);

//<Router routes={routes} />
registerServiceWorker();
