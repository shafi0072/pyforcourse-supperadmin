import { useState } from 'react';
import MainCalender from './MainCalender';

export default function Calender() {
  const [calender, setCalender] = useState(true);
  const handelCalenderToggle = () => {
    setCalender(!calender);
  };
  return (
    <div
      className={`my-20 ${
        calender && 'grid'
      } grid-cols-[1fr,5fr] text-white gap-5`}
    >
      <div
        className={`rounded border border-gray-200 p-3 ${
          calender ? 'block' : 'hidden'
        }`}
      >
        <h2 className='text-2xl py-2'>Calender</h2>
      </div>
      <MainCalender handelCalenderToggle={handelCalenderToggle} />
    </div>
  );
}
