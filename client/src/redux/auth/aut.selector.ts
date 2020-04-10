import { createSelector } from 'reselect';
import { AppState } from '..';
import { IAuthState } from './auth.types';


const authState = (state: AppState) => state.auth;


export const selectUser = createSelector(
  [authState],
  (state: IAuthState) => state.user,
);

export const selectUserToken = createSelector(
  [authState],
  (state: IAuthState) => state.token,
);
