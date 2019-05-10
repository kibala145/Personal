export default {
  state: {
    items: JSON.parse(localStorage.getItem('todos') || '[]')
  },
  mutations: {
    CREATE_TODO(state, todoText) {
      let index = state.items.findIndex(item => item.text === todoText);
      if (index !== -1) window.alert('Item already exist')
      else {
        state.items.push({text: todoText, done: false});
        localStorage.setItem('todos', JSON.stringify(state.items));
      }
    },
    REMOVE_TODO(state, todo) {
      let index = state.items.findIndex(item => item.text === todo.text);
      index !== -1 ? state.items.splice(index, 1) : null;
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
    CLEAR_ALL_TODOS(state) {
      state.items = [];
      localStorage.setItem('todos', JSON.stringify([]));
    },
    TODO_DONE(state, todo) {
      let index = state.items.findIndex(item => item.text === todo.text);
      index !== -1 ? state.items[index].done = true : null;
      localStorage.setItem('todos', JSON.stringify(state.items));
    },
    TODO_UNDONE(state, todo) {
      let index = state.items.findIndex(item => item.text === todo.text);
      index !== -1 ? state.items[index].done = false : null;
      localStorage.setItem('todos', JSON.stringify(state.items));
    }
  },
  getters: {
    itemsSorted(state) {
      return state.items.sort((x, y) => (x.done === y.done) ? 0 : x.done ? 1 : -1)
    }
  }
}
