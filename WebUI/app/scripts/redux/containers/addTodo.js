import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActions';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => (input = node)} />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add todo
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(AddTodo);
