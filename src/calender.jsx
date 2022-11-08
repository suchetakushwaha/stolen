
import React, { useState, useCallback } from 'react';
import { Calendar } from '@natscale/react-calendar';


export default function Calender() {
    const [value, setValue] = useState();
  
    const onChange = useCallback(
      (value) => {
        setValue(value);
      },
      [setValue],
    );
    
  
  
    return (
    <div className='calender'>
      <Calendar value={value} onChange={onChange} />
    </div>
  )
}
