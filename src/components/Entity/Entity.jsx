import React from 'react';
import { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import 'typeface-roboto'

import { entityValidation } from './entityValidation';
// import { addNewEntity } from '../../data/data';


function Entity(props){

  const [entity, setEntity] = useState({name: ""})
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState(' ');

  const handleChange = e => {
    setError(null)
    setHelperText(' ')
    console.log(e.target.name);
    setEntity({...entity, [e.target.name]: e.target.value});
  }

  const handleSubmit = async () => {
    entityValidation.validate(entity)
      .then((entity) => {
          entity.owner = props.address
          console.log(entity);
          setEntity(entity)
      })
      .catch((error) => {
        setError(error)
        setHelperText(error.message)
      }
    );
  }

  return (
    <Grid
      container
      component={"form"} 
      noValidate 
      autoComplete='off'
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      <Grid>
        <TextField fullWidth
          name="name" 
          label="Company Name"
          value={entity.name}
          required
          error={error}
          helperText={helperText}
          onChange={handleChange}
        />
      </Grid>
      <Grid>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default Entity;