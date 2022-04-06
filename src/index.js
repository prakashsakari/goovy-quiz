import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import {QuizProvider} from "./context/quiz-context";
// import { AuthProvider } from "./context/auth-context";
// import { FilterProvider } from "./context/filter-context";

import {QuizProvider, AuthProvider, FilterProvider} from "./context"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <AuthProvider>
          <FilterProvider>
          <App />
          </FilterProvider>
        </AuthProvider>
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

