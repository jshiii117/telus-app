import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { Stack } from '@mui/material';
import { getSubscriber, deleteSubscriber, putSubscriber } from './api';

import GetButton from './components/GetButton';
import DeleteButton from './components/DeleteButton';
import PutButton from './components/PutButton';
import useStyles from './styles';
import ActivableForm from './components/ActivableForm';

export const App = () => {
  const classes = useStyles();

  const [featureOne, setFeatureOne] = useState({ callForwardNoReply: {provisioned: false, destination: ''}});
  const [subscriberData, setSubscriberData] = useState({phoneNumber: '', username: '', password: '', domain: '', status: '', features: featureOne})
  const [currentCommand, setCommand] = useState('Get');

  const clear = () => {
    setFeatureOne({ callForwardNoReply: {provisioned: false, destination: ''}});
    setSubscriberData({phoneNumber: '', username: '', password: '', domain: '', status: '', features: featureOne});
  };

  const handleSubmit = async (e) => {
    if (subscriberData.phoneNumber.length >= 10) {
      switch (currentCommand) {
        case 'Get':
          e.preventDefault();
          const res = await getSubscriber(subscriberData.phoneNumber);
          try {
            console.log(res.features.callForwardNoReply);
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
          } catch (error) {
            console.log('Invalid phone number');
            clear();
          }
          break;
        case 'Put':
          putSubscriber(subscriberData.phoneNumber, subscriberData);
          clear();
          break;
        case 'Delete':
          deleteSubscriber(subscriberData.phoneNumber);
          clear();
          break;
        default:
          return;
      }
      console.log(`Submitting form with command: ${currentCommand}`);
      setCommand('Get');
    } else {
      e.preventDefault();
      console.log('Invalid phone number');
    }
  };


  return (
    <>
      <div className={classes.paperParent}>
      <Paper className={classes.paper}>
        <form className={`${classes.root} ${classes.form}`} autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h6">IMS Subscriber Panel</Typography>
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


