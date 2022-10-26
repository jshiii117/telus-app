import React from 'react';
import useStyles from './styles';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import AdditionalField from './AdditionalField';

const AdditionalFields = ({ currentCommand, subscriberData, setSubscriberData }) => {

    const classes = useStyles();
    
    return (
        <>
        <AdditionalField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'username'}/>

        <AdditionalField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'password'}/>

        <AdditionalField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'domain'}/>

        <AdditionalField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'status'}/>
        
        <FormControl disabled={currentCommand!=='Put'} className={classes.textField} fullWidth>
            <InputLabel>Features</InputLabel>
            <Select className={classes.textField} value={subscriberData.features} onChange={(e) => setSubscriberData({ ...subscriberData, features: e.target.value })}>
                <MenuItem value='callForwardNoReply'>Call Forward No Reply</MenuItem>
            </Select>
        </FormControl>

        </>
    );
}

export default AdditionalFields;