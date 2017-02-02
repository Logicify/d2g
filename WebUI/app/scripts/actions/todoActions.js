import { ADD_TODO, TOGGLE_TODO } from '../constants/todoConstants';

let nextTodoId = 0;
export const addTodo = (text) => {
  nextTodoId += 1;
  return {
    type: ADD_TODO,
    id: nextTodoId,
    text,
  };
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export default {};
