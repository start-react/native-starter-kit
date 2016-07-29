'use strict';

import { AppRegistry, StatusBarIOS } from 'react-native'
import setup from './js/setup'

StatusBarIOS.setStyle('light-content');
AppRegistry.registerComponent('NativeStarterKit', setup);
