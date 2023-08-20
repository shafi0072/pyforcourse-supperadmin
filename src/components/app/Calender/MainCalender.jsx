// MainCalendar.js
import React, { useState } from 'react';
import moment from 'moment';
import 'tailwindcss/tailwind.css';
import Modal from 'react-modal'; // Import the react-modal library
import EventModal from './EventModal'; // Create this component
import { FaBars } from 'react-icons/fa';
const MainCalendar = ({ handelCalenderToggle }) => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState(null);

  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  const handleDateClick = (date) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const modalWidth = 300; // Adjust the modal width as needed
    const modalHeight = 400; // Adjust the modal height as needed

    const modalTop = (screenHeight - modalHeight) / 2;
    const modalLeft = (screenWidth - modalWidth) / 2;

    setSelectedDate(date);
    setModalPosition({
      top: modalTop,
      left: modalLeft,
    });
    setModalOpen(true);
  };

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = currentDate.clone().startOf('month');
  const startingDayOfWeek = firstDayOfMonth.day();

  const daysArray = Array.from({ length: daysInMonth }, (_, index) =>
    firstDayOfMonth.clone().add(index, 'days')
  );

  return (
    <div className='w-full border border-gray-200 min-h-screen flex flex-col'>
      <div className='p-4'>
        <div>
          <button onClick={handelCalenderToggle}>
            <FaBars></FaBars>
          </button>
        </div>
        <div className='flex justify-between mb-4'>
          <div className='border border-gray-200 rounded'>
            <button
              className='px-2 py-1 hover:bg-gray-300 hover:text-black'
              onClick={goToPreviousMonth}
            >
              &lt;
            </button>

            <button
              className='px-2 py-1 hover:bg-gray-300 hover:text-black'
              onClick={goToNextMonth}
            >
              &gt;
            </button>
          </div>
          <h2 className='font-bold text-lg'>
            {currentDate.format('MMMM YYYY')}
          </h2>
          <p></p>
        </div>
      </div>
      <div className='grid grid-cols-7 border border-gray-300 justify-self-end'>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className='font-semibold text-center border border-gray-200'
          >
            {day}
          </div>
        ))}
        {Array.from({ length: startingDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className='text-center'></div>
        ))}
        {daysArray.map((day, index) => (
          <div
            key={index}
            className='text-center cursor-pointer hover:bg-gray-200 p-1 h-[100px] flex justify-center items-center border border-gray-200 hover:text-black'
            onClick={(event) => handleDateClick(day, event)}
          >
            {day.format('D')}
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel='Event Details'
        style={{
          content: {
            top: modalPosition?.top,
            left: modalPosition?.left,
            width: '300px',
          },
        }}
      >
        <EventModal
          date={selectedDate}
          closeModal={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default MainCalendar;
