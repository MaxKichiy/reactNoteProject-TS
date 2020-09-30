import React, { useCallback } from 'react';
import { INoteItemProps } from '../interfaces';

type NotesListrops = {
  notes: INoteItemProps[];
  onDeleteNote: (id: number) => void;
  onCheckHandler: (id: number) => void;
  onEditNote: (id: number, title: string | any) => void;
};

const NotesList: React.FC<NotesListrops> = ({
  notes,
  onDeleteNote,
  onCheckHandler,
  onEditNote,
}) => {
  // показуємо завжди останню замітку, навіть якщо виходить за межі вьюпорта
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({
        smooth: true,
      });
    }
  }, []);
  // const onEditHandler = (id: number, title: string | any) => {
  //   let newData = window.prompt('Введіть нову назву', title);
  //   if (newData === '') {
  //     newData = title;
  //   }
  //   onEditNote(id, newData);
  // };

  const noteActiveStyles = ['notes__item', 'notes__item--active'];
  const lastItem = notes.length - 1;

  const notesList = notes.map((note, index) => (
    <li
      ref={lastItem === index ? setRef : null}
      className={
        note.isActive ? noteActiveStyles.join(' ') : noteActiveStyles[0]
      }
      key={note.id}
      onChange={() => onCheckHandler(note.id)}
    >
      <button
        onClick={() => onEditNote(note.id, note.title)}
        className='notes__item-button button--edit button '
      >
        <svg
          width='17'
          height='17'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.1552 0.844407C10.172 -0.139455 9.43361 0.00781784 9.43361 0.00781784L5.30726 4.13417L0.688635 8.75211L0 11.9989L3.24749 11.3103L7.86612 6.69371L11.9925 2.56736C11.9918 2.56736 12.1397 1.82895 11.1552 0.844407ZM3.05454 10.9203L1.94727 11.1589C1.82473 10.9238 1.66597 10.7093 1.47681 10.5235C1.29078 10.3343 1.07639 10.1754 0.841361 10.0523L1.08 8.94575L1.40045 8.62598C1.40045 8.62598 2.0025 8.63825 2.68295 9.3187C3.36272 9.99779 3.37567 10.6012 3.37567 10.6012L3.05454 10.9203Z'
            fill='white'
          />
        </svg>
      </button>
      <input
        defaultChecked={note.isActive}
        type='checkbox'
        id={note.id.toString()}
      />
      <label htmlFor={note.id.toString()}>{note.title}</label>
      <button
        onClick={() => onDeleteNote(note.id)}
        className='notes__item-button button--delete button'
      >
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.7495 9.99699L16.3775 4.3635C16.4768 4.26372 16.5325 4.12865 16.5324 3.98789C16.5323 3.84713 16.4765 3.71214 16.377 3.6125C16.178 3.4145 15.8275 3.4135 15.6265 3.6135L10 9.24699L4.37154 3.612C4.17154 3.4145 3.82104 3.41549 3.62204 3.61299C3.57265 3.66219 3.53355 3.72073 3.50702 3.7852C3.48049 3.84967 3.46707 3.91878 3.46754 3.9885C3.46754 4.1305 3.52254 4.2635 3.62204 4.362L9.25004 9.9965L3.62254 15.6315C3.52323 15.7314 3.46762 15.8667 3.4679 16.0076C3.46818 16.1484 3.52434 16.2835 3.62404 16.383C3.72054 16.4785 3.85704 16.5335 3.99804 16.5335H4.00104C4.14254 16.533 4.27904 16.4775 4.37354 16.381L10 10.7475L15.6285 16.3825C15.728 16.4815 15.861 16.5365 16.002 16.5365C16.0718 16.5367 16.1408 16.5231 16.2053 16.4965C16.2697 16.4699 16.3283 16.4309 16.3776 16.3816C16.4269 16.3323 16.466 16.2737 16.4926 16.2092C16.5192 16.1448 16.5327 16.0757 16.5325 16.006C16.5325 15.8645 16.4775 15.731 16.3775 15.6325L10.7495 9.99699Z'
            fill='black'
          />
        </svg>
      </button>
    </li>
  ));

  return <ul className='content__list notes'>{notesList}</ul>;
};

export default NotesList;
