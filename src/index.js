import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {QuizProvider} from "./context/quiz-context";
import { AuthProvider } from "./context/auth-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

