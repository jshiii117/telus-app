import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { Stack } from '@mui/material';
import { getSubscriber, deleteSubscriber, putSubscriber } from './api';
import { GET, DELETE, PUT } from './constants/actionTypes';

import GetButton from './components/GetButton';
import DeleteButton from './components/DeleteButton';
import PutButton from './components/PutButton';
import useStyles from './styles';
import ActivableForm from './components/ActivableForm';

export const App = () => {
  const classes = useStyles();

  const [featureOne, setFeatureOne] = useState({ callForwardNoReply: {provisioned: false, destination: ''}});
  const [subscriberData, setSubscriberData] = useState({phoneNumber: '', username: '', password: '', domain: '', status: '', features: featureOne})
  const [currentCommand, setCommand] = useState(GET);
  const [helpText, setHelpText] = useState('Awaiting an action')

  const clear = () => {
    setFeatureOne({ callForwardNoReply: {provisioned: false, destination: ''}});
    setSubscriberData({phoneNumber: '', username: '', password: '', domain: '', status: '', features: featureOne});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (subscriberData.phoneNumber.length >= 10) {
      switch (currentCommand) {
        case GET:
          const res = await getSubscriber(subscriberData.phoneNumber);
          try {
            setSubscriberData({
              phoneNumber: res.phoneNumber,
              username: res.username,
              password: res.password,
              domain: res.domain,
              status: res.status,
              features: {
                callForwardNoReply: {
                  destination: res.features.callForwardNoReply.destination,
                  provisioned: res.features.callForwardNoReply.provisioned
                }
              }
            });
            setHelpText(`Showing information for ${subscriberData.phoneNumber}`); 
          } catch (error) {
            setHelpText(`No data exists for ${subscriberData.phoneNumber}`); 
          }
          break;
        case PUT:
          putSubscriber(subscriberData.phoneNumber, subscriberData);
          setHelpText(`Updated information for ${subscriberData.phoneNumber}`);
          clear();
          break;
        case DELETE:
          deleteSubscriber(subscriberData.phoneNumber);
          setHelpText(`Deleted information at ${subscriberData.phoneNumber}`); 
          clear();
          break;
        default:
          return;
      }
      console.log(`Submitting form with command: ${currentCommand}`);
      setCommand(GET);
    } else {
      setHelpText('Phone number must be greater than 10 characters'); 
    }
  };

  return (
    <>
      <div className={classes.paperParent}>
      <Paper className={classes.paper}>
        <form className={`${classes.root} ${classes.form}`} autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h4">IMS Subscriber Panel</Typography>
          <Typography variant="h6">{helpText}</Typography>
          <TextField required fullWidth color="primary" name="phoneNumber" variant="outlined" label="Phone Number" value={subscriberData.phoneNumber} onChange={(e) => setSubscriberData({ ...subscriberData, phoneNumber: e.target.value })}/>
          <ActivableForm currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData} featureOne={featureOne} setFeatureOne={setFeatureOne}/>
          <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
        </form>
      </Paper>
      <Stack className={classes.optionBar} direction='row'>
        <GetButton currentCommand={currentCommand} setCommand={setCommand}/>
        <DeleteButton currentCommand={currentCommand} setCommand={setCommand}/>
        <PutButton currentCommand={currentCommand} setCommand={setCommand}/>
      </Stack>
      </div>
    </>
  );
};

export default App;


