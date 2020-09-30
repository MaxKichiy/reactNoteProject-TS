import React from 'react';
import Content from './components/Content';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <main className='main'>
      <div className='main__wrapper'>
        <Header />
        <Content />
      </div>
    </main>
  );
};

export default App;
