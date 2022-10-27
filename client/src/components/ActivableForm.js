import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';
import ActivableField from './ActivableField';


const ActivableForm = ({ currentCommand, subscriberData, setSubscriberData, featureOne }) => {
    return (
        <>
        <ActivableField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'username'}/>
        <ActivableField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'password'}/>
        <ActivableField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'domain'}/>
        <ActivableField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'status'}/>
    
        <FormControl margin='dense' fullWidth disabled={currentCommand!=='Put'} >
            <InputLabel>Features</InputLabel>
            <Select value={featureOne} onChange={(e) => {setSubscriberData({...subscriberData, features: featureOne})}}>
                <MenuItem value={featureOne}>Call Forward No Reply</MenuItem>
            </Select>
        </FormControl>

        <FormControl margin='dense' fullWidth disabled={currentCommand!=='Put'} >
            <InputLabel disabled>Provisioned</InputLabel>
            <Select value={subscriberData.features.callForwardNoReply.provisioned} onChange={(e) => {setSubscriberData({...subscriberData, features: {callForwardNoReply: {destination: subscriberData.features.callForwardNoReply.destination, provisioned: e.target.value}}})}}>
                <MenuItem value={true}>True</MenuItem>
                <MenuItem value={false}>False</MenuItem>
            </Select>
        </FormControl>

        <TextField disabled={currentCommand!=='Put'} fullWidth name={'destination'} variant="outlined" label='Destination' value={subscriberData.features.callForwardNoReply.destination} onChange={(e) => { setSubscriberData({...subscriberData, features: {callForwardNoReply: {destination: e.target.value, provisioned: subscriberData.features.callForwardNoReply.provisioned}}})}}/>
        </>
    );
}

export default ActivableForm;