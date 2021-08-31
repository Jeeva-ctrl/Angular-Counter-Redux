/* 

(alias) function createAction<T extends string>(type: T): ActionCreator<T, () => TypedAction<T>> (+2 overloads)

*/

import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');

export const decrement = createAction('[Counter Component] Decrment');

export const reset = createAction('[Couter Component Reset');
