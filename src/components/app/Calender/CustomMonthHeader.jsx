// CustomMonthHeader.js
import React from 'react';
import moment from 'moment';

const CustomMonthHeader = ({ date }) => {
  const dayOfWeek = moment(date).format('ddd');
  const dayOfMonth = moment(date).format('D');

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="font-bold">{dayOfWeek}</div>
        <div className="text-xl">{dayOfMonth}</div>
      </div>
    </div>
  );
};

export default CustomMonthHeader;
