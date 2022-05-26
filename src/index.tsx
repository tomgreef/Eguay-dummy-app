import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './components/app/Index';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Register from './components/register/Register'
import CrearSubasta from './components/crearSubasta/CrearSubasta';
import Login from './components/login/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Incrementales de 4
const theme = createTheme({
  palette: {
    primary: {
      main: "#880E0D",
    },
    secondary: {
      main: "#000000"
    },
    background: {
      default: "#F7F7F7"
    }
  },
  typography: {
    allVariants: {
      color: "black"
    }
  }
});


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/iniciarSesion" element={<Login />} />
          <Route path="/registrar" element={<Register />} />
          <Route path="/crearSubasta" element={<CrearSubasta />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
