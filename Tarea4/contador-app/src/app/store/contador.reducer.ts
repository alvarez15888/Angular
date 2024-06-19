import { createReducer, on } from '@ngrx/store';
import * as ContadorActions from './contador.actions';

export const initialState = 0;

const _contadorReducer = createReducer(
  initialState,
  on(ContadorActions.incrementar, (state, { valor }) => state + valor),
  on(ContadorActions.decrementar, (state, { valor }) => state - valor),
  on(ContadorActions.reiniciar, () => initialState)
);

export function contadorReducer(state: any, action: any) {
  return _contadorReducer(state, action);
}
