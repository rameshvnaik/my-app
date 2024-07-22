import React from 'react';
import Button from '@mui/material/Button';
import './CustomButton.scss'

const CustomButton = ({ name, onClick= () => {}, color  }) => {
  return (
    <Button 
    className='custom-button'
    style={{ backgroundColor: color, color: 'white' }}
     onClick={onClick}>
      {name}
    </Button>
  );
};

export default CustomButton;
