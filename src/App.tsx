import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="app-root">
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <Sidebar />
          <div className="app-main__content">
            <TodoList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
