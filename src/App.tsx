import React from 'react';
import { AppRouter } from './router/routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
