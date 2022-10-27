import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paperParent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  paper: {
    marginLeft: '30%',
    marginRight: '30%',
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginTop: 10,
    marginBottom: 10,
    width: '50%',
  },
  optionBar: {
    marginTop: 10,
  },
  title: {
    alignItems: 'center'
  }
}));

