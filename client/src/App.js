import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { Stack } from '@mui/material';
import { getSubscriber, deleteSubscriber, putSubscriber } from './api';

import GetButton from './components/GetButton';
import DeleteButton from './components/DeleteButton';
import PutButton from './components/PutButton';
import useStyles from './styles';
import AdditionalFields from './components/AdditionalFields';

export const App = () => {
const classes = useStyles();

  const [subscriberData, setSubscriberData] = useState({phoneNumber: '', username: '', password: '', domain: '', status: '', features: {}})
  const [currentCommand, setCommand] = useState('Get');

  const clear = () => {
    setSubscriberData({phoneNumber: '', username: '', password: '', domain: '', status: '', features: {}});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    switch (currentCommand){
      case 'Get':
        const res = await getSubscriber(subscriberData.phoneNumber);
        try{
          setSubscriberData({phoneNumber: res.phoneNumber, username: res.username, password: res.password, domain: res.domain, status: res.status, features: res.features});
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
  }    

  return (
    <>
      <div className={classes.paperParent}>
      <Paper className={classes.paper}>
        <form className={`${classes.root} ${classes.form}`} autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h6">IMS Subscriber Panel</Typography>

          <TextField fullWidth color="primary" name="phoneNumber" variant="outlined" label="Phone Number" value={subscriberData.phoneNumber} onChange={(e) => setSubscriberData({ ...subscriberData, phoneNumber: e.target.value })}/>

          <AdditionalFields currentCommand={currentCommand} subscriberData={subscriberData} setSubscriberData={setSubscriberData}/>

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


