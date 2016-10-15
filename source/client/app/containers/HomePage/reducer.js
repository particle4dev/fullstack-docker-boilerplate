/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS, List, Record } from 'immutable';
import { guid } from '../../utils/guid';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  OPEN_NEWTASK,
  CREATE_NEWTASK,
  REMOVE_TASK,
  UPDATE_TASK
} from './constants';

// The initial state of the App
export const TasksState = new Record({
  filter: '',
  loading: false,
  error: false,
  newTaskUIState: false,
  list: new List([
    {_id: guid(), title: 'Go to the bank', done: true},
    {_id: guid(), title: 'Buy food', done: false},
    {_id: guid(), title: 'Make dinner', done: true},
    {_id: guid(), title: 'Clean the house', done: false},
    {_id: guid(), title: 'Pick up the kids', done: true}
  ])
});
const initialState = new TasksState();
// const initialState = fromJS({
//   loading: false,
//   error: false,
//   currentUser: false,
//   userData: fromJS({
//     repositories: false,
//   }),
// });

function appReducer(state = initialState, action) {
  switch (action.type) {
    // case LOAD_REPOS:
    //   return state
    //     .set('loading', true)
    //     .set('error', false)
    //     .setIn(['userData', 'repositories'], false);
    // case LOAD_REPOS_SUCCESS:
    //   return state
    //     .setIn(['userData', 'repositories'], action.repos)
    //     .set('loading', false)
    //     .set('currentUser', action.username);
    // case LOAD_REPOS_ERROR:
    //   return state
    //     .set('error', action.error)
    //     .set('loading', false);
    case CREATE_NEWTASK:
      return state.set('list', state.list.unshift({
        _id: guid(),
        title: action.title,
        done: false
      }));
    
    case REMOVE_TASK:
      return state.set('list', state.list.filter(task => {
        return task._id !== action._id;
      }));

    case UPDATE_TASK:
      return state.set('list', state.list.map(task => {
        return task._id === action._id ? {
          _id: task._id,
          title: task.title,
          done: action.done
        } : task;
      }));

    case OPEN_NEWTASK:
      return state
        .set('newTaskUIState', action.value);

    default:
      return state;
  }
}

export default appReducer;