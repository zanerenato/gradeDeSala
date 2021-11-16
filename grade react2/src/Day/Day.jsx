
import React from 'react';

export const Day = ({ day, onClick }) => {
  const className = `day ${day.value}`;
  const id = `div${day.id}`
  return (
        <div onClick={onClick} className={className} id={id}>
      {day.id}

      {day.event && <div className='event'>{day.event.title}</div>}
    </div>
  );
};
 
 
 