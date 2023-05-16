import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './components/Atoms/Router-Page/contact';
import Login from './components/Atoms/Router-Page/login';
import Home from './components/Atoms/Router-Page/home';
import About from './components/Atoms/Router-Page/about';
import Projects from './components/Atoms/Router-Page/projects';
import Videos from './components/Atoms/Router-Page/videos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  
{
  path: "/home",
  element: <Home/>
},
{
  path: "/about",
  element: <About/>
},
{
  path: "/projects",
  element: <Projects/>
},
{
  path: "/videos",
  element: <Videos/>
},
{
  path: "/contact",
  element: <Contact/>
},
{
  path: "/login",
  element: <Login/>
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
