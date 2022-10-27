import React from 'react';
import { TextField } from "@material-ui/core";
import { PUT } from '../constants/actionTypes';

const ActivableField = ({ currentCommand, subscriberData, setSubscriberData, property }) => {

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    return (
      <TextField disabled={currentCommand!==PUT} fullWidth name={property} variant="outlined" label={capitalize(property)} value={subscriberData[property]} onChange={(e) => setSubscriberData({ ...subscriberData, [property]: e.target.value })}/>
    );
}

export default ActivableField;