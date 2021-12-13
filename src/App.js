import React from 'react';
import Chat from './Components/Chat/Chat';
import PageHeader from './Components/Header/Header';
import './App.css';

const App = () => {
  return (
    <>
      <PageHeader />
      <main>
        <Chat />
      </main>
    </>
  );
};
export default App;
