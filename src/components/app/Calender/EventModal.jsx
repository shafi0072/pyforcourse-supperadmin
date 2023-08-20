// EventModal.js
import React, { useState } from 'react';
import moment from 'moment';

const EventModal = ({ date, closeModal }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Personal'); // Added category state

  const handleSave = () => {
    // Handle saving the event details
    const eventDetails = {
      title,
      startDate,
      endDate,
      description,
      category,
    };
    console.log(eventDetails);

    // Close the modal
    closeModal();
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'Personal':
        return 'bg-green-500';
      case 'Work':
        return 'bg-blue-500';
      case 'Appointments':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className='p-4 text-black'>
      <h2 className='text-xl font-semibold mb-2'>Add Event</h2>
      <p className='mb-1'>
        <strong>Date:</strong> {date.format('MMMM Do YYYY')}
      </p>
      <input
        type='text'
        className='w-full mb-2 px-2 py-1 border rounded'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='datetime-local'
        className='w-full mb-2 px-2 py-1 border rounded'
        placeholder='Start Date'
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type='datetime-local'
        className='w-full mb-2 px-2 py-1 border rounded'
        placeholder='End Date'
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <textarea
        className='w-full mb-2 px-2 py-1 border rounded'
        placeholder='Description'
        rows='4'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className='w-full mb-2 px-2 py-1 border rounded relative'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value='Personal'>
          <span
            className={`w-4 h-4 inline-block rounded-full mr-2 ${getCategoryColor()}`}
          ></span>
          Personal
        </option>
        <option value='Work'>
          <span
            className={`w-4 h-4 inline-block rounded-full mr-2 ${getCategoryColor()}`}
          ></span>
          Work
        </option>
        <option value='Appointments'>
          <span
            className={`w-4 h-4 inline-block rounded-full mr-2 ${getCategoryColor()}`}
          ></span>
          Appointments
        </option>
      </select>
      <button
        onClick={handleSave}
        className='bg-green-500 text-white py-2 px-4 rounded mr-2'
      >
        Save
      </button>
      <button
        onClick={closeModal}
        className='bg-red-500 text-white py-2 px-4 rounded'
      >
        Cancel
      </button>
    </div>
  );
};

export default EventModal;
