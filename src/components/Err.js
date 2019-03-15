import React from 'react';

const Err = ({mensaje}) => {
  return (
    <div className='p-2 err' >
      <h4 className='text-white text-center'>{mensaje}</h4>
    </div>
  );
};

export default Err;