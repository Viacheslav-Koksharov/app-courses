import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { LessonProvider } from './context/LessonContextProvider';
import App from './components/App/App';
import 'modern-normalize/modern-normalize.css';
import './index.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
]);
root.render(
  <StrictMode>
    <LessonProvider>
      <RouterProvider router={router} />
    </LessonProvider>
  </StrictMode>,
);
