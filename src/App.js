import React from 'react';
import CakeView from './03 React Redux Toolkit Basics/features/cake/CakeView';
import IcecreamView from './03 React Redux Toolkit Basics/features/icecream/IcecreamView';
import UserView from './03 React Redux Toolkit Basics/features/user/UserView';

function App() {
  return (
    <div className="App">
      <h1>React Redux - Codevolution</h1>

      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
