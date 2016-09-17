
'use strict';

import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
	// production vs development middlewares
	const middleware = process.env.NODE_ENV !== 'production' ?
	[immutableStateInvariantMiddleware(), thunk, promise] :
	[thunk, promise];

	const enhancer = compose(
		applyMiddleware(...middleware),
		devTools({
	     	name: 'NativeStarterKit', realtime: true
	    }),
	);

	let store = createStore(reducer, enhancer);
	persistStore(store, {storage: AsyncStorage}, onCompletion);

	return store
}
