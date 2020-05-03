/* eslint-disable no-undef */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

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

const Home = ({ history }) => {
  const classes = useStyles();
  const [nom, setNom] = useState('');
  const [error, setError] = useState('');

  const submitForm = async () => {
    if (nom.length < 0) {
      setError("Merci d'entrer un nom");
    } else if (nom.length < 3) {
      setError('Le nom d\'utilisateur doit être supérieur à 3 charactères');
    } else {
      history.push({
        pathname: `/room/${nom}`,
        state: { nom },
      });
    }
  };

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
          Création d'un salon de chat
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nom"
            label="Entrez votre nom"
            value={nom}
            name="nom"
            autoFocus
            onChange={(e) => setNom(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => submitForm()}
          >
            Créer
          </Button>
          <p>{error}</p>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(Home);
