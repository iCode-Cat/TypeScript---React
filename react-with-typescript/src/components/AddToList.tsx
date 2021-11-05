import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // Return nothing void
  const handleClick = (): void => {
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ]);
  };

  return (
    <div className='AddToList'>
      <input
        value={input.name}
        type='text'
        placeholder='Name'
        className='AddToList-input'
        onChange={handleChange}
        name='name'
      />
      <input
        value={input.age}
        type='text'
        placeholder='Age'
        className='AddToList-input'
        onChange={handleChange}
        name='age'
      />
      <input
        value={input.img}
        type='text'
        placeholder='Image Url'
        className='AddToList-input'
        onChange={handleChange}
        name='img'
      />
      <textarea
        value={input.note}
        placeholder='Notes'
        className='AddToList-input'
        onChange={handleChange}
        name='note'
      />
      <button onClick={handleClick} className='AddToList-btn'>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
