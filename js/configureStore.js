
'use strict';

import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
	const enhancer = compose(
		applyMiddleware(thunk, promise),
		devTools({
	     	name: 'NativeStarterKit', realtime: true
	    }),
	);

	let store = createStore(reducer, enhancer);
	persistStore(store, {storage: AsyncStorage}, onCompletion);

	return store
}
