import React from 'react';
import useStyles from './styles';

const GetButton = ({ currentCommand, setCommand }) => {

    const classes = useStyles();
    
    return (
        currentCommand === 'Get'?
        <button className={classes.activeButton} onClick={() => { setCommand('Get')}}>
            Get a subscriber
        </button>
        :
        <button className={classes.button} onClick={() => { setCommand('Get')}}>
        Get a subscriber
        </button>
    );
}

export default GetButton;