import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='main__header header'>
      <div className='header__wrapper'>
        <h1 className='header__title'>RNP</h1>
        <p className='header__text'>react-notes-project</p>
      </div>
    </header>
  );
};

export default Header;
