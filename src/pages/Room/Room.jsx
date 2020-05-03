import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Video from '../../components/Video';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Room = ({ location, history }) => {
  const classes = useStyles();
  if (location.state === null || location.state === undefined) {
    return (
      <>
        <center>

          <img src="https://dynamic.brandcrowd.com/preview/logodraft/d10203b4-5945-466b-b0ae-7151aa298566/image/large.png" title="ubeatLogo" alt="ubeatLogo" width="300" />
          <Typography component="h1" variant="h5">
          No room defined please go back
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ width: '30%', display: 'block' }}
              onClick={() => history.push('/')}
            >
            Back Home
            </Button>
          </Typography>
        </center>
      </>
    );
  }

  const { nom } = location.state;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img
          src="https://dynamic.brandcrowd.com/preview/logodraft/d10203b4-5945-466b-b0ae-7151aa298566/image/large.png"
          title="logo"
          alt="logo"
          width="300"
        />
        <Typography component="h1" variant="h5">
          Hello bienvenu :
          {' '}
          <b>{ nom }</b>
          {/* <Video /> */}
        </Typography>
        <br />
      </div>
    </Container>
  );
};

export default withRouter(Room);
