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

import {
  OPEN_NEWTASK,
  CREATE_NEWTASK,
  REMOVE_TASK,
  UPDATE_TASK
} from './constants';

export function openNewTask(value) {
  return {
    type: OPEN_NEWTASK,
    value: !value,
  };
}

export function createNewTask(title) {
  return {
    type: CREATE_NEWTASK,
    title,
  };
}

export function removeTask(_id) {
  return {
    type: REMOVE_TASK,
    _id,
  };
}

export function updateTask(_id, done) {
  return {
    type: UPDATE_TASK,
    _id,
    done,
  };
}