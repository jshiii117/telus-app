import React from 'react';
import useStyles from './styles';

const PutButton = ({ currentCommand, setCommand }) => {

    const classes = useStyles();
    
    return (
        currentCommand === 'Put'?
        <button className={classes.activeButton} onClick={() => { setCommand('Put')}}>
            Update a subscriber
        </button>
        :
        <button className={classes.button} onClick={() => { setCommand('Put')}}>
            Update a subscriber
        </button>
    );
}

export default PutButton;