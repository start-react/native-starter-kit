/**
 * Created by kylefang on 4/27/16.
 * @flow
 */

'use strict';

import {createStore, applyMiddleware, compose} from 'redux'
import devTools from 'remote-redux-devtools'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {autoRehydrate, persistStore} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
	const enhancer = compose(
		applyMiddleware(thunk, promise),
		devTools({
	      name: 'ecommerce', realtime: true
	    }),
	);
	
	let store = createStore(reducer, enhancer);
	persistStore(store, {storage: AsyncStorage}, onCompletion);
	
	return store
}
