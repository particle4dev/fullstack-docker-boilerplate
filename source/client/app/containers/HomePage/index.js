/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import Row from 'components/Row';
import AddButton from 'components/AddButton';
import NewTask from 'components/NewTask';
import Container from 'components/Container';
import Title from 'components/Title';
import messages from './messages';
import {
  selectList,
  selectLoading,
  selectError,
  selectNewTaskUIState
} from './selectors';
import {
  openNewTask,
  createNewTask,
  removeTask,
  updateTask
} from './actions';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { list, loading, error, newTaskUIState, openNewTask, createNewTask, removeTask, updateTask } = this.props;
    let taskItems = list.map((task, index) => {
      return (
        <Row key={index} _id={task._id} title={task.title} done={task.done} onRemove={removeTask} onUpdate={updateTask}></Row>
      );
    });
    return (
      <Container>
        <AddButton uiState={ newTaskUIState } onClick={ openNewTask } />
        <Title />
        <NewTask open={ newTaskUIState } onClick={ createNewTask }/>
        <ul className="ui-sortable">
          { taskItems }
        </ul>
      </Container>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    removeTask: (value) => dispatch(removeTask(value)),
    updateTask: (_id, done) => dispatch(updateTask(_id, done)),
    createNewTask: (evt, value) => {evt.preventDefault(); dispatch(createNewTask(value)) },
    openNewTask: (value) => dispatch(openNewTask(value)),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  list: selectList(),
  loading: selectLoading(),
  error: selectError(),
  newTaskUIState: selectNewTaskUIState()
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
