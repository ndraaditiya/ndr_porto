import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    dark: {
      main: '#221f1f',
      contrastText: '#fff',
    },
    grey: {
      main: '#5a5a5a',
      contrastText: '#fff',
      color: '#fff'
    },
    white: {
      main:'#fff',
      contrastText: '#56a24f',
    },
    primary: {
      main: '#fff000',
      contrastText: '#fff',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
