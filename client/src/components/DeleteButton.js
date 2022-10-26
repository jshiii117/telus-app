import React from 'react';
import useStyles from './styles';

const DeleteButton = ({ currentCommand, setCommand }) => {

    const classes = useStyles();
    
    return (
        currentCommand === 'Delete'?
        <button className={classes.activeButton} onClick={() => { setCommand('Delete')}}>
            Delete a subscriber
        </button>
        :
        <button className={classes.button} onClick={() => { setCommand('Delete')}}>
        Delete a subscriber
        </button>
    );
}

export default DeleteButton;