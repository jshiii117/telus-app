import React from 'react';
import useStyles from './styles';
import { TextField } from "@material-ui/core";

const AdditionalField = ({ currentCommand, subscriberData, setSubscriberData, property }) => {

    const classes = useStyles();

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    return (
        <TextField disabled={currentCommand!=='Put'} className={classes.textField} fullWidth name={property} variant="outlined" label={capitalize(property)} value={subscriberData[property]} onChange={(e) => setSubscriberData({ ...subscriberData, [property]: e.target.value })}/>

    );
}

export default AdditionalField;