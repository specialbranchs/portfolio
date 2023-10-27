import {produce} from 'immer';
import { User } from '../../../typings/structures';
import * as Types from './actionTypes';


export type State = {
  user: User | null;
};

export const initialState: State = {
  user: null
};

export default (state: State = initialState, action: Types.UserActionTypes) =>
  produce(state, (draft: State) => {
    switch (action.type) {
      case Types.SAVE_USER:
        draft.user = action.payload;
        break;
      case Types.REMOVE_USER:
        draft.user = null;
        break;
    }
  });
