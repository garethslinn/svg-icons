import React from 'react';
import { SvgIcon } from './svgIcons'

function App() {
  return (
    <div className="App">
      <h1>Icons</h1>
        <SvgIcon
            width='50'
            height='50'
            fill='transparent'
            stroke='red'
            className='checked'
            viewBox='0,0,24,24'
            title='Error'
        />
        <SvgIcon
            width='50'
            height='50'
            fill='transparent'
            stroke='green'
            className='checked'
            viewBox='0,0,24,24'
            title='Checked'
        />
        <SvgIcon
            width='50'
            height='50'
            title='Help'
        />
    </div>
  );
}

export default App;
