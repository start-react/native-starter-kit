
import type { Action } from '../actions/types';
import { SET_INDEX } from '../actions/list';
import I18n from '../../i18n';

export type State = {
    list: string
}

const initialState = {
  list: I18n.t('REDUCER.LIST'),
  selectedIndex: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  }
  return state;
}
