import React from 'react';
import { INoteItemProps } from '../interfaces';

type ContentTopProps = {
  notes: INoteItemProps[];
  onDeleteNote: (id: number | INoteItemProps[]) => void;
  onEditNote: (id: number, title: string | any) => void;
};

const ContentTop: React.FC<ContentTopProps> = ({
  notes,
  onDeleteNote,
  onEditNote,
}) => {
  const final = notes.filter((note) => note.isActive !== true);

  const selectedAmount = notes.length - final.length;

  const onEditHandler = (id: number, title: string | any) => {
    let newData = window.prompt('Введіть нову назву', title);
    if (newData === '') {
      newData = title;
    }
    onEditNote(id, newData);
  };

  let activeItem = notes.filter((el) => el.isActive === true)[0];

  return (
    <div className='content__top'>
      {selectedAmount === 1 && (
        <button
          onClick={() => onEditHandler(activeItem.id, activeItem.title)}
          className='content__top-button button--edit button '
        >
          Редагувати
        </button>
      )}

      <h2 className='content__title '>Всі Нотатки</h2>
      {selectedAmount !== 0 && (
        <button
          onClick={() => onDeleteNote(final)}
          className='content__top-button button--delete button'
        >
          {`Видалити (${selectedAmount})`}
        </button>
      )}
    </div>
  );
};

export default ContentTop;
