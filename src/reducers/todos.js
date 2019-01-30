const todos = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state < 2 ? state + 1 : 0;
    default:
      return state;
  }
};

export default todos;
