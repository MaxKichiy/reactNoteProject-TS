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

  const onEditHandler = () => {
    setShowInput(true);
  };

  const onEditClose = () => {
    setShowInput(false);
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

  const onAddNote = (title: string) => {
    const newNote = {
      title: title,
      id: Number(new Date()),
      isActive: false,
    };
    setNotes((prev) => [...notes, newNote]);
  };

  const onDeleteNote = (id: number | INoteItemProps[]) => {
    let filteredNotes: INoteItemProps[];
    if (typeof id === 'number') {
      filteredNotes = notes.filter((note) => note.id !== id);
      setNotes((prev) => filteredNotes);
      return;
    }
    setNotes((prev) => id); // якщо повертається списко то просто заміняємо
  };

  const onEditNote = (id: number, title: string | any) => {
    const editedList = notes.map((element) => {
      if (element.id === id) {
        element.title = title;
      }
      return element;
    });
    setNotes(editedList);
  };

  return (
    <section className='main__content content'>
      <ContentTop
        notes={notes}
        onDeleteNote={onDeleteNote}
        onEditNote={onEditNote}
      />
      <NotesList
        notes={notes}
        onDeleteNote={onDeleteNote}
        onCheckHandler={onCheckHandler}
        onEditNote={onEditNote}
      />

      <NewNoteForm
        showInput={showInput}
        setEdit={onEditHandler}
        setEditClose={onEditClose}
        AddNote={onAddNote}
      />
    </section>
  );
};

export default Content;
