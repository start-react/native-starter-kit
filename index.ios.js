'use strict';

import { AppRegistry, StatusBar } from 'react-native'
import setup from './js/setup'

StatusBar.setBarStyle('light-content');
AppRegistry.registerComponent('NativeStarterKit', setup);
