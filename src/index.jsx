import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MainRouter from './layout/MainRouter';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#263238',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MainRouter />
  </ThemeProvider>,
  document.getElementById('root'),
);
