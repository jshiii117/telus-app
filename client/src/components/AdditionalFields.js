import React from 'react';
import useStyles from './styles';
import { Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';
import AdditionalField from './AdditionalField';

const AdditionalFields = ({ currentCommand, subscriberData, setSubscriberData }) => {

    const classes = useStyles();
    
    return (
        <>
        <AdditionalField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'username'}/>

        <AdditionalField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'password'}/>

        <AdditionalField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'domain'}/>

        <AdditionalField currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} property={'status'}/>
        
        <FormControl disabled={currentCommand!=='Put'} fullWidth>
            <InputLabel>Features</InputLabel>
            <Select value={subscriberData.features.featureName} onChange={(e) => setSubscriberData({ ...subscriberData, features: { ...subscriberData.features, callForwardNoReply: {provisioned: subscriberData.features.callForwardNoReply.provisioned, destination: subscriberData.features.callForwardNoReply.desination}}})}>
                <MenuItem value={'Call Forward No Reply'}>Call Forward No Reply</MenuItem>
            </Select>
        </FormControl>
        
        <FormControl disabled={currentCommand!=='Put'} fullWidth>
            <InputLabel>Provisioned</InputLabel>
            <Select value={subscriberData.features.callForwardNoReply.provisioned} onChange={(e) => setSubscriberData({ ...subscriberData, features: { ...subscriberData.features, callForwardNoReply: {...subscriberData.features.callForwardNoReply, provisioned: e.target.value}}})}>
                <MenuItem value={true}>True</MenuItem>
                <MenuItem value={false}>False</MenuItem>
            </Select>
        </FormControl>

        <TextField disabled={currentCommand!=='Put'} fullWidth name={'destination'} variant="outlined" label='Destination' value={subscriberData.features.callForwardNoReply.destination} onChange={(e) => setSubscriberData({ ...subscriberData, features: { ...subscriberData.features, callForwardNoReply: {...subscriberData.features.callForwardNoReply, destination: e.target.value}}})}/>
        </>
    );
}

export default AdditionalFields;