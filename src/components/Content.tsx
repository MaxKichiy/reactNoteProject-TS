import React, { useEffect, useState } from 'react';
import ContentTop from './ContentTop';
import NewNoteForm from './NewNoteForm';
import NotesList from './NotesList';
import { INoteItemProps } from '../interfaces';

const Content: React.FC = () => {
  const [notes, setNotes] = useState<INoteItemProps[]>([]);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    let saved = JSON.parse(
      localStorage.getItem('notes') || '[]'
    ) as INoteItemProps[];
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onToggleInput = () => {
    setShowInput((prev) => !showInput);
  };

  const onCheckHandler = (id: number) => {
    const newNotesList = notes.map((note) => {
      if (note.id === id) {
        note.isActive = !note.isActive;
      }
      return note;
    });
    setNotes(newNotesList);
  };

  const onEditHandler = (id: number, title: string | any) => {
    let newData = window.prompt('Введіть нову назву', title);
    if (newData === '') {
      newData = title;
    }
    if (newData === null) {
      newData = title;
    }
    const editedList = notes.map((element) => {
      if (element.id === id) {
        //@ts-ignore
        element.title = newData;
      }
      return element;
    });
    setNotes(editedList);
  };

  const onAddNote = (title: string) => {
    const newNote = {
      title: title,
      id: Number(new Date()),
      isActive: false,
    };
    setNotes((prev) => [...notes, newNote]);
  };

  const onDeleteNote = (id: number | INoteItemProps[]) => {
    if (typeof id === 'number') {
      let filteredNotes = notes.filter((note) => note.id !== id);

      if (window.confirm('Ви точно бажаєте видалити цю замітку?')) {
        setNotes((prev) => filteredNotes);
      }
      return;
    }
    if (window.confirm('Ви точно бажаєте видалити ці замітки?')) {
      setNotes((prev) => id);
    }
    // якщо повертається список то просто заміняємо
  };

  return (
    <section className='main__content content'>
      <ContentTop
        notes={notes}
        onDeleteNote={onDeleteNote}
        onEditNote={onEditHandler}
      />
      <NotesList
        notes={notes}
        onDeleteNote={onDeleteNote}
        onCheckHandler={onCheckHandler}
        onEditNote={onEditHandler}
      />

      <NewNoteForm
        showInput={showInput}
        AddNote={onAddNote}
        onToggleInput={onToggleInput}
      />
    </section>
  );
};

export default Content;
