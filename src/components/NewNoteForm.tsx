import React, { useRef } from 'react';

type NewNoteFormProps = {
  showInput: boolean;
  setEdit: () => void;
  setEditClose: () => void;
  AddNote: (title: string) => void;
};

const NewNoteForm: React.FC<NewNoteFormProps> = ({
  showInput,
  setEdit,
  setEditClose,
  AddNote,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const addButton = useRef<HTMLButtonElement>(null);

  const onAddNoteHandler = () => {
    if (ref.current!.value) {
      AddNote(ref.current!.value);
      ref.current!.value = '';

      // setEditClose(); зняти коментар якщо потрібно закривати поле після додавання замітки
    }
  };

  const onEditStart = () => {
    setEdit();
  };
  const onKeyBoardHandle = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (ref.current?.value && event.key === 'Enter') {
      onAddNoteHandler();
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      setEditClose();
    }
  };

  return (
    <div className='content__form input-form'>
      {!showInput ? (
        <button
          ref={addButton}
          onClick={onEditStart}
          className='content__add-button button'
        >
          Додати нотатку
        </button>
      ) : (
        <>
          <div className='input__form-text'>
            <input
              autoFocus
              onKeyDown={onKeyBoardHandle}
              ref={ref}
              type='text'
            />
            <button
              onClick={setEditClose}
              className='input-form__button input-form__button--mobile input-form--cancel button'
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
          </div>
          <button
            onClick={setEditClose}
            className='input-form__button input-form__button--desktop  input-form--cancel button'
          >
            Відміна
          </button>
          <button
            onClick={onAddNoteHandler}
            className='input-form__button--desktop input-form__button   input-form--confirm button'
          >
            Зберегти
          </button>
          <button
            onClick={onAddNoteHandler}
            className='input-form__button input-form__button--mobile input-form--confirm '
          >
            <svg
              width='38'
              height='41'
              viewBox='0 0 38 41'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M29 20.5L21 29'
                stroke='#45ABE5'
                strokeOpacity='0.7'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M29 20.5L21 12'
                stroke='#45ABE5'
                strokeOpacity='0.7'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M9 20.5H28'
                stroke='#45ABE5'
                strokeOpacity='0.7'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M19 39.625C9.05887 39.625 0.999992 31.0624 0.999992 20.5C0.999992 9.93755 9.05887 1.375 19 1.375C28.9411 1.375 37 9.93755 37 20.5C37 31.0624 28.9411 39.625 19 39.625Z'
                stroke='#45ABE5'
                strokeOpacity='0.7'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default NewNoteForm;
