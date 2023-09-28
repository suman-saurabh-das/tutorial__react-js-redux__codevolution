const store = require('./app/store2')
const fetchUsers = require('./features/user/userSlice').fetchUsers

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(fetchUsers())