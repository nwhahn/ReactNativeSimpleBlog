/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// Polyfill for UUID
import 'react-native-get-random-values';

AppRegistry.registerComponent(appName, () => App);
