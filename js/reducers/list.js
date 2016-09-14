
'use strict';

import type {Action} from '../actions/types';
import { SET_INDEX } from '../actions/list';

export type State = {
    list: string
}

const initialState = {
    list: ['React Native starter kit', 'RN Navigator', 'NB Easy Grid', 'NativeBase', 'CodePush', 'Redux'],
    selectedIndex: undefined
};

export default function (state:State = initialState, action:Action): State {
    if (action.type === SET_INDEX) {
        return {
            ...state,
            selectedIndex: action.payload
        };
    }
    return state;
}
