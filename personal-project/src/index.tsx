import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import MusicPage from './MusicPage';
import StoryPage from './StoryPage';
import NotFoundPage from './NotFoundPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='resume' element={<ResumePage />} />
          <Route path='story' element={<StoryPage />} />
          <Route path='music' element={<MusicPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
