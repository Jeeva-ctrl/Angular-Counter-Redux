import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

/* 
CREATEREDUCER  ->

Creates a reducer function to handle state transitions.

Reducer creators reduce the explicitness of reducer functions with switch statements.

@param initialState — Provides a state value if the current state is undefined, as it is initially.

@param ons — Associations between actions and state changes.

@returns — A reducer function.

*/

const _counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0)
);

export function counterReducer(state: number,action: Action){
  return _counterReducer(state,action)
}