import React from 'react';
import { StoreProvider } from './Store/Store';
import ListG from './components/ListG';
import ListF from './components/ListF';

function App() {
  return (<StoreProvider>
    <div>

      <div>
        <h3 id="aa">To-Do List - Reto</h3>
        <div>
          <h1>**********</h1>
          <ListF />
          <ListG />
        </div>

      </div>
    </div>
  </StoreProvider>
  )
}
export default App;

