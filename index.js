/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => (
  <Provider store={store}>
    <App />
  </Provider>
));
