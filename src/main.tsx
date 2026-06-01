import { createRoot } from 'react-dom/client'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <HashRouter>
      <App />
    </HashRouter>
)