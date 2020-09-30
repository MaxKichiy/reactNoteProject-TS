import React from 'react';
import { ContentMemo } from './components/Content';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <main className='main'>
      <div className='main__wrapper'>
        <Header />
        <ContentMemo />
      </div>
    </main>
  );
};

export default App;
