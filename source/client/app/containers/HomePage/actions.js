/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import { createAction } from 'redux-actions';

import {
  OPEN_NEWTASK,
  CREATE_NEWTASK,
  REMOVE_TASK,
  UPDATE_TASK
} from './constants';

export const openNewTask = createAction(OPEN_NEWTASK, (value) => ({
  value: !value
}));

export const createNewTask = createAction(CREATE_NEWTASK, (title) => ({
  title
}));

export const removeTask = createAction(REMOVE_TASK, (_id) => ({
  _id
}));

export const updateTask = createAction(UPDATE_TASK, (_id, done) => ({
  _id, done
}));
