import React from 'react';

const Display = (props) => {
    const {inputs, result} = props
  return (
    <div className='values'>
      {result ? result: inputs}
    </div>
  );
}

export default Display;