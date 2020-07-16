import React from 'react';
import CountButtons from './components/count/CountButtons';
import CountDisplay from './components/count/CountDisplay';

function App() {
  return (
    <div className="App">
      <CountDisplay></CountDisplay>
      <CountButtons></CountButtons>
    </div>
  );
}

export default App;
