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
  const sortedNotActive = notes.filter((note) => note.isActive !== true);
  const selectedAmountDiff = notes.length - sortedNotActive.length;

  //вибираємо єдину замітку для редагування в моб.режимі
  let activeItem = notes.filter((el) => el.isActive === true)[0];

  return (
    <div className='content__top'>
      {selectedAmountDiff === 1 && (
        <button
          onClick={() => onEditNote(activeItem.id, activeItem.title)}
          className='content__top-button button--edit button '
        >
          Редагувати
        </button>
      )}

      <h2 className='content__title '>Всі замітки</h2>
      {selectedAmountDiff !== 0 && (
        <button
          onClick={() => onDeleteNote(sortedNotActive)}
          className='content__top-button button--delete button'
        >
          {`Видалити (${selectedAmountDiff})`}
        </button>
      )}
    </div>
  );
};

export default ContentTop;
