
'use strict';

import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import user from './user';
import list from './list';

export default combineReducers({

 	drawer,
 	route,
    user,
    list

})
