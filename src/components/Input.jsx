import React from 'react'
import TextField from '@mui/material/TextField';
const Input = () => {
  return (
    <div className='input'>
        <div >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        </div>
      
    </div>
  )
}

export default Input