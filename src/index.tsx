import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import App from 'App';
import { LessonProvider } from 'context/LessonContextProvider';
import 'index.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename='/app-courses'>
      <LessonProvider>
        <App />
      </LessonProvider>
    </BrowserRouter>
  </StrictMode>,
);