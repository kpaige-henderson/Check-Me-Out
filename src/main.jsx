import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import App from './App.jsx';
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1> Try Again</h1>,
        children: [
            {
                index: true,
                element:
                 <About />
            },
            {
                path: '/Resume',
                element: <Resume />,   
            },
            {
                path: '/Portfolio',
                element: <Portfolio/>,  
            },
            {
                path: '/Contact',
                element: <Contact/>,   
            }

        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);


